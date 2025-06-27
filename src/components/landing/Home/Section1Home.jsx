import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import illustration from '../../../assets/images/Landing/Group 26874.png';
import search from '../../../assets/images/Landing/Icon  Bank.svg';
import right from '../../../assets/images/Landing/cardicon1.svg';
import dial from '../../../assets/images/Landing/cardicon2.svg';
import coupon from '../../../assets/images/Landing/cardicon3.svg';
import collaboration from '../../../assets/images/Landing/cardicon4.svg';

import { RiArrowRightLine } from "react-icons/ri";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import config from '../../../config';

function Section1Home() {
  const { i18n } = useTranslation();
  const [showCardsCount, setShowCardsCount] = useState(4);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceTimeout = useRef(null);

  const serviceFeatures = {
    en: [
      { title: 'Access to Verified Service Providers', description: 'Find a comprehensive list of verified service providers in one centralized platform, saving you time and effort in searching for reliable partners.', src: right },
      { title: 'Streamlined vendor selection process', description: 'Easily compare different service providers and their offerings, allowing you to make informed decisions for your e-commerce business. ', src: dial },
      { title: 'Exclusive discounts and offer', description: 'Take advantage of special discounts and offers available only through our platform.', src: coupon },
      { title: 'Quality assurance', description: ' Our verification process ensures that all service providers listed meet specific quality standards, providing you with peace of mind. ', src: collaboration },
      { title: 'Empower Your Service Business', description: 'Board Pins connects you with a network of established and growing e-commerce SMEs seeking your expertise.', src: right },
      { title: 'Showcase Your Skills', description: 'List your services, highlight your experience, and showcase your portfolio to attract the right clients.', src: right },
      { title: "Real-Time Communication", description: "Built-in chat functionality allows you to have clear and instant communication with your clients.", src: right },
      { title: "Grow with Confidence", description: "Find recurring projects, build strong client relationships, and scale your service business to new heights with Board Pins.", src: right }
    ],
    ar: [
      { title: 'الوصول إلى مقدمي الخدمات المعتمدين', description: 'احصل على وصول إلى شبكة من مقدمي الخدمات المعتمدين الذين يحتاجون إلى خدماتك.', src: right },
      { title: 'عملية اختيار الموردين المبسطة', description: 'قم بمقارنة مقدمي الخدمات المختلفين وعروضهم بسهولة، مما يتيح لك اتخاذ قرارات مستنيرة لعملك في التجارة الإلكترونية.', src: right },
      { title: 'خصومات وعروض حصرية', description: 'استفد من الخصومات والعروض الخاصة المتاحة فقط من خلال منصتنا.', src: right },
      { title: 'ضمان الجودة', description: 'تضمن عملية التحقق لدينا أن جميع مقدمي الخدمات المدرجين يستوفون معايير الجودة المحددة، مما يوفر لك راحة البال.', src: right },
      { title: 'تمكين عملك في مجال الخدمات', description: 'توصلك "Board Pins" بشبكة من الشركات الصغيرة والمتوسطة التي تتطلب خبرتك.', src: right },
      { title: 'عرض مهاراتك', description: 'اعرض خدماتك، أبرز خبراتك، وعرض محفظة أعمالك لجذب العملاء المناسبين.', src: right },
      { title: "الاتصال في الوقت الحقيقي", description: "تتيح لك وظيفة الدردشة المدمجة الاتصال الفوري والواضح مع عملائك.", src: right },
      { title: "تنمية عملك بثقة", description: "اعثر على مشاريع متكررة، وابن علاقات قوية مع العملاء، وقم بتوسيع عملك إلى مستويات جديدة مع 'Board Pins'.", src: right }
    ]
  };

  const currentLanguage = i18n.language || 'en';
  const featuresToShow = serviceFeatures[currentLanguage] || serviceFeatures.en;

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
      const data = await response.json();
      // Try to find a string field to show as label
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
    // You can keep or remove the fetch here depending on if you want to do a full search on submit
    const ApiURL = config.apiBaseUrl;
    try {
      const response = await fetch(`${ApiURL}/users-service/profiles/search/?q=${encodeURIComponent(searchValue)}`);
      const data = await response.json();
      console.log('Search Results:', data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  // Function to toggle between showing 4 and 8 cards
  // const toggleShowAllCards = () => {
  //   setShowCardsCount(showCardsCount === 4 ? 8 : 4);
  // };

  return (
    <div className={`mx-6 lg:mx-24 ${currentLanguage === "ar" ? 'font-cairo' : 'font-poppins'}`} dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
      {/* Section 1 */}
      <div className={`flex lg:flex-row flex-col bg w-full py-12 gap-2`}>
        <div className={` ${currentLanguage === "ar" ? "lg:me-56" : "lg:ms-56"} flex-grow bg py-5 md:order-2 order-2`}>
          <h1 className="lg:font-semibold font-[500] text-center lg:leading-[3.25rem] md:leading-[3.25rem] md:text-[48px] text-[32px] text-[#333333]">
            {currentLanguage === "ar" ? "اكتشف وتواصل وأدر في منصة واحدة" : "Discover, Connect, and Manage in One Platform"}
          </h1>
          <p className="text-md text-center font-light md:text-[14px] text-[12px] py-4 mt-6">
            {currentLanguage === "ar" ? "ابحث عن مقدمي الخدمات المثاليين، إدارة المهام، والحصول على مساعدة فورية من مساعدنا الذكي في منصة واحدة" : "Find the perfect service providers, manage tasks, get instant help with our friendly AI assistant in one platform"}
          </p>
          {/* Search Bar */}
          <div className="bg-white rounded-xl py-4 flex justify-center gap-2 items-center px-5 m-5" style={{ position: 'relative' }}>
            <form onSubmit={handleSearch} className="flex w-full gap-2 items-center" autoComplete="off">
              <input
                value={searchValue}
                onChange={handleInputChange}
                onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
                placeholder={currentLanguage === "ar" ? "ماذا تبحث عنه؟" : "What are you looking for?"}
                className="w-full h-100 focus:outline-none"
                style={{ position: 'relative', zIndex: 2 }}
              />
              <button type="submit">
                <img src={search} alt="Search Icon" className='w-7 h-7' />
              </button>
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
        </div>

        <div className={`lg:flex hidden justify-center lg:max-w-[300px] items-center w-full order-1 ${currentLanguage === "ar" ? "md:order-1" : "md:order-3"}`}>
          <img src={illustration} alt="Illustration" className={currentLanguage === "ar" ? `md:w-auto w-[200px]` : `md:w-auto w-[200px]`} />
        </div>
      </div>

      {/* Section 2 - Service Features */}
      <div className={`grid lg:grid-cols-4 grid-cols-1  py-12 gap-6  justify-center transition-max-height duration-500 ease-in-out`} style={{ maxHeight: showCardsCount === 4 ? '500px' : '1300px', overflow: 'hidden' }}>
        {featuresToShow.slice(0, showCardsCount).map((feature, index) => (
          <div key={index} className="flex rounded-xl bg-white p-6 gap-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#6161FF]/20 group">
            <img src={feature.src} alt="Feature Icon" className='w-12 h-12 rounded-2xl' />
            <div>
              <h3 className="font-[700] mb-1 text-[14px] text-[#333333]">{feature.title}</h3>
              <p className="text-gray-800 text-[9px] font-light mb-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Show more/Show less button */}
      <div className='text-center flex justify-center w-full'>
        <div className='w-full'>
          {/* <div className='flex justify-center'>
            <button onClick={toggleShowAllCards} className='text-[#6161FF] px-7 my-6 text-lg flex gap-2 items-center'>
              {showCardsCount === 4 ? (currentLanguage === "ar" ? "عرض المزيد" : "SHOW MORE") : (currentLanguage === "ar" ? "عرض أقل" : "SHOW LESS")}
              {showCardsCount === 4 ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div> */}
          <div className='flex justify-center mb-12'>
            <Link
              to="/signup"
              className="rounded-3xl bg-[#6161FF] text-[#FFFFFF] py-2 px-7 text-md  flex items-center gap-2"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {currentLanguage === "ar" ? "ابدأ الآن" : "Get Started"} <RiArrowRightLine />
            </Link>
          </div>
          <h2 className='text-center text-[#676879] mb-12'>
            {currentLanguage === "ar" ? "لا تحتاج إلى بطاقة ائتمان ✦ وقت غير محدود في الخطة المجانية" : "No credit card needed ✦ Unlimited time on Free plan"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Section1Home;