import React, { useState } from "react";
import icon from "../../../assets/icons/filter.png";
import MultiRangeSlider from "../atoms/commonatoms/MultiRangeSlider";
import { IoClose } from "react-icons/io5";
import SearchSidebarBiddingProject from "../atoms/atomsBiddingProject/SearchSidebarBiddingProject";
import Checkbox from "../atoms/atomsBiddingProject/Checkbox";

const SidebardBiddingProject = ({
  isSidebarOpen,
  toggleSidebar,
  statusItems,
  skillsItems,
  deadlineItems,
  headers,
}) => {
  const initialFilters = {
    status: statusItems.reduce((acc, item) => ({ ...acc, [item.value]: false }), {}),
    skills: skillsItems.reduce((acc, item) => ({ ...acc, [item.value]: false }), {}),
    deadline: deadlineItems.reduce((acc, item) => ({ ...acc, [item.value]: false }), {}),
  };

  const [filters, setFilters] = useState(initialFilters);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleChange = (section) => (event) => {
    const { name, checked } = event.target;

    // Log the name and the checked value
    console.log(`Name: ${name}, Checked: ${checked}`);

    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        [section]: {
          ...prevFilters[section],
          [name]: checked,
        },
      };

      if (section === "skills") {
        const updatedSelectedSkills = checked
          ? [...selectedSkills, name]
          : selectedSkills.filter((skill) => skill !== name);
        setSelectedSkills(updatedSelectedSkills);
      }

      return updatedFilters;
    });
  };

  const getClassNames = () =>
    `col-span-2 font-poppins  h-full bg-[#F8F8F8] rounded-xl lg:static lg:col-span-2 transition-transform duration-300 ease-in-out ${
      isSidebarOpen
        ? "fixed z-50 top-0 left-0 lg:w-full w-72 h-full transform translate-x-0"
        : "fixed z-50 top-0 -left-full lg:w-full w-72 h-full transform -translate-x-full lg:translate-x-0"
    } lg:block`;

  const handleRemoveSkill = (skill) => {
    setFilters((prevFilters) => {
      const updatedFilters = {
        ...prevFilters,
        skills: {
          ...prevFilters.skills,
          [skill]: false,
        },
      };
      return updatedFilters;
    });
    setSelectedSkills((prevSelectedSkills) =>
      prevSelectedSkills.filter((selectedSkill) => selectedSkill !== skill)
    );
  };

  return (
    <div className={getClassNames()}>
      <IoClose
        className="cursor-pointer bg-primary lg:hidden md:hidden text-white rounded-3xl absolute right-5 top-3 text-xl"
        onClick={toggleSidebar}
      />

      <main className="px-3 mb-12">
        <h2 className="py-5 text-dark font-bold gap-3 flex items-center">
          <img src={icon} alt="filter" className="w-[30px]" />
          {headers.filter}
        </h2>

        <SearchSidebarBiddingProject />

        {/* Status Filters */}
        <div className="py-2">
          <h1 className="text-dark py-1 text-sm font-semibold">{headers.status}</h1>
          <ul className="px-3">
            {statusItems.map((item) => (
              <Checkbox
                key={item.value}
                id={item.value}
                name={item.value}
                checked={filters.status[item.value]}
                onChange={handleChange("status")}
                label={item.label}
              />
            ))}
          </ul>
        </div>

        {/* Skills Filters */}
        <div className="py-2">
          <h1 className="text-dark py-1 text-sm font-semibold">{headers.skills}</h1>
          <div className="py-2">
            {selectedSkills.length > 0 && (
              <div className="flex gap-2 flex-wrap rounded-xl bg-white text-xs p-4">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 rounded-2xl border border-[#6161FF] text-[#6161FF] flex items-center gap-1"
                  >
                    {skill.charAt(0).toUpperCase() + skill.slice(1)}
                    <IoClose
                      className="cursor-pointer bg-primary text-white rounded-3xl"
                      onClick={() => handleRemoveSkill(skill)}
                    />
                  </span>
                ))}
              </div>
            )}
          </div>
          <ul className="bg-white rounded-xl p-2 px-3">
            {skillsItems.map((item) => (
              <Checkbox
                key={item.value}
                id={item.value}
                name={item.value}
                checked={filters.skills[item.value]}
                onChange={handleChange("skills")}
                label={item.label}
              />
            ))}
          </ul>
        </div>

        {/* Deadline Filters */}
        <div className="py-2">
          <h1 className="text-dark py-1 text-sm font-semibold">{headers.deadline}</h1>
          <ul className="px-3">
            {deadlineItems.map((item) => (
              <Checkbox
                key={item.value}
                id={item.value}
                name={item.value}
                checked={filters.deadline[item.value]}
                onChange={handleChange("deadline")}
                label={item.label}
              />
            ))}
          </ul>
        </div>

        {/* Price Range Slider */}
        <div className="py-2">
          <h1 className="text-dark py-1 text-sm font-semibold mb-4">{headers.priceRange}</h1>
          <MultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => {
              console.log(`min = ${min}, max = ${max}`);
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default SidebardBiddingProject;
