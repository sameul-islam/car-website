import React, { useRef, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext"; 

const MobileLogoCarousel = ({ logos }) => {
  const trackRef = useRef(null);
  const { language } = useContext(LanguageContext);

  const scrollBy = (dir = 1) => {
    if (!trackRef.current) return;
    const el = trackRef.current;
    const width = el.clientWidth / 2; 
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className="w-full py-6 px-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold bg-white/50 p-4 shadow-xl  rounded-md text-[#273c75]">
          {language === "EN" ? "Top " : "শীর্ষ "}
          <span className="text-amber-600">{language === "EN" ? "Brands" : 'ব্র্যান্ড'}</span>
        </h3>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:shadow-lg transition"
          >
            &#8592;
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:shadow-lg transition"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 w-1/2 snap-start bg-white rounded-lg p-3 shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
          >
            <Link to={logo.link}>
              <img
                src={logo.src}
                alt={language === "EN" ? logo.alt : logo.bnAlt}
                className="w-full h-16 object-contain mb-1"
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

export default MobileLogoCarousel;
