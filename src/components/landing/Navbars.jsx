import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HashLink } from 'react-router-hash-link';
import { useLanguageUpdate } from '../../utils/useLanguageUpdate';
import logo from '../../assets/images/Logo.png';
import TagManager from "../../utils/mockGtm"; // Adjust the import path as necessary
import { TfiWorld } from "react-icons/tfi";
import { RiArrowRightLine } from "react-icons/ri";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  // Use the language update hook to force re-render on language change
  const currentLanguage = useLanguageUpdate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  const smoothScroll = (el) => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const tagManagerArgs = {
    gtmId: 'G-47G2XH7T8L'
  };
  TagManager.initialize(tagManagerArgs);

  const handleLoginClick = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'login_click',
      },
    });
  };

  useEffect(() => {
    document.body.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = currentLanguage === 'ar' ? 'Cairo, sans-serif' : 'Poppins, sans-serif';
  }, [currentLanguage]);

  return (
    <nav className={`bg-[#F5F6FA] lg:mx-24 p-4 font-light ${currentLanguage === 'ar' ? 'font-cairo' : 'font-poppins'}`}
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mx-auto flex items-center">
        <div className="flex flex-grow gap-12 items-center">
          <Link to="/" className="text-[#8E8E8E] text-xl font-bold cursor-pointer">
            <img src={logo} className="w-[200px]" alt="Logo" />
          </Link>
          <div className="hidden md:flex gap-6">
            <NavLink to="/" className="text-[#8E8E8E] hover:text-[#6161FF]">
              {t('home')}
            </NavLink>
            <NavLink to="/about" className="text-[#8E8E8E] hover:text-[#6161FF]">
              {t('about')}
            </NavLink>
            <HashLink to="/home#howUsage" className="text-[#8E8E8E] hover:text-[#6161FF]" scroll={smoothScroll}>
              {t('howItWorks')}
            </HashLink>

          </div>
        </div>
        <div className="hidden md:flex gap-4 items-center">
          <NavLink to="/pricing" className="text-[#8E8E8E] hover:text-[#6161FF]">
            {t('pricing')}
          </NavLink>
          <NavLink to="/login" className="text-[#8E8E8E] hover:text-[#6161FF]">
            <button onClick={handleLoginClick}>
              {t('login.title')}
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="text-white hover:text-[#ffffff] hover:bg-[#5555e0] bg-[#6161FF] rounded-3xl py-3 px-5 gap-2 flex items-center">
              {t('getStarted')}
              <RiArrowRightLine />
            </button>
          </NavLink>

          <button onClick={toggleLanguage} className="text-[#6161FF] flex items-center gap-1">
            <TfiWorld />
            {currentLanguage === 'ar' ? 'en' : 'ar'}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900 hover:text-[#8E8E8E] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden py-6 ">
          <NavLink to="/" className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-900 hover:text-[#8E8E8E]'} onClick={() => setIsOpen(false)}>
            {t('home')}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-900 hover:text-[#8E8E8E]'} onClick={() => setIsOpen(false)}>
            {t('about')}
          </NavLink>
          <NavLink to="/pricing" className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-900 hover:text-[#8E8E8E]'} onClick={() => setIsOpen(false)}>
            {t('pricing')}
          </NavLink>
          <HashLink to="/home#howUsage" className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-900 hover:text-[#8E8E8E]'} onClick={() => setIsOpen(false)}>
            {t('howItWorks')}
          </HashLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-900 hover:text-[#6161FF]'} onClick={() => setIsOpen(false)}>
            {t('login.title')}
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF] hover:text-[#6161FF]' : 'block px-2 py-1 text-gray-900 hover:text-[#6161FF]'} onClick={() => setIsOpen(false)}>
            {t('getStarted')}
          </NavLink>
          <button onClick={() => { toggleLanguage(); setIsOpen(false); }} className="text-[#6161FF] px-2 py-1">
            {currentLanguage === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
