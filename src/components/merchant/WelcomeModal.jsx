import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import x from "../../assets/images/x.png";
import CategorySelector from "./FormComponents/CategorySelector";

// import Api services
import { useFetchCategoriesQuery } from "../../services/userSingleServicesProviderApi";
import { useGetUserProfileQuery } from "../../services/userApi";
import { useCreateProfileMutation } from "../../services/userApi";

// Import PendingModal
import { PendingModal } from "./Pending";
import Modal from "./atoms/commonatoms/Modal";

const WelcomeModal = ({ isOpen, handleIsClose }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showPendingAfterSubmit, setShowPendingAfterSubmit] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch user profile
  const {
    data: userProfile,
    isLoading: profileLoading,
  } = useGetUserProfileQuery();

  // Fetch categories and create profile mutation
  const [createProfile, { isLoading }] = useCreateProfileMutation();

  // Handle profile navigation
  useEffect(() => {
    if (profileLoading || !userProfile?.data) return;

    localStorage.setItem('userProfile', JSON.stringify(userProfile.data));

    if (userProfile.data?.current_status === "completed") {
      handleIsClose();
      navigate('/dashboard');
    }
  }, [userProfile, profileLoading, navigate, handleIsClose]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    category: Yup.string().required("Category is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await createProfile(values).unwrap();
      if (result?.data) {
        localStorage.setItem('userProfile', JSON.stringify(result.data));
        setShowPendingAfterSubmit(true);
      }
    } catch (err) {
      console.error("Profile creation failed:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const current_status = userProfile?.data?.current_status;

  if (current_status === "pending" || showPendingAfterSubmit) {
    return <PendingModal isOpen={isOpen} handleIsClose={handleIsClose} />;
  }

  if (current_status === "rejected") {
    return null;
  }

  return (
    <Modal
      isOpen={open}
      onClose={handleIsClose}
      className="lg:w-[980px] w-[85%] lg:h-[500px] min-h-[70%] h-[85%] overflow-hidden bg-white rounded-3xl"
    >
      <div className="h-full text-[#333333] font-poppins">
        <div className="p-2 md:p-4">
          <img src={logo} alt="Board pins" className="w-[130px]" />
        </div>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            category: "factory",
            role: "merchant",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
            <Form className="flex-grow flex flex-col p-6">
              <div className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-2'} gap-8`}>
                <div className="flex justify-center items-center p-4">
                  <img
                    src={x}
                    alt="welcome"
                    className="w-[80%] max-w-[400px] object-contain logo-animation"
                  />
                </div>

                <div className="flex flex-col items-center space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Welcome to Board pins</h2>
                    <p className="text-xl text-gray-600 text-center">
                      Please choose Your category
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['firstName', 'lastName'].map((field) => (
                        <div key={field} className="space-y-2">
                          <label htmlFor={field} className="text-lg font-medium">
                            {field === 'firstName' ? 'First Name' : 'Last Name'}
                          </label>
                          <input
                            id={field}
                            name={field}
                            type="text"
                            placeholder={field === 'firstName' ? 'First Name' : 'Last Name'}
                            className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B7FF6] focus:border-transparent"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[field]}
                          />
                          {touched[field] && errors[field] && (
                            <div className="text-sm text-red-500">{errors[field]}</div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <label className="text-lg font-medium">
                        Merchant category <span className="text-red-500">*</span>
                      </label>
                      <CategorySelector
                        setFieldValue={setFieldValue}
                        name="categories"
                        title={""}
                        placeholder="Like graphic designer"
                        error={errors.categories && touched.categories}
                        errorMessage={errors.categories}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 text-lg bg-[#7B7FF6] hover:bg-[#6366F1] text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : "Start Now"}
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default WelcomeModal;