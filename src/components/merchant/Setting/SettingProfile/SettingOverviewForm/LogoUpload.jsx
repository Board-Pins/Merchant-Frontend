import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const LogoUpload = ({ logo, setLogo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogo(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative flex">
      <label
        htmlFor="logo-upload"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
      >
        <img
          src={logo}
          alt="Business Logo"
          className="rounded-lg w-[100px] h-[100px]"
        />
        {isHovered && (
          <div className="absolute rounded-2xl inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <FaPlus className="text-white" size={30} />
          </div>
        )}
      </label>
      <input
        id="logo-upload"
        type="file"
        accept="image/png, image/jpeg, image/svg+xml"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default LogoUpload;
