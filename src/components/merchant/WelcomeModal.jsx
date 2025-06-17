import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import x from "../../assets/images/x.png";
import CategorySelector from "./FormComponents/CategorySelector";
import { useTranslation } from 'react-i18next';
import correctIcon from "../../assets/icons/correct.png";

import { useGetUserProfileQuery, useCreateProfileMutation, useUpdateProfileMutation } from "../../services/userApi";
import Modal from "./atoms/commonatoms/Modal";
import { toast } from "react-toastify";

const WelcomeModal = ({ isOpen, handleIsClose }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [navigatingToBoard, setNavigatingToBoard] = useState(false);
  const [modalStep, setModalStep] = useState('form');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { data: userProfile, isLoading: profileLoading } = useGetUserProfileQuery();
  const [createProfile, { isLoading: isCreatingProfile }] = useCreateProfileMutation();
  const [updateProfile, { isLoading: isUpdatingProfile }] = useUpdateProfileMutation();


  useEffect(() => {

    const status = userProfile?.data?.current_status;

    console.log(status);
    switch (status) {
      case "pending":
        setModalStep('success');
        break;
      case "approved":
        if (!navigatingToBoard) {
          setNavigatingToBoard(true);
          handleIsClose();
          navigate('/myboard', { replace: true });
        }
        break;
      case "rejected":
        setModalStep('rejected');
        break;
      case "incomplete":
      default:
        if (!navigatingToBoard) {
          setModalStep('form');
        }
        break;
    }

    // Reset navigation state if status changes from approved
    if (navigatingToBoard && status !== "approved") {
      setNavigatingToBoard(false);
    }
  }, [userProfile, profileLoading, navigate, handleIsClose, navigatingToBoard]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("validation.firstNameRequired", "First name is required")),
    lastName: Yup.string().required(t("validation.lastNameRequired", "Last name is required")),
    categories: Yup.array().min(1, t("validation.categoryRequired", "Category is required")).required(t("validation.categoryRequired", "Category is required")),
  });

  const isFormValid = (values) => {
    return !validationSchema.isValidSync(values);
  }


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const profileData = { ...values, role: "merchant" };
      const result = await createProfile(profileData).unwrap();
      if (result?.data) {
        localStorage.setItem('userProfile', JSON.stringify(result.data));
        toast.success(result?.data?.en || t("profile.creationSuccess", "Profile created successfully!"));
        setModalStep('success');
      }
    } catch (err) {
      console.error("Profile creation failed:", err);
      toast.error(err?.data?.data.errors?.en || t("profile.creationError", "Profile creation failed. Please try again."));
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const renderRejected = () => (
    <div className="flex flex-col justify-center items-center text-center h-full p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
        {t("profile.statusRejected.title", "Application Status")}
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        {t("profile.statusRejected.message", "Unfortunately, your account application was not approved at this time.")}
      </p>
      <p className="text-md text-gray-600 mb-8">
        {t("profile.statusRejected.contactSupport", "If you believe this is an error, please contact support.")}
      </p>
      <button
        onClick={handleIsClose}
        className="bg-gray-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-600 transition-colors"
      >
        {t("common.close", "Close")}
      </button>
    </div>
  );

  const renderSuccess = () => {
    const handleGoToMyBoard = async () => {
      const status = { current_status: "approved" }
      const result = await updateProfile(status).unwrap();
      try {
        if (result?.data) {
          toast(t('welcome.boardAccess', 'Welcome! Accessing your board.'));
          // hide the modal
          handleIsClose();
          // navigate to my board
          navigate('/myboard', { replace: true });
        }
      } catch (err) {
        console.error("Profile update failed: ", err);
        toast.error(err?.data?.message || t("profile.updateError", "Profile update failed. Please try again."));
      }
    };
    return (
      <div className="flex flex-col items-center justify-center text-center h-full p-4 md:p-6 font-poppins text-[#333333]">
        <div className="w-130 h-130 md:w-72 md:h-72 rounded-full mb-4 flex items-center justify-center">
          <img
            src={correctIcon}
            alt={t('welcome.altText', 'Welcome illustration')}
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-xl md:text-5xl font-bold mb-3 text-green-600">
          {t('welcome.title', 'Welcome Aboard!')}
        </h1>
        <p className="text-gray-600 max-w-md mb-6">
          {t('welcome.description', 'Your account is all set up. You can now access your personal board to get started.')}
        </p>
        <button
          onClick={handleGoToMyBoard}
          className="bg-indigo-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-600 transition-colors"
        >
          {t('welcome.button.myBoard', 'Go to My Board')}
        </button>
      </div>
    );
  };

  const renderForm = () => (
    <>
      <div className="p-2 md:p-4">
        <img src={logo} alt="Board pins" className="w-[130px]" />
      </div>
      <div className={`flex flex-col ${isMobile ? 'h-[calc(100%-50px)]' : 'h-[calc(100%-60px)]'}`}>
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          <Formik
            initialValues={{
              firstName: userProfile?.data?.firstName || "",
              lastName: userProfile?.data?.lastName || "",
              categories: userProfile?.data?.categories || [],
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ values, errors, touched, handleChange, handleBlur, setFieldValue, isSubmitting }) => (
              <Form className="flex-grow flex flex-col">
                <div className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-2'} gap-8 md:gap-10 items-start md:items-center`}>
                  <div className="flex justify-center items-center p-4 md:p-6 order-first md:order-first w-full">
                    <img
                      src={x}
                      alt={t("profile.form.welcomeImageAlt", "Complete your profile illustration")}
                      className="w-[90%] md:w-[100%] max-w-[400px] md:max-w-[450px] object-contain logo-animation"
                    />
                  </div>

                  <div className="flex flex-col items-center space-y-6 w-full">
                    <div className="text-center mb-5">
                      <h2 className="text-3xl md:text-4xl font-bold">{t("profile.form.title", "Welcome to Board Pins")}</h2>
                      <p className="text-md md:text-lg text-gray-700">
                        {t("profile.form.subtitle", "Tell us a bit about yourself to get started.")}
                      </p>
                    </div>

                    <div className="space-y-4 md:space-y-6 w-full max-w-md">
                      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-3 md:gap-4`}>
                        {['firstName', 'lastName'].map((field) => (
                          <div key={field} className="space-y-1">
                            <label htmlFor={field} className="text-base md:text-lg font-medium">
                              {field === 'firstName' ? t("profile.form.firstName", "First Name") : t("profile.form.lastName", "Last Name")} <span className="text-red-500">*</span>
                            </label>
                            <input
                              id={field}
                              name={field}
                              type="text"
                              placeholder={field === 'firstName' ? t("profile.form.firstNamePlaceholder", "E.g., John") : t("profile.form.lastNamePlaceholder", "E.g., Doe")}
                              className="w-full h-10 md:h-12 px-3 md:px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B7FF6] focus:border-transparent text-sm md:text-base"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values[field]}
                            />
                            {touched[field] && errors[field] && (
                              <div className="text-xs md:text-sm text-red-500">{errors[field]}</div>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="space-y-1 md:space-y-2">
                        <label className="text-base md:text-lg font-medium">
                          Merchant category <span className="text-red-500">*</span>
                        </label>
                        <CategorySelector
                          setFieldValue={setFieldValue}
                          name="categories"
                          placeholder={t("profile.form.categoryPlaceholder", "E.g., Graphic Designer, Chef, Consultant")}
                          error={Boolean(errors.categories && touched.categories)}
                          errorMessage={errors.categories}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full h-10 md:h-12 text-base md:text-lg bg-[#7B7FF6] hover:bg-[#6366F1] text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={isFormValid(values)}
                      >
                        {isCreatingProfile || isSubmitting ? t("profile.form.submitting", "Creating Profile...") : t("profile.form.submitButton", "Create Profile & Continue")}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );

  const contentMap = {
    // loading: renderLoading,
    rejected: renderRejected,
    success: renderSuccess,
    form: renderForm,
  };

  return (
    <Modal
      isOpen={true}
      onClose={handleIsClose}
      className="lg:w-[1080px] w-[90%] lg:h-[720px] min-h-[70%] h-[85%] overflow-hidden bg-white rounded-3xl flex flex-col"
    >
      {contentMap[modalStep]?.()}
    </Modal>
  );
};

export default WelcomeModal;