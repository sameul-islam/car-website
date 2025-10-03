import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUser, FaIdCard, FaMoneyBillWave } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const criteriaList = [
  {
    icon: <FaUser className="text-[#192a56] text-3xl" />,
    textEN: "Applicant must be 21 years or older",
    textBN: "আবেদনকারী ২১ বছর বা তার বেশি বয়সী হতে হবে",
  },
  {
    icon: <FaIdCard className="text-[#192a56] text-3xl" />,
    textEN: "Valid government-issued ID required",
    textBN: "বৈধ সরকারি ID থাকতে হবে",
  },
  {
    icon: <FaMoneyBillWave className="text-[#192a56] text-3xl" />,
    textEN: "Proof of stable income necessary",
    textBN: "স্থায়ী আয়ের প্রমাণ আবশ্যক",
  },
  {
    icon: <FaCheckCircle className="text-[#192a56] text-3xl" />,
    textEN: "No prior major loan defaults",
    textBN: "আগের বড় কোনো লোন ডিফল্ট নেই",
  },
];

export default function DesktopEligibility() {
  const { language } = useContext(LanguageContext);
  const [checked, setChecked] = useState({});

  const handleCheck = (index) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="w-full flex flex-col items-center py-16 bg-gray-50">
      {/* H1 Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
        {language === "EN" ? "Eligibility Criteria" : "যোগ্যতার শর্তাবলী"}
      </h1>

      <div className="w-[80%] grid grid-cols-2 gap-8">
        {criteriaList.map((criteria, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div>{criteria.icon}</div>
            <div className="flex-1 flex flex-col">
              <p className="text-gray-700 font-semibold">
                {language === "EN" ? criteria.textEN : criteria.textBN}
              </p>
              <label className="mt-2 flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!checked[idx]}
                  onChange={() => handleCheck(idx)}
                  className="w-4 h-4 accent-[#192a56]"
                />
                {language === "EN" ? "Confirmed" : "নিশ্চিত"}
              </label>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
