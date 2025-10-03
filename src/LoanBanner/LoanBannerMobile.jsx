import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaPercentage, FaCar, FaArrowRight } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import { Link } from "react-router-dom";

export default function LoanBannerMobile() {

     const { language } = useContext(LanguageContext);

  return (
    <section className=" flex justify-center px-4 mt-6 md:hidden">
      <motion.div
        className="w-full h-[250px]  rounded-sm bg-[#273c75]  shadow-lg flex flex-col items-center justify-center text-center px-4 py-6 text-white overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Top Icon */}
        <div className="bg-white/20 p-4 rounded-full mb-3">
          <FaCar className="text-3xl" />
        </div>

        {/* Title + Subtitle */}
        <h2 className="text-xl font-bold">
            { language === 'EN' ? (
                <span>Easy Car Loan</span>
            ) : (
                <span>সহজ গাড়ি ঋণ</span>
            )}
        </h2>
        <p className="text-sm text-yellow-400 mt-1">
           {language === "EN" ? (
            <span>
               Get your dream car with flexible EMI plans 
            </span>
           ) : (
            <span>
                নমনীয় ইএমআই য়ে আপনার স্বপ্নের গাড়ি পান
            </span>
           )}
        </p>

        {/* Offer Highlight */}
        <motion.div
          className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg shadow mt-3"
          whileHover={{ scale: 1.05 }}
        >
          <FaPercentage className="text-lg" />
          <span className="font-semibold text-sm">
            {language === 'EN' ? (
                <span>Interest from 6.9% only</span>
            ) : (
                <span>সুদের হার মাত্র ৬.৯% থেকে</span>
            )}
          </span>
        </motion.div>

        {/* Button */}
    <Link to='/loanform'>   <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-white text-[#273c75] px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition mt-4"
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
