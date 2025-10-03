import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const testimonialsData = [
  {
    en: "This platform transformed our car business with a professional and fast website. Customers love it!",
    bn: "এই প্ল্যাটফর্ম আমাদের গাড়ির ব্যবসাকে একেবারে বদলে দিয়েছে। ওয়েবসাইটটি দ্রুত এবং প্রফেশনাল, কাস্টমাররা ভীষণ খুশি!",
    name: "John Smith",
    role: "CEO, AutoWorld",
  },
  {
    en: "Working with this team was smooth. The site is elegant, modern, and very responsive.",
    bn: "এই টিমের সাথে কাজ করা খুবই সহজ ছিল। সাইটটি আধুনিক, সুন্দর এবং একেবারে রেসপন্সিভ।",
    name: "Sophia Lee",
    role: "Marketing Director, DriveNow",
  },
  {
    en: "Finding cars and comparing models is effortless on this platform.",
    bn: "গাড়ি খোঁজা এবং মডেল তুলনা করা এখানে খুবই সহজ।",
    name: "Michael Johnson",
    role: "Car Enthusiast",
  },
  {
    en: "The attention to detail is outstanding. The mobile version works flawlessly.",
    bn: "ডিটেইলসের প্রতি নজর অসাধারণ। মোবাইল ভার্সন একেবারে নিখুঁতভাবে কাজ করে।",
    name: "Emily Davis",
    role: "Operations Manager, SpeedyCars",
  },
  {
    en: "Customer engagement improved drastically after launching this website.",
    bn: "ওয়েবসাইট লঞ্চ করার পর কাস্টমার এনগেজমেন্ট অনেক বেড়ে গেছে।",
    name: "David Wilson",
    role: "Sales Head, CarHub",
  },
  {
    en: "This site loads incredibly fast and creates a great impression.",
    bn: "সাইটটি অবিশ্বাস্য দ্রুত লোড হয় এবং দারুণ ইমপ্রেশন তৈরি করে।",
    name: "Emma Brown",
    role: "Auto Blogger",
  },
  {
    en: "The design feels premium. Perfect for automotive businesses.",
    bn: "ডিজাইনটি একেবারে প্রিমিয়াম মনে হয়। গাড়ির ব্যবসার জন্য একদম পারফেক্ট।",
    name: "Liam Miller",
    role: "Dealer",
  },
  {
    en: "The booking system is smooth and saves our clients a lot of time.",
    bn: "বুকিং সিস্টেমটি খুবই স্মুথ, কাস্টমারদের সময় বাঁচায়।",
    name: "Isabella Garcia",
    role: "Customer",
  },
  {
    en: "SEO optimization helped us gain more traffic organically.",
    bn: "এসইও অপ্টিমাইজেশন আমাদের অর্গানিক ট্রাফিক অনেক বাড়িয়েছে।",
    name: "Oliver Martinez",
    role: "Digital Marketer",
  },
  {
    en: "Navigation is intuitive and user-friendly. Very impressed!",
    bn: "নেভিগেশন খুবই সহজ এবং ইউজার ফ্রেন্ডলি। সত্যিই ইমপ্রেসড!",
    name: "Sophia Khan",
    role: "Car Reviewer",
  },
  {
    en: "This platform gave us a competitive edge in the market.",
    bn: "এই প্ল্যাটফর্ম আমাদের মার্কেটে প্রতিযোগিতামূলক সুবিধা দিয়েছে।",
    name: "Ethan Clark",
    role: "Business Owner",
  },
  {
    en: "The site looks fantastic on tablets and mobile devices.",
    bn: "সাইটটি ট্যাবলেট এবং মোবাইলে দারুণ লাগে।",
    name: "Ava Patel",
    role: "Customer",
  },
  {
    en: "We loved the detailed analytics and reports integration.",
    bn: "আমরা ডিটেইল অ্যানালিটিক্স এবং রিপোর্ট ইন্টিগ্রেশন ভীষণ পছন্দ করেছি।",
    name: "James Anderson",
    role: "Manager",
  },
  {
    en: "Support team is very responsive and helpful.",
    bn: "সাপোর্ট টিম খুবই রেসপন্সিভ এবং হেল্পফুল।",
    name: "Mia Wong",
    role: "Client",
  },
  {
    en: "A true example of professionalism and creativity.",
    bn: "প্রফেশনালিজম এবং ক্রিয়েটিভিটির সত্যিকারের উদাহরণ।",
    name: "William Scott",
    role: "Auto Dealer",
  },
  {
    en: "The dashboard is easy to use even for beginners.",
    bn: "ড্যাশবোর্ডটি খুবই সহজ, নতুনদের জন্যও ব্যবহার করা সহজ।",
    name: "Charlotte White",
    role: "Customer",
  },
  {
    en: "Our sales increased after this new design.",
    bn: "এই নতুন ডিজাইন আসার পর আমাদের সেল অনেক বেড়েছে।",
    name: "Daniel Lewis",
    role: "Sales Manager",
  },
  {
    en: "Their attention to user experience is remarkable.",
    bn: "ইউজার এক্সপেরিয়েন্সের প্রতি তাদের মনোযোগ সত্যিই অসাধারণ।",
    name: "Amelia Turner",
    role: "UX Consultant",
  },
  {
    en: "I loved how modern and minimal the design feels.",
    bn: "ডিজাইনটি আধুনিক এবং মিনিমাল, দারুণ লেগেছে।",
    name: "Lucas Hill",
    role: "Car Enthusiast",
  },
  {
    en: "A car website that finally feels like 2025!",
    bn: "অবশেষে এমন একটি গাড়ির ওয়েবসাইট যা ২০২৫ সালের মতো লাগে!",
    name: "Harper Young",
    role: "Customer",
  },
  {
    en: "Performance and speed are top-notch. Highly recommended.",
    bn: "পারফরম্যান্স এবং স্পিড একেবারে টপ-ক্লাস। হাইলি রিকমেন্ডেড।",
    name: "Benjamin Adams",
    role: "Dealer",
  },
  {
    en: "One of the best investments for our automotive business.",
    bn: "আমাদের গাড়ির ব্যবসার জন্য অন্যতম সেরা ইনভেস্টমেন্ট।",
    name: "Ella Parker",
    role: "Business Owner",
  },
];

const Testimonials = () => {
  const { language } = useContext(LanguageContext);
  const [visible, setVisible] = useState(16);

  return (
    <div className="w-[98%] md:w-[82%] my-24 m-auto bg-gray-50 min-h-screen py-10 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {language === "EN" ? "Client Testimonials" : "ক্লায়েন্টদের মতামত"}
        </h1>
        <p className="text-gray-600 italic">
          {language === "EN"
            ? "Read what our customers and partners say about us."
            : "আমাদের গ্রাহক এবং পার্টনাররা আমাদের সম্পর্কে কী বলছেন পড়ুন।"}
        </p>
      </div>

      {/* Testimonials Flexbox */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
        {testimonialsData.slice(0, visible).map((t, i) => (
          <div
            key={i}
            className="flex-1 min-w-[280px] max-w-[350px] bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <p className="text-gray-700 italic mb-4">“{t[language.toLowerCase()]}”</p>
            <h3 className="font-semibold text-lg">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visible < testimonialsData.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible(testimonialsData.length)}
            className="px-8 py-3 bg-orange-600 text-white rounded-full font-semibold  transition"
          >
            {language === "EN" ? "Load More" : "আরও দেখুন"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
