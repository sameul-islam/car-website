import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";

import LoanHero from '../../assets/othersImage/LoanHero.jpg'

const LoanDesktopHero = () =>  {
  const { language } = useContext(LanguageContext);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setMousePos({ x: (x - centerX) / centerX, y: (y - centerY) / centerY });
  };

  return (
    <section className="w-full flex justify-center">
      <div
        className="relative w-[80%] h-[650px] shadow-2xl overflow-hidden rounded-md"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      >
        {/* Background Image */}
        <img
          src={LoanHero}
          alt="Car Hero"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/70 z-10"></div>

        {/* Content */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="inline-block"
            animate={{
              rotateY: mousePos.x * 8,
              rotateX: -mousePos.y * 8,
              scale: 1 + Math.abs(mousePos.x + mousePos.y) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-white mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {language === "EN" ? (
                <>
                  Find Your <span className="text-red-600">Dream Car</span>
                </>
              ) : (
                <>
                  আপনার <span className="text-red-600">স্বপ্নের গাড়ি</span> খুঁজুন
                </>
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {language === "EN"
                ? "Explore exclusive cars and flexible EMI plans for your perfect ride."
                : "আপনার নিখুঁত যাত্রার জন্য এক্সক্লুসিভ গাড়ি এবং নমনীয় ইএমআই পরিকল্পনা অনুসন্ধান করুন।"}
            </motion.p>

            {/* Optional Search Box */}
            <motion.div
              className="flex gap-2 max-w-xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <input
                type="text"
                placeholder={
                  language === "EN" ? "Search car model..." : "গাড়ির মডেল খুঁজুন..."
                }
                className="flex-1 px-4 py-3 text-white rounded-l-lg outline-none border border-gray-300 focus:ring-2 focus:ring-red-600 placeholder-white/70"
              />
              <button className="bg-red-600 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-red-700 transition">
                {language === "EN" ? "Search" : "খুঁজুন"}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


export default LoanDesktopHero;