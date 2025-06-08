import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HashLink } from "react-router-hash-link";
import call from "../../assets/icons/phonr.svg";
import bank from "../../assets/icons/mail.svg";
import { useTranslation } from "react-i18next";
import { BsFacebook, BsInstagram, BsYoutube, BsTiktok, BsUniversalAccessCircle } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { facebookSvg, instagramSvg, linkedinSvg, tiktokSvg, youtubeSvg } from "../../assets/CustomIcon/SocialIcon";
import { FaCircle } from "react-icons/fa";

function Footers() {
  const footerContent = {
    en: {
      joinText: "Join Board Pins Today!",
      unlockText: "Unlock Opportunities, Expand Your Business",
      becomePartner: "Become a Partner 🠚",
      menu: [
        { text: "Home", link: "/#home" },
        { text: "Explore all Benefits", link: "/home#benefits" },
        { text: "About Us", link: "/about#about" },
        { text: "How It Works", link: "/home#howUsage" },
      ],
      contact: {
        heading: "Contact Us",
        phone: "(+20) 1555871500",
        email: "info@boardpins.com",
      },
      policies: {
        privacy: "Privacy Policy",
        terms: "Terms and Conditions",
      },
    },
    ar: {
      joinText: "انضم إلى Board Pins اليوم!",
      unlockText: "افتح الفرص، ووسّع عملك",
      becomePartner: "كن شريكًا 🠚",
      menu: [
        { text: "الرئيسية", link: "/#home" },
        { text: "استكشاف جميع المزايا", link: "/home#benefits" },
        { text: "من نحن", link: "/about#about" },
        { text: "كيف يعمل", link: "/home#howUsage" },
      ],
      contact: {
        heading: "تواصل معنا",
        phone: "(+20) 1555871500",
        email: "info@boardpins.com",
      },
      policies: {
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
      },
    },
  };

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || "en"; // Fallback to 'en' if undefined
  const content = footerContent[currentLanguage] || footerContent["en"]; // Fallback content

  const { joinText, unlockText, becomePartner, menu, contact, policies } = content || {}; // Destructure content safely

  return (
    <div
      dir={currentLanguage === "ar" ? "rtl" : "ltr"}
      className={`pb-5 ${currentLanguage === "ar" ? "font-cairo" : "font-poppins"}`}
    >
      <section>
        <div className="text-center mt-12 mb-10 pb-8 border-[#000] border-b-2 xl:mx-36 lg:mx-16 mx-6">
          <p className="text-[#333] text-[2.075rem] font-[400] leading-[2.90988rem]">{joinText}</p>
          <p className="text-dark opacity-[0.9] text-light text-4xl font-light">{unlockText}</p>
          <HashLink
            to={"/signup"}
            className="m-auto inline-flex relative bg-[#6161FF] rounded-[1.71875rem] text-[0.9375rem] text-[#F5F6FA] leading-[2.5rem] py-0 px-5 mt-8"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {becomePartner}
          </HashLink>
        </div>
        <div className="xl:w-10/12 lg:w-11/12 w-full mx-auto px-10">
          <ul className="flex lg:flex-row gap-3 flex-col">
            <ul className="flex-1">
              {menu?.map((item, index) => (
                <li key={index} className="underline my-2 text-[#000] text-[1rem] font-[400]">
                  <HashLink to={item.link} smooth>
                    {item.text}
                  </HashLink>
                </li>
              ))}
            </ul>
            <ul className="flex-1">
              <li className="text-[#000] text-[1rem] my-3 font-[400]">{contact?.heading}</li>
              <li className="text-[#000] text-[1rem] mb-3 font-[300]">
                <LazyLoadImage src={call} className="inline-block w-5 me-1" />{" "}
                <a href={`tel:${contact?.phone}`} className="underline">
                  {contact?.phone}
                </a>
              </li>
              <li className="text-[#000] text-[1rem] font-[300]">
                <LazyLoadImage src={bank} className="inline-block w-5 me-1" />{" "}
                <a href={`mailto:${contact?.email}`} className="underline">
                  {contact?.email}
                </a>
              </li>
            </ul>
            <div className="flex-1">
              <p className="text-[#000] xl:text-[2.67106rem] flex items-center lg:text-[2.2rem] gap-1 text-[2rem] font-[600]">
                Board Pins<span className="text-[#6161FF]"><FaCircle size={8} className=" mt-4" /></span>
              </p>
              <div className="flex flex-row items-center p-6 pt-2">
                <a href="https://www.linkedin.com/company/board-pins/" target="_blank" rel="noopener noreferrer">
                  <LazyLoadImage alt="LinkedIn" src={`data:image/svg+xml;utf8,${encodeURIComponent(linkedinSvg)}`} />
                </a>
                <a href="https://www.facebook.com/share/bFgxZv43avVrNcGi/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
                  <LazyLoadImage alt="Facebook" src={`data:image/svg+xml;utf8,${encodeURIComponent(facebookSvg)}`} />
                </a>
                <a href="https://www.instagram.com/boardpins0/?igsh=MWplZ2g1bXRmM3Rzaw%3D%3D" target="_blank" rel="noopener noreferrer">
                  <LazyLoadImage alt="Instagram" src={`data:image/svg+xml;utf8,${encodeURIComponent(instagramSvg)}`} />
                </a>
                <a href="https://youtube.com/@boardpins0?si=g8gAf8Ng4UCNydOu" target="_blank" rel="noopener noreferrer">
                  <LazyLoadImage alt="YouTube" src={`data:image/svg+xml;utf8,${encodeURIComponent(youtubeSvg)}`} />
                </a>
                <a href="https://www.tiktok.com/@boardpins" target="_blank" rel="noopener noreferrer">
                  <LazyLoadImage alt="TikTok" src={`data:image/svg+xml;utf8,${encodeURIComponent(tiktokSvg)}`} />
                </a>
              </div>
              <div className="flex text-dark flex-wrap underline text-sm gap-5 flex-row">
                <a
                  href="/PrivacyPolicy.docx"
                  className="underline flex gap-3 items-center"
                  download
                >
                  <BsUniversalAccessCircle />
                  <h3>{policies?.privacy}</h3>
                </a>
                <a
                  href="/TermsAndConditions.docx"
                  className="underline flex items-center gap-2"
                  download
                >
                  <CgNotes />
                  <h3>{policies?.terms}</h3>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Footers;
