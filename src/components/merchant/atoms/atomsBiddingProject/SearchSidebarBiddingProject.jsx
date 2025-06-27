import React, { useState, useRef } from 'react';
import search from "../../../../assets/images/Navbar/search (1).png";
import config from '../../../../config';

function SearchSidebarBiddingProject() {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef(null);

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
      console.log('Bidding Project Search Results:', data);
    } catch (error) {
      console.error('Bidding Project search error:', error);
    }
  };
  return (
    <div className="relative">
      <form className="relative flex items-center mb-3" onSubmit={handleSearch} autoComplete="off">
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
          placeholder="Search"
          className="px-3 w-full rounded-[13px] text-black opacity-50 h-full focus:border-blue-500 focus:shadow-custom outline-0 min-h-[45px]"
        />
        <button
          type="submit"
          className="absolute right-4 flex items-center justify-center h-full"
        >
          <img src={search} alt="search" className="md:w-[20px] w-[20px]" />
        </button>
      </form>
      {showDropdown && (
        <div className="absolute left-0 right-0 top-full -mt-3 bg-white border border-gray-200 rounded-b-xl shadow-lg z-10" style={{ maxHeight: '200px', overflowY: 'auto' }}>
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
  )
}

export default SearchSidebarBiddingProject