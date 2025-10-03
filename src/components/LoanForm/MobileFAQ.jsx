import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const faqs = [
  {
    question: {
      EN: "What is the minimum age to apply for a car loan?",
      BN: "গাড়ি ঋণের জন্য আবেদন করার ন্যূনতম বয়স কত?",
    },
    answer: {
      EN: "You must be at least 21 years old to apply for a car loan.",
      BN: "গাড়ি ঋণের জন্য আবেদন করতে আপনাকে কমপক্ষে ২১ বছর বয়সী হতে হবে।",
    },
  },
  {
    question: {
      EN: "Can I apply for a loan for a used car?",
      BN: "আমি কি ব্যবহৃত গাড়ির জন্য ঋণের আবেদন করতে পারি?",
    },
    answer: {
      EN: "Yes, our platform supports loans for both new and used cars.",
      BN: "হ্যাঁ, আমাদের প্ল্যাটফর্ম নতুন এবং ব্যবহৃত উভয় ধরনের গাড়ির জন্য ঋণ সমর্থন করে।",
    },
  },
  {
    question: {
      EN: "What is the interest rate for car loans?",
      BN: "গাড়ি ঋণের জন্য সুদের হার কত?",
    },
    answer: {
      EN: "Interest rates start from 6.9% depending on your eligibility and loan amount.",
      BN: "সুদের হার ৬.৯% থেকে শুরু হয়, যা আপনার যোগ্যতা এবং ঋণের পরিমাণের উপর নির্ভর করে।",
    },
  },
  {
    question: {
      EN: "What is the interest rate for car loans?",
      BN: "গাড়ি ঋণের জন্য সুদের হার কত?",
    },
    answer: {
      EN: "Interest rates start from 6.9% depending on your eligibility and loan amount.",
      BN: "সুদের হার ৬.৯% থেকে শুরু হয়, যা আপনার যোগ্যতা এবং ঋণের পরিমাণের উপর নির্ভর করে।",
    },
  },
  {
    question: {
      EN: "What is the interest rate for car loans?",
      BN: "গাড়ি ঋণের জন্য সুদের হার কত?",
    },
    answer: {
      EN: "Interest rates start from 6.9% depending on your eligibility and loan amount.",
      BN: "সুদের হার ৬.৯% থেকে শুরু হয়, যা আপনার যোগ্যতা এবং ঋণের পরিমাণের উপর নির্ভর করে।",
    },
  },
  {
    question: {
      EN: "What is the interest rate for car loans?",
      BN: "গাড়ি ঋণের জন্য সুদের হার কত?",
    },
    answer: {
      EN: "Interest rates start from 6.9% depending on your eligibility and loan amount.",
      BN: "সুদের হার ৬.৯% থেকে শুরু হয়, যা আপনার যোগ্যতা এবং ঋণের পরিমাণের উপর নির্ভর করে।",
    },
  },

];

export default function MobileFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { language } = useContext(LanguageContext);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="md:hidden w-full py-12 flex flex-col gap-4 px-4">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          className="bg-white rounded-2xl shadow-lg p-4 cursor-pointer"
          layout
          onClick={() => toggle(i)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-base">{faq.question[language]}</h3>
            {activeIndex === i ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <AnimatePresence>
            {activeIndex === i && (
              <motion.p
                className="mt-2 text-gray-700 text-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer[language]}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </section>
  );
}
