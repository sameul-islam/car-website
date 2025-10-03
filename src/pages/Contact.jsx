import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

const translations = {
  EN: {
    contactUs: "Contact Us",
    fillForm: "Fill the form and we will get back to you shortly.",
    name: "Your Name",
    email: "Your Email",
    phone: "Phone Number",
    message: "Your Message",
    sendMessage: "Send Message",
    address: "123 Main Street, Dhaka, Bangladesh",
    supportEmail: "support@amazingdeals.com",
    supportPhone: "+880 1234 567890",
    toast: "Message sent successfully!",
  },
  BN: {
    contactUs: "যোগাযোগ করুন",
    fillForm: "ফর্মটি পূরণ করুন, আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
    name: "আপনার নাম",
    email: "আপনার ইমেল",
    phone: "ফোন নম্বর",
    message: "আপনার বার্তা",
    sendMessage: "বার্তা পাঠান",
    address: "১২৩ মেইন স্ট্রিট, ঢাকা, বাংলাদেশ",
    supportEmail: "support@amazingdeals.com",
    supportPhone: "+৮৮০ ১২৩৪ ৫৬৭৮৯০",
    toast: "বার্তা সফলভাবে পাঠানো হয়েছে!",
  },
};

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);


      useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-16 mt-30 bg-gray-50 relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          >
            {translations[language].toast}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">{translations[language].contactUs}</h2>
          <p className="text-gray-600 mb-6">{translations[language].fillForm}</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder={translations[language].name}
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            />
            <input
              type="email"
              name="email"
              placeholder={translations[language].email}
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder={translations[language].phone}
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            />
            <textarea
              name="message"
              placeholder={translations[language].message}
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition-all duration-300 font-semibold"
            >
              {translations[language].sendMessage}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 grid gap-2 text-gray-700">
            <div><strong>Address:</strong> {translations[language].address}</div>
            <div><strong>Email:</strong> {translations[language].supportEmail}</div>
            <div><strong>Phone:</strong> {translations[language].supportPhone}</div>
          </div>
        </div>

        {/* Location Map */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3709091112743!2d90.39309921539497!3d23.78986239470591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6f8f4f1b4e3%3A0x8f8c0a3f98f3d1a0!2sBanani%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1695612345678!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
