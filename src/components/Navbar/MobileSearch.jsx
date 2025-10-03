// import React, { useState, useEffect, useContext } from "react";
// import { CiSearch } from "react-icons/ci";
// import { translations } from "../../translations";
// import { LanguageContext } from "../../context/LanguageContext"; 

// export default function MobileSearch() {
//   const { language } = useContext(LanguageContext);

//   const placeholders = [
//     language === "EN" ? "Search by car name" : "গাড়ির নাম দিয়ে অনুসন্ধান",
//     language === "EN" ? "Search by category" : "ক্যাটাগরি দিয়ে অনুসন্ধান",
//     language === "EN" ? "Search by brand" : "ব্র্যান্ড দিয়ে অনুসন্ধান",
//     language === "EN" ? "Search by price" : "মূল্য দিয়ে অনুসন্ধান",
//     language === "EN" ? "Search by model" : "মডেল দিয়ে অনুসন্ধান",
//   ];

//   const [index, setIndex] = useState(0);
//   const [animate, setAnimate] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimate(false);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % placeholders.length);
//         setAnimate(true);
//       }, 500);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [language]);

//   return (
//     <div className="md:hidden container mx-auto px-4 pb-3">
//       <form
//         className="flex items-center border border-gray-400 rounded-md overflow-hidden relative"
//         role="search"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <select className="pl-3 text-sm text-gray-700 bg-gray-100  py-2.5 border-r-2  outline-none font-semibold">
//           <option value="all">{translations[language].search.filterAll}</option>
//           <option value="new">{translations[language].search.filterNew}</option>
//           <option value="used">{translations[language].search.filterUsed}</option>
//         </select>

//         <div className="relative flex-1 flex items-center pl-1 pr-0 h-10">
//           <button type="submit" aria-label="search">
//             <CiSearch size={22} />
//           </button>
//           <input
//             type="text"
//             className="flex-1 py-2 text-md outline-none relative z-10 bg-transparent"
//           />
//           <span
//             className={`absolute left-10 top-2 text-gray-400 pointer-events-none transition-all duration-500 ${
//               animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//             }`}
//           >
//             {placeholders[index]}
//           </span>
//         </div>
//       </form>
//     </div>
//   );
// }








// import React, { useState, useEffect, useContext } from "react";
// import { CiSearch } from "react-icons/ci";
// import { translations } from "../../translations";
// import { LanguageContext } from "../../context/LanguageContext";
// import { SearchContext } from "./SearchContext";
// import { useNavigate } from "react-router-dom";
// import products from "../../product";

// export default function MobileSearch() {
//   const { language } = useContext(LanguageContext);
//   const { searchQuery, setSearchQuery, filterType, setFilterType } = useContext(SearchContext);
//   const navigate = useNavigate();

//   const placeholders = [
//     language === "EN" ? "Search by car name" : "গাড়ির নাম দিয়ে অনুসন্ধান",
//     language === "EN" ? "Search by category" : "ক্যাটাগরি দিয়ে অনুসন্ধান",
//     language === "EN" ? "Search by brand" : "ব্র্যান্ড দিয়ে অনুসন্ধান",
//     language === "EN" ? "Search by price" : "মূল্য দিয়ে অনুসন্ধান",
//     language === "EN" ? "Search by model" : "মডেল দিয়ে অনুসন্ধান",
//   ];

//   const [index, setIndex] = useState(0);
//   const [animate, setAnimate] = useState(true);
//   const [suggestions, setSuggestions] = useState([]);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [triggeredQuery, setTriggeredQuery] = useState("");

//   // Placeholder animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimate(false);
//       setTimeout(() => {
//         setIndex((prev) => (prev + 1) % placeholders.length);
//         setAnimate(true);
//       }, 500);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [language]);

//   // Live dropdown suggestions while typing
//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setSuggestions([]);
//       setShowDropdown(false);
//       return;
//     }
//     const query = searchQuery.toLowerCase();
//     const filtered = products.filter(
//       (p) =>
//         p.name_en?.toLowerCase().includes(query) ||
//         p.name_bn?.toLowerCase().includes(query) ||
//         p.brand?.toLowerCase().includes(query) ||
//         p.model?.toLowerCase().includes(query) ||
//         p.category?.toLowerCase().includes(query)
//     );
//     setSuggestions(filtered.slice(0, 10));
//     setShowDropdown(true);
//   }, [searchQuery]);

//   // Trigger search
//   const handleSearch = (selected = null) => {
//     if (selected) {
//       setSearchQuery(selected.name_en || selected.name_bn); // Keep input
//       setTriggeredQuery(selected.name_en || selected.name_bn);
//     } else {
//       setTriggeredQuery(searchQuery);
//     }
//     setShowDropdown(false); // Hide dropdown
//     navigate("/allproducts");
//   };

//   return (
//     <div className="md:hidden container mx-auto px-4 pb-3 relative">
//       <div className="flex items-center border border-gray-400 rounded-md overflow-visible relative">
//         <select
//           className="pl-3 text-sm text-gray-700 bg-gray-100 py-2.5 border-r-2 outline-none font-semibold"
//           value={filterType}
//           onChange={(e) => setFilterType(e.target.value)}
//         >
//           <option value="all">{translations[language].search.filterAll}</option>
//           <option value="new">{translations[language].search.filterNew}</option>
//           <option value="used">{translations[language].search.filterUsed}</option>
//         </select>

//         <div className="relative flex-1 flex items-center pl-1 pr-0 h-10">
//           <button type="button" aria-label="search" onClick={() => handleSearch()}>
//             <CiSearch size={22} />
//           </button>
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="flex-1 py-2 text-md outline-none relative z-10 bg-transparent"
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             onFocus={() => searchQuery && setShowDropdown(true)}
//             onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
//             placeholder={placeholders[index]}
//           />
//           {showDropdown && suggestions.length > 0 && (
//             <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 z-20 max-h-60 overflow-y-auto rounded-md shadow-lg">
//               {suggestions.map((s) => (
//                 <li
//                   key={s.id}
//                   className="px-3 py-2 cursor-pointer hover:bg-gray-100 flex justify-between"
//                   onClick={() => handleSearch(s)}
//                 >
//                   <span className="font-semibold">{language === "EN" ? s.name_en : s.name_bn}</span>
//                   <span className="text-gray-500 ml-2">[{s.brand} | {s.category}]</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }













import React, { useState, useEffect, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { translations } from "../../translations";
import { LanguageContext } from "../../context/LanguageContext";
import { SearchContext } from "./SearchContext";
import { useNavigate } from "react-router-dom";
import products from "../../product";

export default function MobileSearch() {
  const { language } = useContext(LanguageContext);
  const { searchQuery, setSearchQuery, filterType, setFilterType } = useContext(SearchContext);
  const navigate = useNavigate();

  const placeholders = [
    language === "EN" ? "Search by car name" : "গাড়ির নাম দিয়ে অনুসন্ধান",
    language === "EN" ? "Search by category" : "ক্যাটাগরি দিয়ে অনুসন্ধান",
    language === "EN" ? "Search by brand" : "ব্র্যান্ড দিয়ে অনুসন্ধান",
    language === "EN" ? "Search by price" : "মূল্য দিয়ে অনুসন্ধান",
    language === "EN" ? "Search by model" : "মডেল দিয়ে অনুসন্ধান",
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [triggeredQuery, setTriggeredQuery] = useState("");

  // Placeholder animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % placeholders.length);
        setAnimate(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [language]);


  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.name_en?.toLowerCase().includes(query) ||
        p.name_bn?.toLowerCase().includes(query) ||
        p.brand?.toLowerCase().includes(query) ||
        p.model?.toLowerCase().includes(query) ||
        p.category?.toLowerCase().includes(query)
    );
    setSuggestions(filtered.slice(0, 10));
    setShowDropdown(true);
  }, [searchQuery]);

 
  const handleSearch = (selected = null) => {
    if (selected) {
      setSearchQuery(selected.name_en || selected.name_bn);
      setTriggeredQuery(selected.name_en || selected.name_bn);
    } else {
      setTriggeredQuery(searchQuery);
    }
    setShowDropdown(false);
    navigate("/allproducts");
  };

  return (
    <div className="lg:hidden container mx-auto px-3 pb-3 relative">
      {/* Search Box */}
      <div className="flex items-center w-full bg-white border border-gray-300 rounded-full shadow-md px-3 py-2 relative">
        <CiSearch size={22} className="text-gray-500 mr-2" />
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 text-sm sm:text-base outline-none bg-transparent placeholder-gray-400"
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          onFocus={() => searchQuery && setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          placeholder={placeholders[index]}
        />

        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="ml-2 text-gray-400 hover:text-gray-600"
            aria-label="clear search"
          >
            <RxCross2 size={20} />
          </button>
        )}
      </div>

      {/* Dropdown Suggestions */}
      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute top-14 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-30 max-h-[250px] overflow-y-auto">
          {suggestions.map((s) => (
            <li
              key={s.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition flex flex-col"
              onClick={() => handleSearch(s)}
            >
              <span className="font-medium text-gray-900 text-sm">
                {language === "EN" ? s.name_en : s.name_bn}
              </span>
              <span className="text-xs text-gray-500">
                {s.brand} | {s.category}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
