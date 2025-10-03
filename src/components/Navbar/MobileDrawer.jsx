import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { NAV_ITEMS, carsCategory, brandsCar } from "../../data";
import { translations } from "../../translations";
import { IoMdArrowDropdown } from "react-icons/io";
import { LanguageContext } from "../../context/LanguageContext"; 
import SignInModal from "../../pages/SignInModal";

const MobileDrawer = ({ menuOpen, closeMenu }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
    const [isSignInOpen, setIsSignInOpen] = useState(false); 
  const navigate = useNavigate();
  const { language, toggleLanguage } = useContext(LanguageContext);

  const toggleDropdown = (key) => setOpenDropdown(openDropdown === key ? null : key);

  const handleLinkClick = (link) => {
    navigate(link);
    closeMenu();
  };

  const getSubMenuName = (sub) => {
    if (language === "EN") return sub.name;
    if (language === "BN") {
      switch (sub.name) {
        case "NEW CARS": return "নতুন গাড়ি";
        case "OLD CARS": return "পুরানো গাড়ি";
        case "ELECTRIC CARS": return "বিদ্যুৎ গাড়ি";
        case "SUV CARS": return "এসইউভি গাড়ি";
        case "LUXURY CARS": return "লাক্সারি গাড়ি";
        case "TOYOTA": return "টোয়োটা";
        case "BMW": return "বিএমডব্লিউ";
        case "LAMBORGHINI": return "ল্যাম্বারগিনি";
        case "MERCEDES": return "মারসিটিস";
        case "ISUZU": return "ইসুজু";
        default: return sub.name;
      }
    }
  };

  return (
    <>
      {menuOpen && <button onClick={closeMenu} className="fixed inset-0 bg-black/50  z-50 sm:hidden" />}
       <aside
  className={`fixed top-0 left-0 bottom-0 min-h-screen w-3/4 max-w-xs bg-white z-60 transform transition-transform duration-300 sm:hidden shadow-lg ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  } flex flex-col`}
>
  {/* Header */}
  <div className="p-4 flex items-center justify-between">
    <button onClick={() => handleLinkClick("/")}>
      <img src="/logo.png" alt="Logo" className="w-24 object-contain cursor-pointer" />
    </button>
    <button onClick={closeMenu}>
      <RiCloseLargeFill size={24} />
    </button>
  </div>

  <hr className="border border-gray-300" />

  {/* Menu Items */}
  <div className="flex-1 overflow-y-auto mt-6 flex flex-col gap-1">
    {NAV_ITEMS.map((item) => {
      const hasDropdown = item.key === "CATEGORY" || item.key === "BRANDS";
      const dropdownItems = item.key === "CATEGORY" ? carsCategory : item.key === "BRANDS" ? brandsCar : [];

      return (
        <div key={item.key} className="flex flex-col">
          {hasDropdown ? (
            <>
              <button
                onClick={() => toggleDropdown(item.key)}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex justify-between items-center font-medium text-gray-700"
              >
                {translations[language].nav[item.key]}
                <span className="ml-2 text-gray-500">
                  <IoMdArrowDropdown />
                </span>
              </button>

              {openDropdown === item.key && (
                <div className="flex flex-col bg-gray-100 transition-all duration-300 max-h-64 overflow-y-auto">
                  {dropdownItems.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => handleLinkClick(sub.link)}
                      className="px-6 py-2 cursor-pointer text-gray-700 hover:bg-gray-200 rounded text-left transition-all duration-300"
                    >
                      {getSubMenuName(sub)}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <button
              onClick={() => handleLinkClick(item.link)}
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 font-medium text-gray-700"
            >
              {translations[language].nav[item.key]}
            </button>
          )}
        </div>
      );
    })}
  </div>

  {/* Footer Buttons */}
  <div className="mt-4 border-t border-t-gray-400 pt-4">
    <button
      onClick={toggleLanguage}
      className="w-10/12 text-gray-200 bg-[#34495e] hover:bg-[#2c3e50] py-2 m-3 transition duration-300 rounded-full flex items-center justify-center gap-1"
    >
      <FiGlobe />
      {language === "EN" ? "ENGLISH" : "বাংলা"}
    </button>

    <button
      onClick={() => setIsSignInOpen(true)}
      className="w-10/12 mt-2  py-2 rounded-md  bg-[#34495e] hover:bg-[#2c3e50] text-gray-200 m-3  transition duration-300 flex items-center justify-center gap-1"
    >
      <CiUser />
      {translations[language].signIn}
    </button>
  </div>
{isSignInOpen && <SignInModal onClose={() => setIsSignInOpen(false)} />}
</aside>

    </>
  );
};

export default MobileDrawer;










