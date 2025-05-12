import { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import x from "../../assets/images/x.png";

// import Api services
import { useFetchCategoriesQuery } from "../../services/userSingleServicesProviderApi";
import { useGetUserProfileQuery } from "../../services/userApi";
import { useCreateProfileMutation } from "../../services/userApi";

// Import PendingModal
import { PendingModal } from "./Pending";

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {
    data: userProfile,
    isLoading: profileLoading,
    error: profileError,
  } = useGetUserProfileQuery();

  // Add console logs to debug
  useEffect(() => {
    // Add more detailed logging
    console.log("WelcomeModal - userProfile:", userProfile);
    console.log("WelcomeModal - profileLoading:", profileLoading);
    console.log("WelcomeModal - profileError:", profileError);

    try {
      // Only show modal when we've confirmed user has no profile
      if (!profileLoading) {
        if (profileError) {
          console.error("Error loading profile:", profileError);
          setOpen(false); // Don't show modal on error
        } else if (!userProfile || !userProfile.data) {
          console.log("No user profile found, showing welcome modal");
          setOpen(true);
        } else {
          console.log("User profile exists, hiding welcome modal");
          setOpen(false);
        }
      }
    } catch (error) {
      console.error("Error in welcome modal effect:", error);
    }
  }, [userProfile, profileLoading, profileError]);

  // Handle errors gracefully
  if (profileError) {
    console.error("Profile error in WelcomeModal:", profileError);
  }

  const { data: categories = [], isLoading: isLoadingCategories } =
    useFetchCategoriesQuery();
  const [createProfile, { isLoading, isSuccess, isError, error }] =
    useCreateProfileMutation();
  console.log("categories====>", categories);
  // Show modal only if user doesn't have a profile and we're not loading
  useEffect(() => {
    // if (!profileLoading && !userProfile) {
    //   console.log("Setting modal open to TRUE");
    //   setOpen(true);
    // } else if (userProfile.data.current_status == "pending") {
    //   console.log("Setting modal open to FALSE");
    //   setOpen(true);
    // } else if (userProfile.data.current_status == "completed") {
    //   setOpen(false);
    // }
    if (!profileLoading && userProfile && userProfile.data) {
      if (userProfile.data.current_status === "pending") {
        console.log("Setting modal open to FALSE");
        setOpen(true);
      } else if (userProfile.data.current_status === "completed") {
        setOpen(false);
      }
    } else if (!profileLoading && (!userProfile || !userProfile.data)) {
      setOpen(true);
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] p-4">
      {/* Welcome Modal - hidden when success */}
      <div
        className={`bg-white overflow-y-auto  rounded-lg shadow-xl w-full max-w-4xl  py-6 px-5 h-[90vh] overflow-scroll transition-all duration-300 ${isSuccess ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
      >
        <div className="flex items-center gap-2">
          <Link to={"/"}>
            <img src={logo} className="w-[150px]" alt="Logo" />
          </Link>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="   grid lg:grid-cols-8  h-full"
        >
          {/* Left section */}
          <div className="p-8   col-span-4 flex items-center  w-full relative h-full">
            <div className="">

            </div>
            <div className="relative flex-grow flex px-5  items-center justify-center ">

              <img src={x} alt="Illustration" />
            </div>
          </div>

          {/* Right section */}
          <div className="p-8  col-span-4    h-full o">
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
                    className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B7FF6]"
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
                    className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B7FF6]"
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
                    className="w-full h-14 px-4 text-left bg-slate-50 rounded-xl flex items-center justify-between border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B7FF6]"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="text-gray-700">
                      {categories.data?.results?.find(
                        (c) => c.id === formik.values.category
                      )?.name || "Select Category"}
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
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg">
                      <div className="p-2">
                        {categories.data.results.map((category) => (
                          <div
                            key={category.id}
                            className="flex items-center p-2 hover:bg-slate-50 cursor-pointer rounded-xl"
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
                className="w-full h-12 text-lg bg-[#7B7FF6] hover:bg-[#6366F1] text-white rounded-xl mt-8 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Start Now"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Pending Modal - shown when success */}
      <div
        className={`fixed inset-0 flex items-center justify-center transition-all duration-300 ${isSuccess ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <PendingModal />
      </div>
    </div>
  );
}

