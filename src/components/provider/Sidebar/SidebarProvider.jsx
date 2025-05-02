import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IoMdExit } from "react-icons/io";
import { Icon } from "@iconify/react";
import Logo from "../../../assets/images/Logo.png";

const SidebarProvider = ({ handleIsopen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dropdowns, setDropdowns] = useState({
    chat: false,
    projectManagement: false,
    servicesProvider: false,
    compare: false,
    biddingProject: false,
    productionGroup: false,
    Setting: false,
  });

  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const handleItemClick = (id) => setSelectedItem(id);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => {
      const updatedDropdowns = Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === dropdown ? !prev[key] : false;
        return acc;
      }, {});
      return updatedDropdowns;
    });
  };

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

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed ${isOpen ? "top-[1%]" : "top-[3%]"} ${
          isOpen ? "left-[48%]" : "left-[5%]"
        } p-2 rounded-lg z-50 md:hidden bg-white`}
      >
        {isOpen ? <IoMdExit /> : <MenuIcon color="#000" />}
      </button>

      <div
        className={`fixed inset-x-0 font-poppins px-4 h-full left-0 md:bg-transparent bg-white text-white w-72 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:static md:translate-x-0 py-4 top-0 md:py-0 md:h-full md:w-[19%]`}
      >
        <div className="flex justify-between items-center w-full">
          <img src={Logo} className="w-[200px] pt-4" alt="Logo" />
        </div>

        <ul
          className="font-popines flex flex-col text-xs gap-4 font-[500] max-h-[90vh] overflow-y-auto py-4 px-1 mt-2"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4B5563 ##1E1E1EBF",
          }}
        >
          <li className="bg-[#F2F2F2] rounded-lg flex items-center text-[#666666] p-3">
            <Icon icon="ri:search-line" width={25} height={25} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-0"
            />
          </li>

          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={`flex flex-col gap-1  px-2 py-2  ${
                selectedItem === item.id
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
                  {item.icon && (
                    <Icon icon={item.icon} width="25px" height="25px" />
                  )}
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
