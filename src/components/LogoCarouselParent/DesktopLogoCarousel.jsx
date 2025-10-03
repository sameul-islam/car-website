



import React, { useRef, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";

const DesktopLogoCarousel = ({ logos }) => {
  const trackRef = useRef(null);
  const { language } = useContext(LanguageContext);

  const scrollBy = (dir = 1) => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const width = el.clientWidth / 6;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className="w-[82%] items-center justify-center m-auto py-16 px-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold bg-white/50 p-4 shadow-md hover:shadow-2xl duration-300 rounded-md text-[#273c75]">
             {language === "EN" ? "Top " : "শীর্ষ "}
          <span className="text-amber-600">{language === "EN" ? "Brands" : 'ব্র্যান্ড'}</span>
        </h3>
        <div className="flex gap-2">
          <button
            aria-label={language === "EN" ? "Previous" : "পূর্ববর্তী"}
            onClick={() => scrollBy(-1)}
            className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:shadow-lg transition"
          >
            &#8592;
          </button>
          <button
            aria-label={language === "EN" ? "Next" : "পরবর্তী"}
            onClick={() => scrollBy(1)}
            className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:shadow-lg transition"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-1/6 snap-start bg-white rounded-lg p-4 shadow-lg flex flex-col items-center justify-center hover:shadow-2xl transition-shadow"
          >
            <Link to={logo.link}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-24 object-contain mb-2"
                loading="lazy"
              />
              <p className="text-sm font-medium text-gray-700 text-center">
                {language === "EN" ? logo.alt : logo.bnAlt}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DesktopLogoCarousel;
