import { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import x from "../../assets/images/x.png";
import { useFetchCategoriesQuery } from "../../services/userSingleServicesProviderApi";
import { useCreateProfileMutation } from "../../services/userApi";
import { PendingModal } from "./Pending";
import { useGetUserProfileQuery } from "../../services/userApi";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { data: userProfile, isLoading: profileLoading, error: profileError } = useGetUserProfileQuery();

  // Add console logs to debug
  useEffect(() => {
    console.log("WelcomeModal - userProfile:", userProfile);
    console.log("WelcomeModal - profileLoading:", profileLoading);
    console.log("WelcomeModal - profileError:", profileError);
  }, [userProfile, profileLoading, profileError]);

  const { data: categories = [], isLoading: isLoadingCategories } =
    useFetchCategoriesQuery();
  const [createProfile, { isLoading, isSuccess, isError, error }] =
    useCreateProfileMutation();

  // Show modal only if user doesn't have a profile and we're not loading
  useEffect(() => {
    if (!profileLoading && !userProfile) {
      console.log("Setting modal open to TRUE");
      setOpen(true);
    } else {
      console.log("Setting modal open to FALSE");
      setOpen(false);
    }
  }, [userProfile, profileLoading]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      category: "factory",
      role: "merchant",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: async (values) => {
      try {
        await createProfile(values).unwrap();
        // Don't close the modal here, let isSuccess handle the UI change
      } catch (err) {
        console.error("Profile creation failed:", err);
      }
    },
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Welcome Modal - hidden when success */}
      <div
        className={`bg-white rounded-lg shadow-xl w-full max-w-4xl py-12 h-[80vh] overflow-hidden transition-all duration-300 ${isSuccess ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="flex items-center flex-col md:flex-row h-full"
        >
          {/* Left section */}
          <div className="p-8 flex items-center justify-center md:w-2/5 relative h-full">
            <div className="absolute top-[-60px] left-4">
              <div className="flex items-center gap-2">
                <Link to={"/"}>
                  <img src={logo} className="w-[200px]" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="relative w-full h-[300px]">
              <img src={x} alt="Illustration" />
            </div>
          </div>

          {/* Right section */}
          <div className="p-8 md:w-3/5 h-full overflow-y-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold">Welcome to Board pins</h2>
              <p className="text-xl text-gray-600 mt-2">
                Please choose Your category
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-lg font-medium block"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full h-14 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B7FF6]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-sm text-red-500">
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-lg font-medium block"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="w-full h-14 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B7FF6]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-sm text-red-500">
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-lg font-medium block">
                  Merchant category <span className="text-[#7B7FF6]">*</span>
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    className="w-full h-14 px-4 text-left bg-slate-50 rounded-md flex items-center justify-between border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B7FF6]"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="text-gray-700">
                      {categories.find((c) => c.id === formik.values.category)
                        ?.name || "Select Category"}
                    </span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""
                        }`}
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                      <div className="p-2">
                        {categories.map((category) => (
                          <div
                            key={category.id}
                            className="flex items-center p-2 hover:bg-slate-50 cursor-pointer rounded-md"
                            onClick={() => {
                              formik.setFieldValue("category", category.id);
                              setDropdownOpen(false);
                            }}
                          >
                            <div className="w-6 h-6 border border-[#7B7FF6] rounded flex items-center justify-center mr-2">
                              {formik.values.category === category.id && (
                                <div className="w-4 h-4 bg-[#7B7FF6] rounded-sm flex items-center justify-center">
                                  <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="text-white"
                                  >
                                    <path
                                      d="M5 12L10 17L19 8"
                                      stroke="currentColor"
                                      strokeWidth="3"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <span>{category.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {formik.touched.category && formik.errors.category && (
                  <div className="text-sm text-red-500">
                    {formik.errors.category}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full h-12 text-lg bg-[#7B7FF6] hover:bg-[#6366F1] text-white rounded-md mt-8 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Start Now"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Pending Modal - shown when success */}
      <div className={`fixed inset-0 flex items-center justify-center transition-all duration-300 ${isSuccess ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <PendingModal />
      </div>
    </div>
  );
}



