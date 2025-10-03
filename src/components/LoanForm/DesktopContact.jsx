import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaComments } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

export default function DesktopContact() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({ show: false, type: "success", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.message) {
      showAlert("error", language === "EN" ? "Please fill all fields." : "সব ক্ষেত্র পূরণ করুন।");
      return;
    }


    showAlert("success", language === "EN" ? "Message sent successfully!" : "বার্তা সফলভাবে পাঠানো হয়েছে!");


    setFormData({ name: "", email: "", message: "" });
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type, message: "" }), 3000); 
  };

  return (
    <section className="w-full py-16 bg-gray-50 flex justify-center relative">
      <div className="w-[80%] grid grid-cols-2 gap-12">
        {/* Left Contact Info */}
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">
            {language === "EN" ? "Customer Support" : "কাস্টমার সাপোর্ট"}
          </h2>
          <p className="text-gray-600">
            {language === "EN"
              ? "Have questions or need assistance? Reach out to us through any of the methods below."
              : "আপনার কোনো প্রশ্ন আছে বা সহায়তা প্রয়োজন? নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করুন।"}
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition">
              <FaPhoneAlt className="text-[#273c75] text-xl" />
              <div>
                <h4 className="font-semibold">{language === "EN" ? "Phone" : "ফোন"}</h4>
                <p>+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition">
              <FaEnvelope className="text-[#273c75] text-xl" />
              <div>
                <h4 className="font-semibold">{language === "EN" ? "Email" : "ইমেইল"}</h4>
                <p>support@amazingdeals.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg hover:shadow-xl transition">
              <FaComments className="text-[#273c75] text-xl" />
              <div>
                <h4 className="font-semibold">{language === "EN" ? "Live Chat" : "লাইভ চ্যাট"}</h4>
                <p>
                  {language === "EN"
                    ? "Start a chat with our support team"
                    : "আমাদের সাপোর্ট টিমের সাথে চ্যাট শুরু করুন"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-800">
            {language === "EN" ? "Send us a message" : "আমাদের একটি বার্তা পাঠান"}
          </h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={language === "EN" ? "Full Name" : "পূর্ণ নাম"}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={language === "EN" ? "Email Address" : "ইমেইল ঠিকানা"}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={language === "EN" ? "Your Message" : "আপনার বার্তা"}
            rows={5}
            className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#273c75] text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-[#192a56] transition self-start"
          >
            {language === "EN" ? "Send Message" : "বার্তা পাঠান"}
          </motion.button>
        </motion.form>
      </div>

      {/* Custom Alert */}
      <AnimatePresence>
        {alert.show && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-lg shadow-xl text-white ${
              alert.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {alert.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
