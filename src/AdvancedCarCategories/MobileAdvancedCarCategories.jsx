import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";


import img1 from '../assets/itemsImage/img (1).jpg'
import img2 from '../assets/itemsImage/img (2).jpg'
import img3 from '../assets/itemsImage/img (3).jpg'
import img4 from '../assets/itemsImage/img (4).jpg'
import img5 from '../assets/itemsImage/img (5).jpg'
import img6 from '../assets/itemsImage/img (6).jpg'
import img7 from '../assets/itemsImage/img (7).jpg'
import img8 from '../assets/itemsImage/img (8).jpg'
import img9 from '../assets/itemsImage/img (9).jpg'
import img10 from '../assets/itemsImage/img (10).jpg'
import img11 from '../assets/itemsImage/img (11).jpg'
import img12 from '../assets/itemsImage/img (12).jpg'
import img13 from '../assets/itemsImage/img (13).jpg'
import img14 from '../assets/itemsImage/img (14).jpg'
import img15 from '../assets/itemsImage/img (15).jpg'
import img16 from '../assets/itemsImage/img (16).jpg'
import img17 from '../assets/itemsImage/img (17).jpg'
import img18 from '../assets/itemsImage/img (18).jpg'
import img19 from '../assets/itemsImage/img (19).jpg'
import img20 from '../assets/itemsImage/img (20).jpg'
import img21 from '../assets/itemsImage/img (21).jpg'
import img22 from '../assets/itemsImage/img (22).jpg'
import img23 from '../assets/itemsImage/img (23).jpg'
import img24 from '../assets/itemsImage/img (24).jpg'
import img25 from '../assets/itemsImage/img (25).jpg'
import img26 from '../assets/itemsImage/img (26).jpg'
import img27 from '../assets/itemsImage/img (27).jpg'
import img28 from '../assets/itemsImage/img (28).jpg'
import img29 from '../assets/itemsImage/img (29).jpg'
import img30 from '../assets/itemsImage/img (30).jpg'
import img31 from '../assets/itemsImage/img (31).jpg'
import img32 from '../assets/itemsImage/img (32).jpg'


export default function MobileAdvancedCarList() {
  const { language } = useContext(LanguageContext);

  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); 

  const filters = [
    { en: "All", bn: "সকল" },
    { en: "Electric", bn: "ইলেকট্রিক" },
    { en: "SUV", bn: "এসইউভি" },
    { en: "Luxury", bn: "লাক্সারি" },
    { en: "Diesel", bn: "ডিজেল" },
    { en: "Petrol", bn: "পেট্রোল" },
    { en: "Hybrid", bn: "হাইব্রিড" },
    { en: "Sedan", bn: "সেডান" },
    { en: "Convertible", bn: "কনভার্টিবল" },
    { en: "Hatchback", bn: "হ্যাচব্যাক" },
    { en: "Truck", bn: "ট্রাক" },
    { en: "Off-Road", bn: "অফ-রোড" },
  ];


const cars = [
  { id: 1, name: { EN: "Tesla Model X", BN: "টেসলা মডেল এক্স" }, category: { EN: "Electric", BN: "বৈদ্যুতিক" }, price: "$90,000", image: img1 },
  { id: 2, name: { EN: "BMW X5", BN: "বিএমডব্লিউ এক্স৫" }, category: { EN: "Electric", BN: "বৈদ্যুতিক" }, price: "$70,000", image: img2 },
  { id: 3, name: { EN: "Mercedes S-Class", BN: "মার্সিডিস এস-ক্লাস" }, category: { EN: "Electric", BN: "বৈদ্যুতিক" }, price: "$120,000", image: img3 },
  { id: 4, name: { EN: "Toyota Hilux", BN: "টয়োটা হিলাক্স" }, category: { EN: "Electric", BN: "বৈদ্যুতিক" }, price: "$45,000", image: img4 },
  { id: 5, name: { EN: "Honda Civic", BN: "হোন্ডা সিভিক" }, category: { EN: "SUV", BN: "এসইউভি" }, price: "$25,000", image: img5 },
  { id: 6, name: { EN: "Audi Q7", BN: "অডি কিউ৭" }, category: { EN: "SUV", BN: "এসইউভি" }, price: "$80,000", image: img6 },
  { id: 7, name: { EN: "Ford Mustang", BN: "ফোর্ড মস্তাং" }, category: { EN: "SUV", BN: "এসইউভি" }, price: "$60,000", image: img7 },
  { id: 8, name: { EN: "Toyota Prius", BN: "টয়োটা প্রিয়াস" }, category: { EN: "Luxury", BN: "লাক্সারি" }, price: "$35,000", image: img8 },
  { id: 9, name: { EN: "Jeep Wrangler", BN: "জিপ র‍্যাংলার" }, category: { EN: "Luxury", BN: "লাক্সারি" }, price: "$50,000", image: img9 },
  { id: 10, name: { EN: "Honda Fit", BN: "হোন্ডা ফিট" }, category: { EN: "Luxury", BN: "লাক্সারি" }, price: "$18,000", image: img10 },
  { id: 11, name: { EN: "Tesla Model S", BN: "টেসলা মডেল এস" }, category: { EN: "Electric", BN: "বৈদ্যুতিক" }, price: "$95,000", image: img11 },
  { id: 12, name: { EN: "Mercedes G-Class", BN: "মার্সিডিস জি-ক্লাস" }, category: { EN: "Diesel", BN: "ডিজেল" }, price: "$130,000", image: img12 },
  { id: 13, name: { EN: "Mercedes GLA", BN: "মার্সিডিস জি এল এ" }, category: { EN: "Diesel", BN: "ডিজেল" }, price: "$115,000", image: img13 },
  { id: 14, name: { EN: "Mercedes C-Class", BN: "মার্সিডিস সি-ক্লাস" }, category: { EN: "Petrol", BN: "পেট্রল" }, price: "$130,000", image: img14 },
  { id: 15, name: { EN: "BMW 5 Series", BN: "বিএমডব্লিউ ৫ সিরিজ" }, category: { EN: "Petrol", BN: "পেট্রল" }, price: "$120,000", image: img15 },
  { id: 16, name: { EN: "Mercedes GLE", BN: "মার্সিডিস জি এল ই" }, category: { EN: "Hybrid", BN: "হাইব্রিড" }, price: "$140,000", image: img16 },
  { id: 17, name: { EN: "Toyota Camry", BN: "টয়োটা ক্যামরি" }, category: { EN: "Hybrid", BN: "হাইব্রিড" }, price: "$80,000", image: img17 },
  { id: 18, name: { EN: "Mercedes E-Class", BN: "মার্সিডিস ই-ক্লাস" }, category: { EN: "Sedan", BN: "সেডান" }, price: "$110,000", image: img18 },
  { id: 19, name: { EN: "BMW 3 Series", BN: "বিএমডব্লিউ ৩ সিরিজ" }, category: { EN: "Sedan", BN: "সেডান" }, price: "$90,000", image: img19 },
  { id: 20, name: { EN: "Mercedes SL", BN: "মার্সিডিস এসএল" }, category: { EN: "Convertible", BN: "কনভার্টিবল" }, price: "$150,000", image: img20 },
  { id: 21, name: { EN: "Porsche 911", BN: "পোরশে ৯১১" }, category: { EN: "Convertible", BN: "কনভার্টিবল" }, price: "$200,000", image: img21 },
  { id: 22, name: { EN: "Volkswagen Golf", BN: "ভলক্সভাগেন গলফ" }, category: { EN: "Hatchback", BN: "হ্যাচব্যাক" }, price: "$30,000", image: img22 },
  { id: 23, name: { EN: "Honda Jazz", BN: "হোন্ডা জাজ" }, category: { EN: "Hatchback", BN: "হ্যাচব্যাক" }, price: "$28,000", image: img23 },
  { id: 24, name: { EN: "Ford F-150", BN: "ফোর্ড এফ-১৫০" }, category: { EN: "Truck", BN: "ট্রাক" }, price: "$50,000", image: img24 },
  { id: 25, name: { EN: "Toyota Tundra", BN: "টয়োটা টুন্ড্রা" }, category: { EN: "Truck", BN: "ট্রাক" }, price: "$60,000", image: img25 },
  { id: 26, name: { EN: "Land Rover Defender", BN: "ল্যান্ড রোভার ডিফেন্ডার" }, category: { EN: "Off-Road", BN: "অফ-রোড" }, price: "$90,000", image: img26 },
  { id: 27, name: { EN: "Jeep Gladiator", BN: "জিপ গ্লাডিয়েটর" }, category: { EN: "Off-Road", BN: "অফ-রোড" }, price: "$80,000", image: img27 },
  { id: 28, name: { EN: "Nissan Leaf", BN: "নিসান লিফ" }, category: { EN: "Electric", BN: "বৈদ্যুতিক" }, price: "$40,000", image: img28 },
  { id: 29, name: { EN: "Audi A6", BN: "অডি এ৬" }, category: { EN: "Sedan", BN: "সেডান" }, price: "$85,000", image: img29 },
  { id: 30, name: { EN: "BMW X3", BN: "বিএমডব্লিউ এক্স৩" }, category: { EN: "SUV", BN: "এসইউভি" }, price: "$70,000", image: img30 },
  { id: 31, name: { EN: "Mercedes CLA", BN: "মার্সিডিস সিএলএ" }, category: { EN: "Luxury", BN: "লাক্সারি" }, price: "$95,000", image: img31 },
  { id: 32, name: { EN: "Tesla Model 3", BN: "টেসলা মডেল ৩" }, category: { EN: "Electric", BN: "বৈদ্যুতিক" }, price: "$55,000", image: img32 },
];


  const filteredCars = activeFilter === "All" ? cars : cars.filter(car => car.category.EN === activeFilter);
  const visibleCars = filteredCars.slice(0, visibleCount);

  return (
    <section className="w-full mx-auto py-12 px-4">
      {/* Headline */}

        <div className="flex flex-col items-center text-center mb-6">
        <h3 className="text-xl font-bold text-[#273c75]">
          {language === "EN" ? "Popular" : "জনপ্রিয়"}{" "}
          <span className="text-amber-600">{language === "EN" ? "Categories" : "ক্যাটেগরি"}</span>
        </h3>
        <p className="text-gray-500 mt-2 text-sm">
          {language === "EN"
            ? "Discover the next generation of innovation in motion"
            : "চলাচলের পরবর্তী প্রজন্মের উদ্ভাবন আবিষ্কার করুন"}
        </p>
      </div>


      {/* Horizontal Scrollable Filter Buttons */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-6">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveFilter(filter.en);
              setVisibleCount(6);
            }}
            className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition ${
              activeFilter === filter.en
                ? "bg-[#273c75] text-white shadow-xl"
                : "bg-gray-200 text-gray-700 hover:shadow-lg"
            }`}
          >
            {language === "EN" ? filter.en : filter.bn}
          </button>
        ))}
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visibleCars.map(car => (
          <motion.div
   key={car.id}
   className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer flex flex-col"
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
>
  <img
    src={car.image}
    alt={language === "EN" ? car.name.EN : car.name.BN}
    className="w-full h-48 object-cover"
  />
  <div className="p-4 flex flex-col justify-between flex-1">
    <div>
      <h3 className="font-bold text-md">{language === "EN" ? car.name.EN : car.name.BN}</h3>
      <p className="text-gray-600 mt-1">{car.price}</p>
      <p className="text-sm text-orange-600 mt-1">{language === "EN" ? car.category.EN : car.category.BN}</p>
    </div>
    <div className="mt-4">
      <Link
        to={`/cars/${car.id}`}
        className="block text-center px-4 py-2 bg-[#273c75] text-white rounded-md font-medium hover:bg-[#1e2a5a] transition"
      >
        {language === "EN" ? "View Details" : "বিস্তারিত দেখুন"}
      </Link>
    </div>
  </div>
</motion.div>



        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredCars.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredCars.length))}
            className="px-5 py-3 bg-gray-200 hover:scale-105 duration-300 shadow-md  text-[#273c75] rounded-md font-semibold hover:shadow-lg transition"
          >
            {language === "EN" ? "Load More" : "আরও দেখুন"}
          </button>
        </div>
      )}
    </section>
  );
}








