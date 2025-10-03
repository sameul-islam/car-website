import React, { useState, useEffect, useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Link } from "react-router-dom";


import car8 from '../../assets/mobileImages/car8.jpg'
import car9 from '../../assets/mobileImages/car9.jpg'
import car10 from '../../assets/mobileImages/car10.jpg'
import car11 from '../../assets/mobileImages/car11.jpg'
import car12 from '../../assets/mobileImages/car12.jpg'
import car13 from '../../assets/mobileImages/car13.jpg'
import car14 from '../../assets/mobileImages/car14.jpg'
import car15 from '../../assets/mobileImages/car15.jpg'
import car16 from '../../assets/mobileImages/car16.jpg'


const mobileImages = [
 car8,car9,car10,car11,car12,car13,car14,car15,car16,
];

export default function MobileHero() {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mobileImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full py-12 flex justify-center">
      <div className="relative w-[98%] h-[500px] shadow-2xl overflow-hidden rounded-md">
        {/* Image Slider */}
        <AnimatePresence initial={false} custom={1}>
          {mobileImages.map(
            (img, idx) =>
              idx === currentIndex && (
                <motion.img
                  key={img}
                  src={img}
                  alt={`car ${idx}`}
                  custom={1}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
              )
          )}
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70 z-10"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-2">
          {/* Tagline */}
          <motion.span
            className="text-xs md:text-sm text-white/80 mb-1 tracking-wide uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {translations[language].hero.tagline}
          </motion.span>

          {/* Title */}
          <motion.h1
            className="text-2xl md:text-4xl font-extrabold mb-3 leading-snug text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {language === "EN" ? (
              <>
                <span className="text-white">Find Your </span>
                <span className="text-[#273c75]">Dream Car</span>
              </>
            ) : (
              <>
                <span className="text-white">আপনার </span>
                <span className="text-[#273c75]">স্বপ্নের গাড়ি</span>
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-sm md:text-lg mb-4 max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {language === "EN" ? (
              <div>
                <span className="text-yellow-500">Explore categories, brands,</span>
                <span className="text-white">and exclusive offers.</span>
              </div>
            ) : (
              <div>
                <span className="text-yellow-500">ক্যাটাগরি, ব্র্যান্ডস এবং বিশেষ</span>
                <span className="text-white">অফার এক্সপ্লোর করুন।</span>
              </div>
            )}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.button
              whileHover={{  }}
              whileTap={{  }}
              className="px-4 py-2 bg-[#273c75] text-white font-semibold rounded-md shadow-md hover:bg-[#192a56] transition"
            >
           <Link to="/allproducts">   {translations[language].hero.button} </Link>
            </motion.button>
            <motion.button
              whileHover={{  }}
              whileTap={{  }}
              className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-md shadow-md hover:bg-gray-200 transition flex items-center gap-1"
            >
           <Link to="/products">  {translations[language].hero.viewCollection} </Link> <AiOutlineArrowRight />
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex gap-2 text-white/80 justify-center text-xs md:text-sm mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {translations[language].hero.trust.join(" || ")}
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="mt-3 animate-bounce flex items-center justify-center text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <FaLongArrowAltDown className="text-[#273c75] mr-1" />
            {translations[language].hero.scrollHint}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
