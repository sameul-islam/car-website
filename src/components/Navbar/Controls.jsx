// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { FiGlobe } from "react-icons/fi";
// import { AiOutlineUser } from "react-icons/ai";
// import { TfiMenu } from "react-icons/tfi";
// import { translations } from "../../translations";
// import { LanguageContext } from "../../context/LanguageContext";
// import SignInModal from "../../pages/SignInModal";

// export default function Controls({ menuOpen, setMenuOpen }) {
//   const { language, toggleLanguage } = useContext(LanguageContext);
//   const [isSingInOpen, setIsSignInOpen] = useState(false)

//   return (
//     <div className="flex items-center gap-3">
//       <button
//         onClick={toggleLanguage}
//         className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border-none bg-[#a4b0be] hover:bg-[#ced6e0] transition duration-500 text-black rounded-full text-sm"
//       >
//         <FiGlobe />
//         <span className="font-medium">{language === "EN" ? "ENGLISH" : "বাংলা"}</span>
//       </button>

//       <Link
//         to="/signin"
//         className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border-none rounded-md bg-[#a4b0be] text-black text-sm hover:bg-[#ced6e0] transition duration-500"
//       >
//         <AiOutlineUser />
//         <span className="font-medium">{translations[language].signIn}</span>
//       </Link>

//       <div className="flex items-center gap-2 sm:hidden">
//         <button
//           onClick={toggleLanguage}
//           className="px-2 items-center gap-0.5 flex py-1 bg-[#a4b0be] hover:bg-[#ced6e0] text-black  rounded text-sm"
//         >
//           <FiGlobe />
//           {language === "EN" ? "EN" : "BN"}
//         </button>

//         <button onClick={() => setIsSignInOpen(true)} className="px-2 py-1.5 bg-[#a4b0be] hover:bg-[#ced6e0] text-black rounded">
//           <AiOutlineUser />
//         </button>

//         <button onClick={() => setMenuOpen((s) => !s)} className="ml-1 px-2 py-1 rounded">
//           {!menuOpen && <TfiMenu size={22} />}
//         </button>
//       </div>
//       {isSingInOpen && (
//         <SignInModal onClose={() => setIsSignInOpen(false)} />
//       )}
//     </div>
//   );
// }








import React, { useContext, useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";
import { translations } from "../../translations";
import { LanguageContext } from "../../context/LanguageContext";
import SignInModal from "../../pages/SignInModal";

export default function Controls({ menuOpen, setMenuOpen }) {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isSignInOpen, setIsSignInOpen] = useState(false); 

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggleLanguage}
        className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border-none bg-[#a4b0be] hover:bg-[#ced6e0] transition duration-500 text-black rounded-full text-sm"
      >
        <FiGlobe />
        <span className="font-medium">{language === "EN" ? "ENGLISH" : "বাংলা"}</span>
      </button>

      {/* Desktop Sign In button */}
      <button
        onClick={() => setIsSignInOpen(true)}
        className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border-none rounded-md bg-[#a4b0be] text-black text-sm hover:bg-[#ced6e0] transition duration-500"
      >
        <AiOutlineUser />
        <span className="font-medium">{translations[language].signIn}</span>
      </button>

      <div className="flex items-center gap-2 sm:hidden">
        <button
          onClick={toggleLanguage}
          className="px-2 items-center gap-0.5 flex py-1 bg-[#a4b0be] hover:bg-[#ced6e0] text-black rounded text-sm"
        >
          <FiGlobe />
          {language === "EN" ? "EN" : "BN"}
        </button>

        {/* Mobile Sign In button */}
        <button
          onClick={() => setIsSignInOpen(true)}
          className="px-2 py-1.5 bg-[#a4b0be] hover:bg-[#ced6e0] text-black rounded"
        >
          <AiOutlineUser />
        </button>

        <button
          onClick={() => setMenuOpen((s) => !s)}
          className="ml-1 px-2 py-1 rounded"
        >
          {!menuOpen && <TfiMenu size={22} />}
        </button>
      </div>

      {/* SignIn Modal */}
      {isSignInOpen && <SignInModal onClose={() => setIsSignInOpen(false)} />}
    </div>
  );
}
