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
        { id: 'chat', text: "Chat", icon: "fluent:chat-24-regular", path: "/chat" },
        { id: 'knowledgebase', text: "knowledge base", icon: "flowbite:brain-solid", path: "/knowledgebase" },
      ],
    },
    {
      id: 4,
      icon: "hugeicons:note-01",
      text: "Services Provider",
      dropdown: "servicesProvider",
      subItems: [
        { id: 'connected', text: "Connected", icon: "ph:check-bold", path: "/services-provider" },
        { id: 'pinned', text: "Pinned", icon: "fluent:pin-28-filled", path: "/services-provider-pinned" },
      ],
    },
    {
      id: 5,
      icon: "hugeicons:message-done-02",
      text: "Project Management",
      dropdown: "projectManagement",
      subItems: [
        { id: 'tasks', text: "Tasks", icon: "fluent:task-list-square-16-regular", path: "/projectmangement-tasks" },
        {
          id: 'sharedprojects',
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
        { id: 'create', text: "Create", icon: "ei:plus", path: "/create-bidding-project" },
        { id: 'mybids', text: "My Bids", icon: "ph:newspaper-clipping-duotone", path: "/mybids" },
        { id: 'draft', text: "draft Projects", icon: "solar:file-outline", path: "/saved-BiddingProject" },
      ],
    },
    {
      id: 7,
      icon: "hugeicons:analytics-up",
      text: "Compare Space",
      path: "/compare",
      dropdown: "compare",
      subItems: [
        { id: 'compare', text: "Compare", icon: "clarity:analytics-line", path: "/compare-between" },
        { id: 'saved', text: "saved", icon: "ic:twotone-bookmark", path: "/compare/saved" },
      ],
    },
    {
      id: 8,
      icon: "fluent:people-community-48-filled",
      text: "Production Group",
      dropdown: "productionGroup",
      subItems: [
        { id: 'discover', text: "Discover", icon: "hugeicons:discover-square", path: "/production-group" },
        { id: 'myrequests', text: "My Requests", icon: "material-symbols-light:request-page-outline", path: "/production-group/myrequests" },
        { id: 'savedpg', text: "saved PG", icon: "ic:twotone-bookmark", path: "/production-group/saved" },
      ],
    },
    { id: 9, text: "ACCOUNT", isSection: true },
    {
      id: 10,
      icon: "ci:settings",
      text: "Setting",
      dropdown: "Setting",
      subItems: [
        { id: 'billing', text: "billing", icon: "", path: "/setting-billing" },
        { id: 'profile', text: "profile", icon: "", path: "/setting-profile" },
      ],
    },
    { id: 11, icon: "mdi:invite", text: "Invite", onClick: handleIsopen },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    // Find the exact or partial match for main items
    const currentItem = menuItems.find((item) =>
      item.path && currentPath.includes(item.path)
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
  }, [location.pathname, menuItems]);

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
    setIsOpen(false);
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

  const handleInputChange = (e) => {
    setSidebarSearch(e.target.value);
  };

  // Filter menuItems and subItems by search
  const filteredMenuItems = menuItems
    .map(item => {
      if (item.isSection) return item;
      // Check if main item matches
      const mainMatch = item.text.toLowerCase().includes(sidebarSearch.toLowerCase());
      // Check if any subItem matches
      let filteredSubItems = item.subItems;
      let subMatch = false;
      if (item.subItems) {
        filteredSubItems = item.subItems.filter(subItem =>
          subItem.text.toLowerCase().includes(sidebarSearch.toLowerCase())
        );
        subMatch = filteredSubItems.length > 0;
      }
      if (mainMatch || subMatch) {
        return { ...item, subItems: filteredSubItems };
      }
      return null;
    })
    .filter(Boolean);

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
            // scrollbarColor: "#4B5563 #1E1E1EBF",
          }}
        >
          <li className="bg-[#F2F2F2] rounded-lg flex items-center text-[#666666] p-4 relative">
            <FiSearch />
            <form className="flex-grow flex" autoComplete="off" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                value={sidebarSearch}
                onChange={handleInputChange}
                placeholder={t("Search menu...")}
                className="bg-transparent px-2 outline-0 flex-grow"
              />
            </form>
          </li>

          {filteredMenuItems.map((item) => (
            item.isSection ? (
              <li key={item.id} className="px-2 py-2 text-gray-400 font-bold text-xs uppercase tracking-wider">
                {item.text}
              </li>
            ) : (
              <Link
                to={item.path || "#"}
                key={item.id}
                className={`flex flex-col gap-1  px-2 py-2  ${selectedItem === item.id
                  ? "bg-white shadow-custom2 rounded-lg py-3  text-[#6161FF]"
                  : " text-dark"
                  }`}
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault();
                    toggleDropdown(item.dropdown);
                  } else {
                    handleItemClick(item.id);
                    if (item.onClick) item.onClick();
                  }
                }}
              >
                <div
                  className="flex items-center  gap-3 cursor-pointer"
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
                {item.subItems && dropdowns[item.dropdown] && item.subItems.length > 0 && (
                  <ul className=" mt-2 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        to={subItem.path}
                        key={subItem.id}
                        className={`flex items-center gap-2 ml-2 py-1 justify-start ${selectedSubItem === subItem.id ? 'bg-gray-100 text-[#6161FF] rounded' : ''}`}
                        onClick={() => handleSubItemClick(item.id, subItem.id)}
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
            )
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
