import React from "react";
import { Field, useFormikContext } from "formik";

const BusinessTypeSelector = () => {
  const { values, setFieldValue } = useFormikContext();

  const businessTypes = [
    "Agency",
    "Consultancy",
    "Studio",
    "Startup",
    "Small Business",
    "Medium Business",
    "Enterprise",
    "Other"
  ];

  return (
    <div className="mb-4">
      <label className="block text-sm mb-1">Business Type</label>
      <div className="grid grid-cols-2 gap-2">
        {businessTypes.map((type) => (
          <div
            key={type}
            className={`border rounded-lg p-2 cursor-pointer ${
              values.business_type === type
                ? "border-[#6161FF] bg-[#E6ECF9]"
                : "border-gray-300"
            }`}
            onClick={() => setFieldValue("business_type", type)}
          >
            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full border mr-2 ${
                  values.business_type === type
                    ? "border-[#6161FF] bg-[#6161FF]"
                    : "border-gray-400"
                }`}
              />
              <span className="text-sm">{type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessTypeSelector;