import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";


const faqs = [
  {
    question: {
      EN: "What is the minimum age to apply for a car loan?",
      BN: "গাড়ি ঋণের জন্য ন্যূনতম বয়স কত?"
    },
    answer: {
      EN: "You must be at least 21 years old to apply for a car loan.",
      BN: "গাড়ি ঋণের জন্য আপনাকে ন্যূনতম ২১ বছর বয়সী হতে হবে।"
    },
  },
  {
    question: {
      EN: "Can I apply for a loan for a used car?",
      BN: "আমি কি ব্যবহৃত গাড়ির জন্য ঋণ আবেদন করতে পারি?"
    },
    answer: {
      EN: "Yes, our platform supports loans for both new and used cars.",
      BN: "হ্যাঁ, আমাদের প্ল্যাটফর্ম নতুন এবং ব্যবহৃত উভয় ধরনের গাড়ির ঋণ সমর্থন করে।"
    },
  },
  {
    question: {
      EN: "What is the interest rate for car loans?",
      BN: "গাড়ি ঋণের সুদের হার কত?"
    },
    answer: {
      EN: "Interest rates start from 6.9% depending on your eligibility and loan amount.",
      BN: "সুযোগ্যতা এবং ঋণের পরিমাণ অনুযায়ী সুদের হার ৬.৯% থেকে শুরু।"
    },
  },
  {
    question: {
      EN: "How long does the loan approval take?",
      BN: "ঋণ অনুমোদনে কত সময় লাগে?"
    },
    answer: {
      EN: "Loan approval can take as little as 24-48 hours with all documents submitted.",
      BN: "সব ডকুমেন্ট জমা দেওয়ার পর ঋণ অনুমোদনে মাত্র ২৪-৪৮ ঘণ্টা লাগতে পারে।"
    },
  },
  {
    question: {
      EN: "How long does the loan approval take?",
      BN: "ঋণ অনুমোদনে কত সময় লাগে?"
    },
    answer: {
      EN: "Loan approval can take as little as 24-48 hours with all documents submitted.",
      BN: "সব ডকুমেন্ট জমা দেওয়ার পর ঋণ অনুমোদনে মাত্র ২৪-৪৮ ঘণ্টা লাগতে পারে।"
    },
  },
  {
    question: {
      EN: "How long does the loan approval take?",
      BN: "ঋণ অনুমোদনে কত সময় লাগে?"
    },
    answer: {
      EN: "Loan approval can take as little as 24-48 hours with all documents submitted.",
      BN: "সব ডকুমেন্ট জমা দেওয়ার পর ঋণ অনুমোদনে মাত্র ২৪-৪৮ ঘণ্টা লাগতে পারে।"
    },
  },
  {
    question: {
      EN: "How long does the loan approval take?",
      BN: "ঋণ অনুমোদনে কত সময় লাগে?"
    },
    answer: {
      EN: "Loan approval can take as little as 24-48 hours with all documents submitted.",
      BN: "সব ডকুমেন্ট জমা দেওয়ার পর ঋণ অনুমোদনে মাত্র ২৪-৪৮ ঘণ্টা লাগতে পারে।"
    },
  },
  {
    question: {
      EN: "How long does the loan approval take?",
      BN: "ঋণ অনুমোদনে কত সময় লাগে?"
    },
    answer: {
      EN: "Loan approval can take as little as 24-48 hours with all documents submitted.",
      BN: "সব ডকুমেন্ট জমা দেওয়ার পর ঋণ অনুমোদনে মাত্র ২৪-৪৮ ঘণ্টা লাগতে পারে।"
    },
  },
  {
    question: {
      EN: "How long does the loan approval take?",
      BN: "ঋণ অনুমোদনে কত সময় লাগে?"
    },
    answer: {
      EN: "Loan approval can take as little as 24-48 hours with all documents submitted.",
      BN: "সব ডকুমেন্ট জমা দেওয়ার পর ঋণ অনুমোদনে মাত্র ২৪-৪৮ ঘণ্টা লাগতে পারে।"
    },
  },
  {
    question: {
      EN: "How long does the loan approval take?",
      BN: "ঋণ অনুমোদনে কত সময় লাগে?"
    },
    answer: {
      EN: "Loan approval can take as little as 24-48 hours with all documents submitted.",
      BN: "সব ডকুমেন্ট জমা দেওয়ার পর ঋণ অনুমোদনে মাত্র ২৪-৪৮ ঘণ্টা লাগতে পারে।"
    },
  },

];

export default function DesktopFAQ() {
  const { language } = useContext(LanguageContext); 
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-gray-100 flex justify-center">
      <div className="w-[80%] grid grid-cols-2 gap-8">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer"
            layout
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">{faq.question[language]}</h3>
              {activeIndex === i ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <AnimatePresence>
              {activeIndex === i && (
                <motion.p
                  className="mt-3 text-gray-700 text-sm"
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
      </div>
    </section>
  );
}
