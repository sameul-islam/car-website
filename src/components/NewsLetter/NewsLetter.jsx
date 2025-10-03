import { useState, useContext } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { LanguageContext } from "../../context/LanguageContext";

export default function Newsletter() {
  const { language } = useContext(LanguageContext);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(language === "EN" ? "Please enter a valid email" : "সঠিক ইমেইল লিখুন");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  };


  const texts = {
    headline: {
      EN: "Subscribe to Our Newsletter",
      BN: "আমাদের নিউজলেটারে সাবস্ক্রাইব করুন",
    },
    description: {
      EN: "Get exclusive updates, hot deals, and car news delivered straight to your inbox.",
      BN: "বিশেষ আপডেট, হট ডিল এবং গাড়ির খবর সরাসরি আপনার ইনবক্সে পান।",
    },
    placeholder: {
      EN: "Enter your email",
      BN: "আপনার ইমেইল লিখুন",
    },
    button: {
      EN: "Subscribe",
      BN: "সাবস্ক্রাইব করুন",
    },
    success: {
      EN: "🎉 Subscription Successful!",
      BN: "🎉 সাবস্ক্রিপশন সফল হয়েছে!",
    },
    privacy: {
      EN: "We respect your privacy. Unsubscribe at any time.",
      BN: "আমরা আপনার গোপনীয়তা সম্মান করি। যেকোনো সময় আনসাবস্ক্রাইব করতে পারেন।",
    },
  };

  return (
    <section className="relative w-full bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/pattern-dots.svg')] bg-repeat"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-[#40739e] mb-4"
        >
          {texts.headline[language]}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-600 mb-10 text-sm sm:text-base"
        >
          {texts.description[language]}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={texts.placeholder[language]}
            className={`w-full sm:w-80 px-5 py-3 rounded-lg border ${
              error ? "border-red-500" : "border-gray-300"
            } focus:ring-2 focus:ring-orange-400 outline-none text-gray-900 placeholder-gray-400 transition duration-300 shadow-sm hover:shadow-md`}
          />
          <motion.button
            whileHover={{ boxShadow: "0 8px 20px rgba(255,165,0,0.4)" }}
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-orange-600 transition duration-300"
          >
            {texts.button[language]}
          </motion.button>
        </motion.form>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-500 text-sm"
          >
            {error}
          </motion.p>
        )}
        {submitted && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-green-500 font-semibold"
            >
              {texts.success[language]}
            </motion.p>
            <Confetti numberOfPieces={200} recycle={false} />
          </>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-gray-500 text-xs sm:text-sm"
        >
          {texts.privacy[language]}
        </motion.p>
      </div>
    </section>
  );
}
