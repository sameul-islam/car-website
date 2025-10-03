import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaPercentage, FaCar, FaArrowRight } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function LoanBanner() {

     const { language } = useContext(LanguageContext);

  return (
    <section className="w-full flex justify-center px-4 mt-6">
      <motion.div
        className="w-full max-w-6xl h-[150px]  bg-[#273c75]   shadow-md  flex items-center justify-between px-4 text-white overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side: Icon + Title */}
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-4 rounded-full">
            <FaCar className="text-3xl" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
             { language === 'EN' ? (
                <span>Easy Car Loan</span>
            ) : (
                <span>সহজ গাড়ি ঋণ</span>
            )}
            </h2>
            <p className="text-sm md:text-base text-yellow-400">
             {language === "EN" ? (
            <span>
               Get your dream car with flexible EMI plans 
            </span>
           ) : (
            <span>
               নমনীয় ইএমআই পরিকল্পনায় আপনার স্বপ্নের গাড়ি পান
            </span>
           )}
            </p>
          </div>
        </div>

        {/* Center: Offer Highlight */}
        <motion.div
          className="hidden md:flex items-center gap-2 bg-white/40 px-4 py-2 rounded-lg shadow"
          whileHover={{ scale: 1.05 }}
        >
          <FaPercentage className="text-lg" />
          <span className="font-semibold">
                 {language === 'EN' ? (
                <span>Interest from 6.9% only</span>
            ) : (
                <span>সুদের হার মাত্র ৬.৯% থেকে</span>
            )}
          </span>
        </motion.div>

        {/* Right Side: Button */}
    <Link to='/loanform'>   <motion.button
          whileHover={{  }}
          whileTap={{  }}
          className="flex items-center gap-2 cursor-pointer bg-white text-[#273c75] px-5 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
        >
               {language === "EN" ? (
                        <div className="flex items-center gap-1">Apply Now <FaArrowRight /></div>
                    ) : (
                        <div className="flex items-center gap-1">আবেদন করুন <FaArrowRight /></div>
                    )}
        </motion.button>
        </Link> 
      </motion.div>
    </section>
  );
}
