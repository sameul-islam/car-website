import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaClock, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const benefitsData = {
  EN: [
    {
      icon: <FaDollarSign className="text-[#192a56] text-3xl" />,
      title: "Low Interest",
      description: "Enjoy competitive interest rates starting from 6.9%.",
    },
    {
      icon: <FaClock className="text-[#192a56] text-3xl" />,
      title: "Quick Approval",
      description: "Get your car loan approved in record time.",
    },
    {
      icon: <FaCheckCircle className="text-[#192a56] text-3xl" />,
      title: "No Hidden Fees",
      description: "Transparent process with no surprise charges.",
    },
    {
      icon: <FaMoneyBillWave className="text-[#192a56] text-3xl" />,
      title: "Flexible EMI",
      description: "Choose EMI plans that suit your budget perfectly.",
    },
  ],
  BN: [
    {
      icon: <FaDollarSign className="text-[#192a56] text-3xl" />,
      title: "কম সুদ",
      description: "৬.৯% থেকে শুরু প্রতিযোগিতামূলক সুদের হার উপভোগ করুন।",
    },
    {
      icon: <FaClock className="text-[#192a56] text-3xl" />,
      title: "দ্রুত অনুমোদন",
      description: "রেকর্ড সময়ে আপনার গাড়ির ঋণ অনুমোদন পান।",
    },
    {
      icon: <FaCheckCircle className="text-[#192a56] text-3xl" />,
      title: "গোপন খরচ নেই",
      description: "কোনো লুকানো চার্জ ছাড়াই স্বচ্ছ প্রক্রিয়া।",
    },
    {
      icon: <FaMoneyBillWave className="text-[#192a56] text-3xl" />,
      title: "নমনীয় কিস্তি",
      description: "আপনার বাজেটে মানানসই কিস্তি পরিকল্পনা বেছে নিন।",
    },
  ],
};

export default function DesktopBenefits() {
  const { language } = useContext(LanguageContext);
  const benefits = benefitsData[language];

  return (
    <section className="w-full flex justify-center py-16 bg-gray-50">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
