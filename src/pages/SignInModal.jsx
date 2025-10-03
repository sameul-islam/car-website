import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";

const translations = {
  EN: {
    email: "Email",
    password: "Password",
    next: "Next",
    submit: "Sign In",
    otp: "Enter OTP",
    resend: "Resend OTP",
    or: "Or sign in with",
  },
  BN: {
    email: "ইমেল",
    password: "পাসওয়ার্ড",
    next: "পরবর্তী",
    submit: "সাইন ইন",
    otp: "ওটিপি লিখুন",
    resend: "পুনরায় পাঠান",
    or: "অথবা সাইন ইন করুন",
  },
};

const SignInModal = ({ onClose }) => {
  const { language } = useContext(LanguageContext);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ email: "", otp: "" });
  const [showPassword, setShowPassword] = useState(false);

  // Scroll Lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (formData.email) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful! (Dummy)");
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 mt-100 z-[9999] flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-500 rounded-xl shadow-xl w-full max-w-md p-8 m-10 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
          >
            &times;
          </button>

          {step === 1 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {translations[language].email}
              </h2>
              <input
                type="email"
                name="email"
                placeholder={translations[language].email}
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
              />

              <button
                onClick={handleNext}
                className="bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition-all duration-300 font-semibold"
              >
                {translations[language].next}
              </button>

              <div className="flex items-center my-2">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-3 text-gray-500">{translations[language].or}</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>

              <div className="flex flex-col gap-3">
                <button
                  className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
                >
                  <FcGoogle size={24} /> Google
                </button>
                <button
                  className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  <FaFacebookF size={20} /> Facebook
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {translations[language].otp}
              </h2>
              <input
                type="text"
                name="otp"
                placeholder="123456"
                value={formData.otp}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700 transition"
              />

              <button
                type="submit"
                className="bg-gray-800 text-white py-3 rounded-md hover:bg-gray-900 transition-all duration-300 font-semibold"
              >
                {translations[language].submit}
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm text-gray-600 hover:underline"
              >
                {translations[language].resend}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SignInModal;
