import React, { useState, useEffect, useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";
import { translations } from "../../translations";
import { FaLongArrowAltDown } from "react-icons/fa";


import car1 from '../../assets/heroImages/car1.jpg';
import car2 from '../../assets/heroImages/car2.jpg';
import car3 from '../../assets/heroImages/car3.jpg';
import car4 from '../../assets/heroImages/car4.jpg';
import car5 from '../../assets/heroImages/car5.jpg';
import car6 from '../../assets/heroImages/car6.jpg';
import car7 from '../../assets/heroImages/car7.jpg';
import { Link } from "react-router-dom";


const desktopImages = [
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
];

export default function DesktopHero() {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setMousePos({ x: (x - centerX) / centerX, y: (y - centerY) / centerY });
  };

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
    <section className="relative w-full py-16 flex justify-center">
      <div
        className="relative w-[92%] lg:w-[82%] h-[650px] lg:h-[750px] shadow-2xl overflow-hidden rounded-sm"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      >
        {/* Image Slider */}
        <AnimatePresence initial={false} custom={1}>
          {desktopImages.map(
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

        {/* Hero Content with 3D Hover */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
          style={{
            perspective: 1000,
          }}
        >
          <motion.div
            className="inline-block"
            animate={{
              rotateY: mousePos.x * 10,
              rotateX: -mousePos.y * 10,
              scale: 1 + Math.abs(mousePos.x + mousePos.y) * 0.03,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Tagline */}
            <motion.span
              className="text-sm md:text-base text-white/80 mb-2 tracking-wide uppercase"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {translations[language].hero.tagline}
            </motion.span>

            {/* Title */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-center"
              initial={{ y: 50, opacity: 0 }}
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
              className="text-lg md:text-2xl mb-6 max-w-3xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {language === "EN" ? (
              <div>
                <span className="text-black">Explore categories, brands,</span>
                <span className="text-white">and exclusive offers.</span>
              </div>
            ) : (
                 <div>
                <span className="text-black">ক্যাটাগরি, ব্র্যান্ডস এবং বিশেষ</span>
                <span className="text-white">অফার এক্সপ্লোর করুন।</span>
              </div>
            )}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex gap-4 justify-center mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
          <motion.button
                whileHover={{  }}
                whileTap={{  }}
                className="px-4 bg-[#273c75] text-white font-semibold rounded-md shadow-lg hover:bg-[#192a56] transition"
              >
              <Link to='/allproducts'> {translations[language].hero.button} </Link> 
            </motion.button> 
              <motion.button
                whileHover={{  }}
                whileTap={{  }}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl shadow-lg hover:bg-gray-200 transition flex items-center gap-2"
              >
              <Link to="products"> {translations[language].hero.viewCollection} </Link> <AiOutlineArrowRight />
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex gap-4 text-white/90  justify-center  text-sm mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {translations[language].hero.trust.join(" || ")}
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              className="mt-6 animate-bounce flex items-center justify-center text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <FaLongArrowAltDown className="font-semibold text-[#273c75]"/>{translations[language].hero.scrollHint}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
