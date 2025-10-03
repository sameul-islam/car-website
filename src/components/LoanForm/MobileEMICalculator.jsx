import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";

export default function MobileEMICalculator() {
  const { language } = useContext(LanguageContext);

  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(tenure) * 12;

    if (P && R && N) {
      const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi(null);
    }
  };

  return (
    <section className="md:hidden w-full py-12 bg-gray-50 flex justify-center">
      <motion.div
        className="w-[95%] bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          {language === "EN" ? "EMI Calculator" : "ইএমআই ক্যালকুলেটর"}
        </h2>

        {/* Inputs */}
        <div className="flex flex-col gap-3">
          <input
            type="number"
            placeholder={language === "EN" ? "Principal Amount ₹" : "মূলধন পরিমাণ ৳"}
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192a56]"
          />
          <input
            type="number"
            placeholder={language === "EN" ? "Interest Rate (%)" : "সুদের হার (%)"}
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192a56]"
          />
          <input
            type="number"
            placeholder={language === "EN" ? "Tenure (Years)" : "মেয়াদ (বছর)"}
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192a56]"
          />
        </div>

        {/* Calculate Button */}
        <motion.button
          onClick={calculateEMI}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#273c75] text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-[#192a56] transition self-center mt-4"
        >
          {language === "EN" ? "Calculate EMI" : "ইএমআই গণনা করুন"}
        </motion.button>

        {/* Result */}
        {emi && (
          <motion.div
            className="mt-4 text-center text-xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {language === "EN" ? "Estimated EMI" : "অনুমানিত ইএমআই"}:{" "}
            <span className="text-[#40739e]">৳{emi}</span> / {language === "EN" ? "month" : "মাস"}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
