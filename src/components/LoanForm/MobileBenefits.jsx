import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaDollarSign, FaClock, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

export default function MobileBenefits() {
  const { language } = useContext(LanguageContext);

  const benefits = [
    {
      icon: <FaDollarSign className="text-[#273c75] text-3xl" />,
      title: language === "EN" ? "Low Interest" : "কম সুদ",
      description:
        language === "EN"
          ? "Enjoy competitive interest rates starting from 6.9%."
          : "৬.৯% থেকে শুরু হওয়া প্রতিযোগিতামূলক সুদের হার উপভোগ করুন।",
    },
    {
      icon: <FaClock className="text-[#273c75] text-3xl" />,
      title: language === "EN" ? "Quick Approval" : "দ্রুত অনুমোদন",
      description:
        language === "EN"
          ? "Get your car loan approved in record time."
          : "রেকর্ড সময়ের মধ্যে আপনার গাড়ির লোন অনুমোদিত হবে।",
    },
    {
      icon: <FaCheckCircle className="text-[#273c75] text-3xl" />,
      title: language === "EN" ? "No Hidden Fees" : "লুকানো ফি নেই",
      description:
        language === "EN"
          ? "Transparent process with no surprise charges."
          : "কোনও লুকানো চার্জ ছাড়া স্বচ্ছ প্রক্রিয়া।",
    },
    {
      icon: <FaMoneyBillWave className="text-[#273c75] text-3xl" />,
      title: language === "EN" ? "Flexible EMI" : "ফ্লেক্সিবল ইএমআই",
      description:
        language === "EN"
          ? "Choose EMI plans that suit your budget perfectly."
          : "আপনার বাজেট অনুযায়ী সঠিক ইএমআই পরিকল্পনা নির্বাচন করুন।",
    },
  ];

  return (
    <section className="md:hidden w-full py-12 bg-gray-50">
      <div className="flex flex-col gap-6 px-4">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div>{benefit.icon}</div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
