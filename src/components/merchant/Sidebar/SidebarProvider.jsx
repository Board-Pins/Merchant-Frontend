import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IoMdExit } from "react-icons/io";
import { Icon } from "@iconify/react";
import Logo from "../../../assets/images/Logo.png";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import config from '../../../config';

const SidebarProvider = ({ handleIsopen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const [workspaces, setWorkspaces] = useState([]);
  const { t, i18n } = useTranslation();
  const [dropdowns, setDropdowns] = useState({
    chat: false,
    projectManagement: false,
    servicesProvider: false,
    compare: false,
    biddingProject: false,
    productionGroup: false,
    Setting: false,
  });
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef(null);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const location = useLocation();

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = i18n.language === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif';
  }, [i18n.language]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const menuItems = [
    { id: 1, icon: "octicon:apps-24", text: "My Board Pins", path: "myboard" },
    {
      id: 2,
      icon: "solar:chart-square-outline",
      text: "Dashboard",
      path: "dashboard",
    },
    {
      id: 3,
      icon: "fluent:chat-24-regular",
      text: "Chat",
      dropdown: "chat",
      subItems: [
        { text: "Chat", icon: "fluent:chat-24-regular", path: "/chat" },
        { text: "knowledge base", icon: "flowbite:brain-solid", path: "/knowledgebase" },
      ],
    },
    {
      id: 4,
      icon: "hugeicons:note-01",
      text: "Services Provider",
      dropdown: "servicesProvider",
      subItems: [
        { text: "Connected", icon: "ph:check-bold", path: "/services-provider" },
        { text: "Pinned", icon: "fluent:pin-28-filled", path: "/services-provider-pinned" },
      ],
    },
    {
      id: 5,
      icon: "hugeicons:message-done-02",
      text: "Project Management",
      dropdown: "projectManagement",
      subItems: [
        { text: "Tasks", icon: "fluent:task-list-square-16-regular", path: "/projectmangement-tasks" },
        {
          text: "SharedProjects",
          icon: "icon-park-twotone:correct",
          path: "/projectmangement-SharedProjects",
        },
      ],
    },
    {
      id: 6,
      icon: "fluent:web-asset-16-regular",
      text: "Bidding Projects",
      dropdown: "biddingProject",
      path: "/bidding-project/offer",
      subItems: [
        { text: "Create", icon: "ei:plus", path: "/create-bidding-project" },
        { text: "My Bids", icon: "ph:newspaper-clipping-duotone", path: "/mybids" },
        { text: "draft Projects", icon: "solar:file-outline", path: "/saved-BiddingProject" },
      ],
    },
    {
      id: 7,
      icon: "hugeicons:analytics-up",
      text: "Compare Space",
      path: "/compare",
      dropdown: "compare",
      subItems: [
        { text: "Compare", icon: "clarity:analytics-line", path: "/compare-between" },
        { text: "saved", icon: "ic:twotone-bookmark", path: "/compare/saved" },
      ],
    },
    {
      id: 8,
      icon: "fluent:people-community-48-filled",
      text: "Production Group",
      dropdown: "productionGroup",
      subItems: [
        { text: "Discover", icon: "hugeicons:discover-square", path: "/production-group" },
        { text: "My Requests", icon: "material-symbols-light:request-page-outline", path: "/production-group/myrequests" },
        { text: "saved PG", icon: "ic:twotone-bookmark", path: "/production-group/saved" },
      ],
    },
    { id: 9, text: "ACCOUNT" },
    {
      id: 10,
      icon: "ci:settings",
      text: "Setting",
      dropdown: "Setting",
      subItems: [
        { text: "billing", icon: "", path: "/setting-billing" },
        { text: "profile", icon: "", path: "/setting-profile" },
      ],
    },
    { id: 11, icon: "mdi:invite", text: "Invite", onClick: handleIsopen },
  ];


  useEffect(() => {
    const currentPath = location.pathname;

    // Find the exact or partial match for main items
    const currentItem = menuItems.find((item) =>
      currentPath.includes(item.path)
    );
    if (currentItem) {
      setSelectedItem(currentItem.id);
    }


    // Handle sub-items
    menuItems.forEach((item) => {
      if (item.subItems) {
        const currentSubItem = item.subItems.find((subItem) =>
          currentPath.includes(subItem.path)
        );
        if (currentSubItem) {
          setSelectedItem(item.id);
          setSelectedSubItem(currentSubItem.id);
        }
      }
    });
  }, [location.pathname, menuItems]); // Ensure menuItems is included in the dependency array

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleItemClick = (id) => {
    const clickedItem = menuItems.find(item => item.id === id);
    setSelectedItem(id);

    // Close the sidebar if the clicked item has subitems
    if (clickedItem && !clickedItem.subItems) {
      setIsOpen(false);

    }


  };

  const handleSubItemClick = (itemId, subItemId) => {
    setSelectedItem(itemId);
    setSelectedSubItem(subItemId);

    setIsOpen(false)

  };

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => {
      const updatedDropdowns = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === dropdown ? !prev[key] : false;
        return acc;
      }, {});
      return updatedDropdowns;
    });
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
    setSidebarSearch(value);
    setShowDropdown(false);
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(value);
    }, 300);
  };

  const handleSuggestionClick = (label) => {
    setSidebarSearch(label);
    setShowDropdown(false);
  };

  const handleSidebarSearch = async (e) => {
    e.preventDefault();
    setShowDropdown(false);
    const ApiURL = config.apiBaseUrl;
    try {
      const response = await fetch(`${ApiURL}/users-service/profiles/search/?q=${encodeURIComponent(sidebarSearch)}`);
      if (!response.ok) {
        setSuggestions([]);
        setShowDropdown(true);
        setLoading(false);
        return;
      }
      const data = await response.json();
      console.log('Sidebar Search Results:', data);
    } catch (error) {
      console.error('Sidebar search error:', error);
    }
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed ${isOpen ? "top-[1%]" : "top-[3%]"} ${isOpen ? "left-[48%]" : "left-[5%]"
          } p-2 rounded-lg z-50 md:hidden bg-white`}
      >
        {isOpen ? <IoMdExit /> : <MenuIcon color="#000" />}
      </button>

      <div
        className={`fixed inset-x-0 font-poppins px-4 h-full left-0 md:bg-transparent bg-white text-white w-72 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-40 md:static md:translate-x-0 py-4 top-0 md:py-0 md:h-full md:w-[19%]`}
      >
        <div className="flex justify-between items-center w-full">
          <Link to={"/myboard"}>
            <img src={Logo} className="w-[200px] pt-4" alt="Logo" />
          </Link>
        </div>

        <ul
          className="font-popines flex flex-col text-xs gap-4 font-[500] max-h-[90vh] overflow-y-auto py-4 px-1 mt-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4B5563 #1E1E1EBF",
          }}
        >
          <li className="bg-[#F2F2F2] rounded-lg flex items-center text-[#666666] p-4 relative">
            <FiSearch />
            <form onSubmit={handleSidebarSearch} className="flex-grow flex" autoComplete="off">
              <input
                type="text"
                value={sidebarSearch}
                onChange={handleInputChange}
                onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
                placeholder="Search"
                className="bg-transparent px-2 outline-0 flex-grow"
              />
            </form>
            {showDropdown && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-b-xl shadow-lg z-10" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                {loading ? (
                  <div className="p-2 text-gray-500 text-sm">Loading...</div>
                ) : suggestions.length === 0 ? (
                  <div className="p-2 text-gray-500 text-sm">No results</div>
                ) : suggestions.map((s, idx) => (
                  <div
                    key={idx}
                    className="p-2 cursor-pointer hover:bg-gray-100 text-sm text-black"
                    onMouseDown={() => handleSuggestionClick(s.label)}
                  >
                    {s.label}
                  </div>
                ))}
              </div>
            )}
          </li>

          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={`flex flex-col gap-1  px-2 py-2  ${selectedItem === item.id
                ? "bg-white shadow-custom2 rounded-lg py-3  text-[#6161FF]"
                : " text-dark"
                }`}
              onClick={() => {
                handleItemClick(item.id);
                if (item.onClick) item.onClick(); // Trigger onClick if available
              }}
            >
              <div
                className="flex items-center  gap-3 cursor-pointer"
                onClick={() => item.dropdown && toggleDropdown(item.dropdown)}
              >
                <div className="flex-grow flex items-center w-full gap-3">
                  {item.icon && <Icon icon={item.icon} width="25px" height="25px" />}
                  {item.text}
                </div>
                {item.dropdown && (
                  <div className=" flex justify-end  pe-4">
                    <Icon
                      icon={
                        dropdowns[item.dropdown]
                          ? "mdi:chevron-up"
                          : "mdi:chevron-down"
                      }
                      width="20px"
                      height="20px"
                    />
                  </div>
                )}
              </div>
              {item.subItems && dropdowns[item.dropdown] && (
                <ul className=" mt-2 space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      to={subItem.path}
                      key={subIndex}
                      className="flex items-center gap-2 ml-2 py-1 justify-start"
                    >
                      {subItem.icon && (
                        <Icon icon={subItem.icon} width="25px" height="25px" />
                      )}
                      <span className="text-xs">{subItem.text}</span>
                    </Link>
                  ))}
                </ul>
              )}
            </Link>
          ))}

          <li>
            <button className="bg-[#6262FF] rounded-lg w-full py-2">
              <Link to="/upgrade">
                Upgrade
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarProvider;
