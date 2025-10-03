import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaComments } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

export default function MobileContact() {
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
      setAlert({
        show: true,
        type: "error",
        message: language === "EN" ? "Please fill all fields!" : "সব ফিল্ড পূরণ করুন!",
      });
      setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
      return;
    }


    setAlert({
      show: true,
      type: "success",
      message: language === "EN" ? "Message sent successfully!" : "মেসেজ সফলভাবে পাঠানো হয়েছে!",
    });

    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 3000);
  };

  return (
    <section className="md:hidden w-full py-12 flex flex-col gap-8 px-4 relative">
      {/* Alert Notification */}
      <AnimatePresence>
        {alert.show && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white z-50 ${
              alert.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {alert.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {language === "EN" ? "Customer Support" : "কাস্টমার সাপোর্ট"}
        </h2>
        <p className="text-gray-600">
          {language === "EN"
            ? "Have questions or need assistance? Reach out to us through any of the methods below."
            : "প্রশ্ন আছে বা সহায়তা প্রয়োজন? নিচের যেকোনো মাধ্যমে আমাদের সাথে যোগাযোগ করুন।"}
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg">
            <FaPhoneAlt className="text-[#273c75] text-xl" />
            <div>
              <h4 className="font-semibold">{language === "EN" ? "Phone" : "ফোন"}</h4>
              <p>+1 234 567 890</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg">
            <FaEnvelope className="text-[#273c75] text-xl" />
            <div>
              <h4 className="font-semibold">{language === "EN" ? "Email" : "ইমেইল"}</h4>
              <p>support@amazingdeals.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg">
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
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-bold text-gray-800">
          {language === "EN" ? "Send us a message" : "আমাদের একটি বার্তা পাঠান"}
        </h3>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={language === "EN" ? "Full Name" : "পূর্ণ নাম"}
          required
          className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={language === "EN" ? "Email Address" : "ইমেইল ঠিকানা"}
          required
          className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={language === "EN" ? "Your Message" : "আপনার বার্তা"}
          rows={4}
          required
          className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#273c75]"
        ></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#273c75] text-white px-5 py-2 rounded-lg font-bold shadow-lg hover:bg-[#192a56] transition self-start"
        >
          {language === "EN" ? "Send Message" : "বার্তা পাঠান"}
        </motion.button>
      </motion.form>
    </section>
  );
}
