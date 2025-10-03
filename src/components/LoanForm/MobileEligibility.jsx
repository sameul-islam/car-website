import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUser, FaIdCard, FaMoneyBillWave } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const criteriaList = [
  {
    icon: <FaUser className="text-[#273c75] text-3xl" />,
    textEN: "Applicant must be 21 years or older",
    textBN: "আবেদনকারী ২১ বছর বা তার বেশি বয়সী হতে হবে",
  },
  {
    icon: <FaIdCard className="text-[#273c75] text-3xl" />,
    textEN: "Valid government-issued ID required",
    textBN: "বৈধ সরকারি ID প্রয়োজন",
  },
  {
    icon: <FaMoneyBillWave className="text-[#273c75] text-3xl" />,
    textEN: "Proof of stable income necessary",
    textBN: "স্থিতিশীল আয়ের প্রমাণ প্রয়োজন",
  },
  {
    icon: <FaCheckCircle className="text-[#273c75] text-3xl" />,
    textEN: "No prior major loan defaults",
    textBN: "আগের কোনো বড় লোন ডিফল্ট নেই",
  },
];

export default function MobileEligibility() {
  const { language } = useContext(LanguageContext);
  const [checked, setChecked] = useState({});

  const handleCheck = (index) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="md:hidden w-full py-12 bg-gray-50">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-6">
        {language === "EN" ? "Eligibility Criteria" : "যোগ্যতার মানদণ্ড"}
      </h1>

      <div className="flex flex-col gap-6 px-4">
        {criteriaList.map((criteria, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300"
            onClick={() => handleCheck(idx)}
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
              <label className="mt-1 flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
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
