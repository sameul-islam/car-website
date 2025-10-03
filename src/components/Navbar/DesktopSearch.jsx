// import React, { useState, useEffect, useContext } from "react";
// import { AiOutlineSearch } from "react-icons/ai";
// import { translations } from "../../translations";
// import { LanguageContext } from "../../context/LanguageContext";
// import { SearchContext } from "./SearchContext";
// import { useNavigate } from "react-router-dom";

// export default function DesktopSearch() {
//   const { language } = useContext(LanguageContext);
//   const { searchQuery, setSearchQuery, filterType, setFilterType } = useContext(SearchContext);
//   const navigate = useNavigate();

//   const placeholders = [
//     translations[language].search.placeholder,
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

//   const handleSearch = () => {
//     navigate("/allproducts");
//   };

//   return (
//     <div className="hidden md:flex flex-1 justify-center px-4">
//       <div className="w-full max-w-2xl relative">
//         <div className="flex items-center border border-gray-600 rounded-md overflow-hidden relative">
//           <select
//             className="px-3 py-2.5 text-md font-semibold bg-gray-100 text-gray-800 border-r-2 outline-none"
//             value={filterType}
//             onChange={(e) => setFilterType(e.target.value)}
//           >
//             <option value="all">{translations[language].search.filterAll}</option>
//             <option value="new">{translations[language].search.filterNew}</option>
//             <option value="used">{translations[language].search.filterUsed}</option>
//           </select>

//           <div className="relative flex-1">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full px-3 py-2 text-md border-gray-600 outline-none bg-transparent relative z-10"
//               onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             />
//             {searchQuery === "" && (
//               <span
//                 className={`absolute left-3 top-2 text-gray-400 pointer-events-none transition-all duration-500 ${
//                   animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//                 }`}
//               >
//                 {placeholders[index]}
//               </span>
//             )}
//           </div>

//           <button
//             type="button"
//             className="px-5 py-2 bg-gray-700 text-white flex items-center justify-center"
//             onClick={handleSearch}
//           >
//             <AiOutlineSearch size={28} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





















//BEST



// import React, { useState, useEffect, useContext } from "react";
// import { AiOutlineSearch } from "react-icons/ai";
// import { translations } from "../../translations";
// import { LanguageContext } from "../../context/LanguageContext";
// import { SearchContext } from "./SearchContext";
// import { useNavigate } from "react-router-dom";
// import products from "../../product";

// export default function DesktopSearch() {
//   const { language } = useContext(LanguageContext);
//   const { searchQuery, setSearchQuery, filterType, setFilterType } = useContext(SearchContext);
//   const navigate = useNavigate();

//   const placeholders = [
//     translations[language].search.placeholder,
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
//   const [filteredProducts, setFilteredProducts] = useState([]);

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
//     setSuggestions(filtered.slice(0, 5));
//     setShowDropdown(true);
//   }, [searchQuery]);

//   // Filter products only when trigger is pressed
//   useEffect(() => {
//     if (!triggeredQuery) {
//       setFilteredProducts([]);
//       return;
//     }

//     const query = triggeredQuery.toLowerCase();
//     const filtered = products.filter(
//       (p) =>
//         p.name_en?.toLowerCase().includes(query) ||
//         p.name_bn?.toLowerCase().includes(query)
//     );
//     setFilteredProducts(filtered);
//   }, [triggeredQuery]);

//   const handleSearch = (selected = null) => {
//     // Trigger filtered results
//     if (selected) {
//       setTriggeredQuery(selected.name_en || selected.name_bn);
//       setSearchQuery(selected.name_en || selected.name_bn); // keep input
//     } else {
//       setTriggeredQuery(searchQuery);
//     }
//     setShowDropdown(false); // ✅ Hide dropdown after trigger
//     navigate("/allproducts");
//   };

//   return (
//     <div className="hidden md:flex flex-1 justify-center px-4 relative">
//       <div className="w-full max-w-2xl relative">
//         <div className="flex items-center border border-gray-600 rounded-md overflow-visible relative">
//           <select
//             className="px-3 py-2.5 text-md font-semibold bg-gray-100 text-gray-800 border-r-2 outline-none"
//             value={filterType}
//             onChange={(e) => setFilterType(e.target.value)}
//           >
//             <option value="all">{translations[language].search.filterAll}</option>
//             <option value="new">{translations[language].search.filterNew}</option>
//             <option value="used">{translations[language].search.filterUsed}</option>
//           </select>

//           <div className="relative flex-1">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full px-3 py-2 text-md border-gray-600 outline-none relative z-10 bg-transparent"
//               onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//               onFocus={() => searchQuery && setShowDropdown(true)}
//               onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
//               placeholder={placeholders[index]}
//             />

//             {/* Live dropdown suggestions */}
//             {showDropdown && suggestions.length > 0 && (
//               <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 z-20 max-h-60 rounded-md shadow-lg">
//                 {suggestions.map((s) => (
//                   <li
//                     key={s.id}
//                     className="px-3 py-2 cursor-pointer hover:bg-gray-100"
//                     onClick={() => handleSearch(s)}
//                   >
//                     <span className="font-semibold">{language === "EN" ? s.name_en : s.name_bn}</span>
//                     <span className="text-gray-500 ml-2">[{s.brand} | {s.category}]</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           <button
//             type="button"
//             className="px-5 py-2 bg-gray-700 text-white flex items-center justify-center"
//             onClick={() => handleSearch()}
//           >
//             <AiOutlineSearch size={28} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useState, useEffect, useContext, useRef } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { translations } from "../../translations";
import { LanguageContext } from "../../context/LanguageContext";
import { SearchContext } from "./SearchContext";
import { useNavigate } from "react-router-dom";
import products from "../../product";

export default function DesktopSearch() {
  const { language } = useContext(LanguageContext);
  const { searchQuery, setSearchQuery, filterType, setFilterType } =
    useContext(SearchContext);
  const navigate = useNavigate();

  const placeholders = [
    translations[language].search.placeholder,
    language === "EN" ? "Search by category" : "ক্যাটাগরি দিয়ে অনুসন্ধান",
    language === "EN" ? "Search by brand" : "ব্র্যান্ড দিয়ে অনুসন্ধান",
    language === "EN" ? "Search by price" : "মূল্য দিয়ে অনুসন্ধান",
    language === "EN" ? "Search by model" : "মডেল দিয়ে অনুসন্ধান",
  ];

  const [index, setIndex] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [triggeredQuery, setTriggeredQuery] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const inputRef = useRef(null);

  // Placeholder animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [language]);

  // Live dropdown
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
    setHighlightIndex(-1);
  }, [searchQuery]);

  const handleSearch = (selected = null) => {
    if (selected) {
      setTriggeredQuery(selected.name_en || selected.name_bn);
      setSearchQuery(selected.name_en || selected.name_bn);
    } else {
      setTriggeredQuery(searchQuery);
    }
    setShowDropdown(false);
    navigate("/allproducts");
  };

  const handleKeyDown = (e) => {
    if (!showDropdown || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      if (highlightIndex >= 0) {
        handleSearch(suggestions[highlightIndex]);
      } else {
        handleSearch();
      }
    }
  };

  return (
    <div className="hidden lg:flex flex-1 justify-center px-4 relative">
      <div className="w-full max-w-2xl relative">
        <div className="flex items-center  bg-white">
          {/* Filter Dropdown */}
          <select
            className="px-3 py-2.5 rounded-l-2xl text-md font-semibold bg-[#dcdde1] text-black border-2 border-gray-400  outline-none"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
           <option  value="all" >{translations[language].search.filterAll}</option>
            <option value="new">{translations[language].search.filterNew}</option>
            <option value="used">{translations[language].search.filterUsed}</option>
          </select>

          {/* Search Input */}
          <div className="relative flex-1 flex items-center">
            <AiOutlineSearch size={22} className="absolute left-3 text-gray-500" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-2 border-gray-400 bg-[#f1f2f6]   pl-10 pr-8 py-2  text-md outline-none "
              onKeyDown={handleKeyDown}
              onFocus={() => searchQuery && setShowDropdown(true)}
              placeholder={placeholders[index]}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 text-gray-500 hover:text-gray-700"
              >
                <AiOutlineClose size={20} />
              </button>
            )}

            {/* Dropdown */}
            {showDropdown && suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-[#f1f2f6] border border-gray-300 z-50 max-h-72 overflow-y-auto rounded-lg shadow-lg mt-1 animate-fadeIn">
                {suggestions.map((s, i) => (
                  <li
                    key={s.id}
                    className={`px-4 py-2 cursor-pointer ${
                      i === highlightIndex
                        ? "bg-gray-200"
                        : "hover:bg-gray-100"
                    }`}
                    onMouseDown={() => handleSearch(s)}
                  >
                    <div className="font-semibold">
                      {language === "EN" ? s.name_en : s.name_bn}
                    </div>
                    <div className="text-sm text-gray-500">
                      {s.brand} | {s.category}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="px-6 py-2 bg-[#dcdde1] border-2 border-gray-400 rounded-r-2xl text-black flex items-center justify-center  transition"
            onClick={() => handleSearch()}
          >
            <AiOutlineSearch size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
