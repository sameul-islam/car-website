import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";


import testimonail1 from '../../assets/testimonials/img1.jpg'
import testimonail2 from '../../assets/testimonials/img2.jpg'
import testimonail3 from '../../assets/testimonials/img3.jpg'
import testimonail4 from '../../assets/testimonials/img4.jpg'
import testimonail5 from '../../assets/testimonials/img5.jpg'
import testimonail6 from '../../assets/testimonials/img6.jpg'
import testimonail7 from '../../assets/testimonials/img7.jpg'
import testimonail8 from '../../assets/testimonials/img8.jpg'
import testimonail9 from '../../assets/testimonials/img9.jpg'


const testimonials = [
  {
    name: { EN: "Rahim Ahmed", BN: "রহিম আহমেদ" },
    designation: { EN: "Verified Buyer", BN: "নিশ্চিত ক্রেতা" },
    image: testimonail1,
    text: {
      EN: "Got my loan easily and quickly. The EMI plan is very convenient.",
      BN: "সহজ ও দ্রুত লোন পেতে পারলাম। EMI Plan খুবই সুবিধাজনক।",
    },
  },
  {
    name: { EN: "Karim Hossain", BN: "করিম হোসেন" },
    designation: { EN: "Verified Buyer", BN: "নিশ্চিত ক্রেতা" },
    image: testimonail2,
    text: {
      EN: "The loan process for my dream car was smooth and professional.",
      BN: "স্বপ্নের গাড়ি কিনতে লোনের পুরো প্রক্রিয়াটি smooth এবং professional ছিল।",
    },
  },
  {
    name: { EN: "Sabrina Akter", BN: "সাবরিনা আক্তার" },
    designation: { EN: "Verified Buyer", BN: "নিশ্চিত ক্রেতা" },
    image: testimonail3,
    text: {
      EN: "Low interest, fast process, and no hidden fees. Very satisfied!",
      BN: "কম সুদ, দ্রুত প্রক্রিয়া এবং কোনো hidden fees না থাকায় আমি খুব সন্তুষ্ট।",
    },
  },
  {
    name: { EN: "Fahim Rahman", BN: "ফাহিম রহমান" },
    designation: { EN: "Verified Buyer", BN: "নিশ্চিত ক্রেতা" },
    image: testimonail5,
    text: {
      EN: "Excellent service and quick approval.",
      BN: "চমৎকার সেবা এবং দ্রুত অনুমোদন।",
    },
  },
  {
    name: { EN: "Nusrat Jahan", BN: "নুসরাত জাহান" },
    designation: { EN: "Verified Buyer", BN: "নিশ্চিত ক্রেতা" },
    image: testimonail4,
    text: {
      EN: "The EMI calculator helped me plan my finances perfectly.",
      BN: "EMI ক্যালকুলেটর আমাকে আমার অর্থের পরিকল্পনা ঠিকঠাক করতে সাহায্য করেছে।",
    },
  },
  {
    name: { EN: "Rafiq Islam", BN: "রফিক ইসলাম" },
    designation: { EN: "Verified Buyer", BN: "নিশ্চিত ক্রেতা" },
    image: testimonail6,
    text: {
      EN: "Very professional and transparent loan process.",
      BN: "খুবই প্রফেশনাল এবং স্বচ্ছ লোন প্রক্রিয়া।",
    },
  },
  {
    name: { EN: "Tania Akter", BN: "তানিয়া আক্তার" },
    designation: { EN: "Verified Buyer", BN: "নিশ্চিত ক্রেতা" },
    image: testimonail7,
    text: {
      EN: "Highly recommend this platform for car loans.",
      BN: "গাড়ি লোনের জন্য এই প্ল্যাটফর্মটি অত্যন্ত সুপারিশযোগ্য।",
    },
  },
  {
    name: { EN: "Sabbir Khan", BN: "সাব্বির খান" },
    designation: { EN: "Verified Buyer", BN: "নিশ্চিত ক্রেতা" },
    image: testimonail8,
    text: {
      EN: "Fast disbursal and excellent support from the team.",
      BN: "দ্রুত লোন বিতরণ এবং টিমের চমৎকার সাপোর্ট।",
    },
  },
  {
    name: { EN: "Afsana Sultana", BN: "আফসানা সুলতানা" },
    designation: { EN: "Verified Buyer", BN: "নিশ্চিত ক্রেতা" },
    image: testimonail9,
    text: {
      EN: "Everything was smooth, clear, and easy to follow.",
      BN: "সবকিছু smooth, clear এবং অনুসরণ করা সহজ ছিল।",
    },
  },
];

export default function MobileTestimonials() {
  const { language } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:hidden w-full py-12 bg-gray-50 flex justify-center overflow-hidden">
      <div className="relative w-[95%] h-72">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonials[currentIndex].image}
              alt='Image'
              className="w-16 h-16 rounded-full mb-3 object-cover border-2 border-[#273c75]"
            />
            <h3 className="font-bold text-lg">{language === "EN"
                ? testimonials[currentIndex].name.EN
                : testimonials[currentIndex].name.BN}
                </h3>

            <p className="text-sm text-gray-500 mb-2">{language === 'EN' ? testimonials[currentIndex].designation.EN : testimonials[currentIndex].designation.BN}</p>
            <p className="text-gray-700 text-sm">
              {language === "EN"
                ? testimonials[currentIndex].text.EN
                : testimonials[currentIndex].text.BN}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
