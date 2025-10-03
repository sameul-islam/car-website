import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS, carsCategory, brandsCar } from "../../data";
import { translations } from "../../translations";
import { LanguageContext } from "../../context/LanguageContext";

export default function DesktopNav({ location }) {
  const { language } = useContext(LanguageContext);

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
    <nav className="hidden sm:flex justify-center items-center gap-8 py-2 border-t border-t-gray-300">
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.link === "/"
            ? location.pathname === "/"
            : location.pathname === item.link || location.pathname.startsWith(item.link);

        const hasDropdown = item.key === "CATEGORY" || item.key === "BRANDS";
        const dropdownItems =
          item.key === "CATEGORY" ? carsCategory : item.key === "BRANDS" ? brandsCar : [];

        return (
          <div key={item.key} className="relative group">
            <Link
              to={item.link}
              className={`px-1 py-0.5 text-md ${isActive ? "text-black font-semibold" : "text-gray-700"}`}
            >
              {translations[language].nav[item.key]}
              <span
                className={
                  "absolute left-0 -bottom-1 h-[2px] bg-gray-500 transition-all duration-300 " +
                  (isActive ? "w-full bg-gray-800" : "w-0 group-hover:w-full")
                }
              />
            </Link>

            {/* Dropdown */}
            {hasDropdown && (
              <div className="absolute left-0 top-full mt-1 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-300">
                {dropdownItems.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.link}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition"
                  >
                    {getSubMenuName(sub)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
