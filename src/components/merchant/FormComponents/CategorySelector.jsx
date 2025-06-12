import React, { useState, useMemo, useRef, useEffect } from "react";
import { Field } from "formik";
import { IoMdArrowDropdown } from "react-icons/io";
import { useFetchCategoriesQuery } from "../../../services/userSingleServicesProviderApi";
import { Skeleton } from "@mui/material";

const CategorySelector = ({ setFieldValue, name, title, placeholder, categories: propCategories }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const dropdownRef = useRef(null);

  // Fetch categories using the hook
  const { data: fetchedData, error, isLoading } = useFetchCategoriesQuery();

  // Get only root categories (categories without parents)
  const getRootCategories = (categories) => {
    if (!categories) return [];
    return categories.filter(category => category.parent === null);
  };

  const allCategories = useMemo(() => {
    if (propCategories) {
      return typeof propCategories === 'object'
        ? Object.keys(propCategories)
        : [];
    }

    // Handle the API response structure
    const categories = fetchedData?.data?.results || [];
    return getRootCategories(categories);
  }, [propCategories, fetchedData]);

  // Filter categories based on search term
  const categoriesToRender = useMemo(() => {
    if (!allCategories) return [];

    if (!searchTerm) return allCategories;

    return allCategories.filter(category => {
      const categoryName = typeof category === 'object' ? category.name : category;
      return categoryName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [allCategories, searchTerm]);

  const handleCategoryChange = (categoryId, categoryName) => {
    const updatedCategories = selectedCategories.includes(categoryName)
      ? selectedCategories.filter((name) => name !== categoryName)
      : [...selectedCategories, categoryName];

    setSelectedCategories(updatedCategories);
    setFieldValue(name, updatedCategories);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsTyping(true);
    if (!showCategories) {
      setShowCategories(true);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCategories(false);
        setIsTyping(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderCategoryWithChildren = (category) => {
    return (
      <div key={category.id} className="font-poppins">
        {/* Parent category */}
        <div className="text-sm py-1">
          <label className="flex items-center space-x-2 cursor-pointer">
            <Field
              type="checkbox"
              name={`categories`}
              checked={selectedCategories.includes(category.name)}
              onChange={() => handleCategoryChange(category.id, category.name)}
              className="form-checkbox h-4 w-4 text-[#6161FF] rounded border-gray-300 focus:ring-[#6161FF]"
            />
            <span className="px-2 font-medium">{category.name}</span>
          </label>
        </div>

        {/* Children categories */}
        {category.children && category.children.length > 0 && (
          <div className="text-sm py-1 ml-4">
            {category.children.map(child => (
              <div key={child.id} className="text-sm py-1">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <Field
                    type="checkbox"
                    name={`categories`}
                    checked={selectedCategories.includes(child.name)}
                    onChange={() => handleCategoryChange(child.id, child.name)}
                    className="form-checkbox h-4 w-4 text-[#6161FF] rounded border-gray-300 focus:ring-[#6161FF]"
                  />
                  <span className="px-2">{child.name}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (isLoading && !propCategories) {
    return <Skeleton height={56} />;
  }

  const displayText = isTyping
    ? searchTerm
    : selectedCategories.length
      ? selectedCategories.join(", ") : "";

  return (
    <div className="relative mb-4" ref={dropdownRef}>
      {title && <label className="block mb-2 text-sm font-medium">{title}</label>}

      <div
        className="flex items-center justify-between border border-gray-300 rounded-lg p-3 cursor-pointer bg-[#F9F9F9]"
        onClick={() => setShowCategories(!showCategories)}
      >
        <div className="flex-grow">
          <input
            type="text"
            placeholder={placeholder}
            value={displayText}
            onChange={handleInputChange}
            className="w-full outline-none border-none bg-[#F9F9F9] text-gray-700 placeholder-gray-500"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering dropdown toggle
              setShowCategories(true);
            }}
          />
        </div>
        <IoMdArrowDropdown size={20} className="text-gray-500" />
      </div>

      {showCategories && (
        <div className="absolute z-10 mt-1 w-full bg-[#F9F9F9] border border-gray-200 rounded-lg shadow-lg max-h-[150px] overflow-y-auto">
          <div className="py-2 px-2">
            {categoriesToRender.length > 0 ? (
              categoriesToRender.map((category) => (
                typeof category === 'object'
                  ? renderCategoryWithChildren(category)
                  : (
                    <div key={category} className="text-sm py-2">
                      <label className="flex items-center space-x-2 cursor-pointer px-2">
                        <Field
                          type="checkbox"
                          name={`categories`}
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(null, category)}
                          className="form-checkbox h-4 w-4 text-[#6161FF] rounded border-gray-300 focus:ring-[#6161FF]"
                        />
                        <span className="px-2">{category}</span>
                      </label>
                    </div>
                  )
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">No categories found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySelector;




