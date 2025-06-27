import React, { useState, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import config from '../../../../config';

function HeaderSelectCompare() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef(null);

  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const fetchSuggestions = async (value) => {
    if (!value) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }
    setLoading(true);
    const ApiURL = config.apiBaseUrl;
    try {
      const response = await fetch(`${ApiURL}/profiles/search/?q=${encodeURIComponent(value)}`);
      if (!response.ok) {
        setSuggestions([]);
        setShowDropdown(true);
        setLoading(false);
        return;
      }
      const data = await response.json();
      const results = Array.isArray(data?.results) ? data.results : (Array.isArray(data) ? data : []);
      const getLabel = (item) => {
        if (!item) return '';
        for (const key in item) {
          if (typeof item[key] === 'string' && item[key].length > 0) return item[key];
        }
        return '';
      };
      setSuggestions(results.slice(0, 5).map(item => ({ ...item, label: getLabel(item) })));
      setShowDropdown(true);
    } catch (error) {
      setSuggestions([]);
      setShowDropdown(false);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setShowDropdown(false);
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(value);
    }, 300);
  };

  const handleSuggestionClick = (label) => {
    setSearchValue(label);
    setShowDropdown(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setShowDropdown(false);
    const ApiURL = config.apiBaseUrl;
    try {
      const response = await fetch(`${ApiURL}/profiles/search/?q=${encodeURIComponent(searchValue)}`);
      if (!response.ok) {
        setSuggestions([]);
        setShowDropdown(true);
        setLoading(false);
        return;
      }
      const data = await response.json();
      console.log('Compare Header Search Results:', data);
    } catch (error) {
      console.error('Compare header search error:', error);
    }
  };

  return (
    <div>
      <header className=" bg-white rounded-xl py-5 flex px-5 gap-5 items-center  w-full">
        <div className=" flex items-center px-3 w-full gap-1 bg-[#F9F9F9] rounded-lg">
          <IoSearchOutline size={22} color="#666666" />
          <form onSubmit={handleSearch} className="w-full" autoComplete="off">
            <input
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
              className=" py-2 w-full flex-grow px-4  bg-[#F9F9F9] outline-none "
              placeholder="Payment gateways"
              style={{ position: 'relative', zIndex: 2 }}
            />
          </form>
          {showDropdown && (
            <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 rounded-b-xl shadow-lg z-10" style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {loading ? (
                <div className="p-2 text-gray-500 text-sm">Loading...</div>
              ) : suggestions.length === 0 ? (
                <div className="p-2 text-gray-500 text-sm">No results</div>
              ) : suggestions.map((s, idx) => (
                <div
                  key={idx}
                  className="p-2 cursor-pointer hover:bg-gray-100 text-sm"
                  onMouseDown={() => handleSuggestionClick(s.label)}
                >
                  {s.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center relative">
          <div>
            <button
              className="flex items-center gap-1 bg-white shadow-xl text-sm font-medium border border-gray-100 text-primary rounded-xl p-4 py-2"
              onClick={toggleCategoriesDropdown}
            >
              Categories{" "}
              {isCategoriesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {isCategoriesOpen && (
              <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-40 p-2">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Category 1
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Category 2
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Category 3
                </li>
              </ul>
            )}
          </div>
          <div>
            <button
              className="flex items-center gap-1 bg-white shadow-xl text-primary rounded-xl text-sm font-medium border border-gray-100 p-4 py-2"
              onClick={toggleServicesDropdown}
            >
              Services {isServicesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {isServicesOpen && (
              <ul className="absolute bg-white shadow-lg rounded-lg mt-2 w-[44%] p-2">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Service 1
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Service 2
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Service 3
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderSelectCompare;
