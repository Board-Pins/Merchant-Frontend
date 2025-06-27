import React, { useState, useRef } from 'react';
import search_icon from '../../../../../assets/icons/Frame 26872.png'
import config from '../../../../../config';

function InputSearch() {
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
      const response = await fetch(`${ApiURL}/users-service/profiles/search/?q=${encodeURIComponent(value)}`);
      if (!response.ok) {
        setSuggestions([]);
        setShowDropdown(true);
        setLoading(false);
        return;
      }
      const data = await response.json();
      const results = Array.isArray(data?.data?.results) ? data.data.results : [];
      const getLabel = (item) => {
        if (!item) return '';
        for (const key in item) {
          if (typeof item[key] === 'string' && item[key].length > 0) return item[key];
        }
        if (item.user && item.user.email) return item.user.email;
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
      const response = await fetch(`${ApiURL}/users-service/profiles/search/?q=${encodeURIComponent(searchValue)}`);
      if (!response.ok) {
        setSuggestions([]);
        setShowDropdown(true);
        setLoading(false);
        return;
      }
      const data = await response.json();
      console.log('Chat Search Results:', data);
    } catch (error) {
      console.error('Chat search error:', error);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearch} autoComplete="off">
        <div className='w-full bg-[#F5F6FA] rounded-xl h-[45px] flex items-center p-4'>
          <img src={search_icon} alt='search chat' className='w-[20px] opacity-50' />
          <input
            type='text'
            value={searchValue}
            onChange={handleInputChange}
            onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
            className='outline-0 px-3 h-100 w-full bg-transparent'
            placeholder=' Search for chat'
            style={{ position: 'relative', zIndex: 2 }}
          />
        </div>
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
  )
}

export default InputSearch