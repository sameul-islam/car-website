import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";

export default function DesktopEMICalculator() {
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
    <section className="w-full flex justify-center py-16 bg-gray-50">
      <motion.div
        className="w-[80%] bg-white rounded-2xl shadow-xl p-10 flex flex-col gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {language === "EN" ? "EMI Calculator" : "ইএমআই ক্যালকুলেটর"}
        </h2>

        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">
              {language === "EN" ? "Principal Amount" : "মূলধন (Principal)"}
            </label>
            <input
              type="number"
              placeholder={language === "EN" ? "৳" : "৳"}
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192a56]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">
              {language === "EN" ? "Interest Rate (%)" : "সুদের হার (%)"}
            </label>
            <input
              type="number"
              placeholder="6.9"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192a56]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-700">
              {language === "EN" ? "Tenure (Years)" : "সময়কাল (বছর)"}
            </label>
            <input
              type="number"
              placeholder="5"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#192a56]"
            />
          </div>
        </div>

        <motion.button
          onClick={calculateEMI}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#273c75] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-[#192a56] transition self-center mt-4"
        >
          {language === "EN" ? "Calculate EMI" : "ইএমআই হিসাব করুন"}
        </motion.button>

        {emi && (
          <motion.div
            className="mt-6 text-center text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {language === "EN" ? "Estimated EMI:" : "প্রাক্কলিত ইএমআই:"}{" "}
            <span className="text-[#40739e]">৳{emi}</span> /{" "}
            {language === "EN" ? "month" : "মাস"}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
