import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BusinessLogo from "../../../../assets/icons/logobussness.png";
import LogoUpload from "./SettingOverviewForm/LogoUpload";
import AvailabilityToggle from "./SettingOverviewForm/AvailabilityToggle";
import FormField from "./SettingOverviewForm/FormField";
import SocialMediaInput from "./SettingOverviewForm/SocialMediaInput";
import {  FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaSquareBehance } from "react-icons/fa6";

const socialPlatforms = [
  { name: 'behanceURL', icon: <FaSquareBehance color="#6161FF" size={30} />, placeholder: 'Behance URL' },
  { name: 'instagramURL', icon: <SiInstagram color="#FF2C9C" size={30} />, placeholder: 'Instagram URL' },
  { name: 'facebookURL', icon: <FaFacebookSquare color="#1877F2" size={30} />, placeholder: 'Facebook URL' },
  { name: 'linkedinURL', icon: <FaLinkedin color="#0077B5" size={30} />, placeholder: 'LinkedIn URL' },
  { name: 'twitterURL', icon: <FaTwitterSquare color="#1DA1F2" size={30} />, placeholder: 'Twitter URL' },
];

const SettingOverview = () => {
  const [logo, setLogo] = useState(BusinessLogo);
  const [isAvailable, setIsAvailable] = useState(true);
  const [socialFields, setSocialFields] = useState(['behanceURL', 'instagramURL']);

  const toggleAvailability = () => setIsAvailable(!isAvailable);

  const addSocialField = () => {
    const nextField = socialPlatforms[socialFields.length];
    if (nextField) {
      setSocialFields([...socialFields, nextField.name]);
    }
  };

  const removeSocialField = (field) => {
    setSocialFields(socialFields.filter(socialField => socialField !== field));
  };

  const formik = useFormik({
    initialValues: {
      BusinessName: "",
      PhoneNumber: "",
      BusinessEmail: "",
      location: "",
      WebsiteURL: "",
      Category: "",
      behanceURL: "",
      instagramURL: "",
      facebookURL: "",
      linkedinURL: "",
      twitterURL: "",
    },
    validationSchema: Yup.object({
      BusinessName: Yup.string().required("Business Name is required"),
      PhoneNumber: Yup.string().required("Phone Number is required"),
      BusinessEmail: Yup.string()
        .email("Invalid email address")
        .required("Business Email is required"),
      location: Yup.string().required("Location is required"),
      WebsiteURL: Yup.string().url("Invalid URL").required("Website URL is required"),
      Category: Yup.string().required("Category is required"),
      behanceURL: Yup.string().url("Invalid URL"),
      instagramURL: Yup.string().url("Invalid URL"),
      facebookURL: Yup.string().url("Invalid URL"),
      linkedinURL: Yup.string().url("Invalid URL"),
      twitterURL: Yup.string().url("Invalid URL"),
    }),
    onSubmit: (values) => {
      const formData = { ...values, logo, isAvailable };
      console.log(formData);
      // Handle form submission
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="">
        <div className="flex">
          <LogoUpload logo={logo} setLogo={setLogo} />
          <div className="flex-grow flex justify-end items-center">
            <AvailabilityToggle
              isAvailable={isAvailable}
              toggleAvailability={toggleAvailability}
            />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-5">
          <FormField label="Business Name" name="BusinessName" type="text" formik={formik} />
          <FormField label="Phone Number" name="PhoneNumber" type="text" formik={formik} />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-5">
          <FormField label="Business Email" name="BusinessEmail" type="email" formik={formik} />
          <FormField label="Location" name="location" type="text" formik={formik} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-5">
          <FormField label="Website URL" name="WebsiteURL" type="url" formik={formik} />
          <FormField label="Category" name="Category" type="text" formik={formik} />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-5">
          <div className="block w-full">
            <label>Social Media URLs</label>
            {socialFields.map((field, index) => {
              const platform = socialPlatforms.find(p => p.name === field);
              return (
                <SocialMediaInput
                  key={field}
                  label={platform.placeholder}
                  name={field}
                  icon={platform.icon}
                  formik={formik}
                  onDelete={() => removeSocialField(field)}
                />
              );
            })}
          </div>
        </div>
        <div className="mt-2 flex w-full justify-center">
          <div className="block">
            <button type="button" onClick={addSocialField} className="text-primary py-2 px-1 mb-5 rounded-xl block">
              + Add another Social
            </button>
            <button type="submit" className="bg-primary py-2 px-5 text-white rounded-xl">
              Save Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingOverview;
