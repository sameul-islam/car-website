import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";

export default function LoanFormDesktop() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carType: "new",
    budget: "",
    model: "",
  });

  const [alert, setAlert] = useState({ show: false, type: "success", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      showAlert("error", language === "EN" ? "Please fill all required fields." : "সব প্রয়োজনীয় ঘর পূরণ করুন।");
      return;
    }

    showAlert("success", language === "EN" ? "Application submitted successfully!" : "আবেদন সফলভাবে জমা হয়েছে!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      carType: "new",
      budget: "",
      model: "",
    });
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type, message: "" }), 3000);
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="w-full mt-28 max-w-4xl m-auto bg-white p-10 rounded-2xl shadow-xl flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Form Fields */}
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-gray-700 font-semibold">
              {language === "EN" ? "Full Name" : "পূর্ণ নাম"}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-gray-700 font-semibold">
              {language === "EN" ? "Email" : "ইমেইল"}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-gray-700 font-semibold">
              {language === "EN" ? "Phone Number" : "ফোন নম্বর"}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-gray-700 font-semibold">
              {language === "EN" ? "Car Type" : "গাড়ির ধরন"}
            </label>
            <select
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
            >
              <option value="new">{language === "EN" ? "New Car" : "নতুন গাড়ি"}</option>
              <option value="old">{language === "EN" ? "Old Car" : "পুরনো গাড়ি"}</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-gray-700 font-semibold">
              {language === "EN" ? "Budget Range" : "বাজেট"}
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
            >
              <option value="0-5">{language === "EN" ? "$0-$5k" : "৳0-5 হাজার"}</option>
              <option value="5-10">{language === "EN" ? "$5k-$10k" : "৳5-10 হাজার"}</option>
              <option value="10-20">{language === "EN" ? "$10k-$20k" : "৳10-20 হাজার"}</option>
              <option value="20+">{language === "EN" ? "$20k+" : "৳20 হাজার +"}</option>
            </select>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-gray-700 font-semibold">
              {language === "EN" ? "Preferred Model" : "মডেল পছন্দ"}
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder={language === "EN" ? "e.g., Toyota Corolla" : "যেমন: টয়োটা করোলা"}
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#273c75] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#192a56] transition self-center mt-4"
        >
          {language === "EN" ? "Submit Application" : "আবেদন করুন"}
        </motion.button>
      </motion.form>

      {/* Custom Alert */}
      <AnimatePresence>
        {alert.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-lg shadow-xl text-white ${
              alert.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {alert.message}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
