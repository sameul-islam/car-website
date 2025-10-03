// import React, { useState, useContext } from "react";
// import { useLocation } from "react-router-dom";

// import Logo from "./Logo";
// import DesktopSearch from "./DesktopSearch";
// import MobileSearch from "./MobileSearch";
// import Controls from "./Controls";
// import DesktopNav from "./DesktopNav";
// import MobileDrawer from "./MobileDrawer";

// import { LanguageContext } from "../../context/LanguageContext";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const { language, toggleLanguage } = useContext(LanguageContext);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-gray-50  shadow-md">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         <Logo />
//         <DesktopSearch language={language} />
//         <Controls
//           menuOpen={menuOpen}
//           setMenuOpen={setMenuOpen}
//           toggleLanguage={toggleLanguage}
//           language={language}
//         />
//       </div>

//       <MobileSearch language={language} />
//       <DesktopNav language={language} location={location} />
//       <MobileDrawer
//         menuOpen={menuOpen}
//         closeMenu={closeMenu}
//         language={language}
//         toggleLanguage={toggleLanguage}
//       />
//     </header>
//   );
// };

// export default Navbar;
















import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Logo from "./Logo";
import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";
import Controls from "./Controls";
import DesktopNav from "./DesktopNav";
import MobileDrawer from "./MobileDrawer";

import { LanguageContext } from "../../context/LanguageContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { language, toggleLanguage } = useContext(LanguageContext);

  const closeMenu = () => setMenuOpen(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768 && !menuOpen) {
        if (window.scrollY > lastScrollY) {
          setShowMobileNavbar(false);
        } else {
          setShowMobileNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  return (
    <>
      {/* Navbar/Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300
          ${showMobileNavbar ? "translate-y-0" : "-translate-y-full"} md:translate-y-0`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <DesktopSearch language={language} />
          <Controls
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            toggleLanguage={toggleLanguage}
            language={language}
          />
        </div>

        <MobileSearch language={language} />
        <DesktopNav language={language} location={location} />
      </header>

      {/* Mobile Drawer + Overlay */}
      <MobileDrawer
        menuOpen={menuOpen}
        closeMenu={closeMenu}
        language={language}
        toggleLanguage={toggleLanguage}
      />
    </>
  );
};

export default Navbar;
