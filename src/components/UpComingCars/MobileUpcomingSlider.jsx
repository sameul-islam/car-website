import React, { useState, useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";


import img1 from '../../assets/itemsImage/img (14).jpg'
import img2 from '../../assets/itemsImage/img (1).jpg'
import img3 from '../../assets/itemsImage/img (2).jpg'
import img4 from '../../assets/itemsImage/img (3).jpg'
import img5 from '../../assets/itemsImage/img (4).jpg'
import img6 from '../../assets/itemsImage/img (5).jpg'
import img7 from '../../assets/itemsImage/img (6).jpg'
import img8 from '../../assets/itemsImage/img (7).jpg'
import img9 from '../../assets/itemsImage/img (8).jpg'
import img10 from '../../assets/itemsImage/img (10).jpg'
import img11 from '../../assets/itemsImage/img (9).jpg'
import img12 from '../../assets/itemsImage/img (12).jpg'

export default function DesktopUpcomingSlider() {
  const { language } = useContext(LanguageContext);

  const items = [
    { id: 1, titleEN: "Tesla Model X Plaid", titleBN: "টেসলা মডেল এক্স প্লেইড", image: img1 },
    { id: 2, titleEN: "BMW i7", titleBN: "বিএমডব্লিউ আই৭", image: img2 },
    { id: 3, titleEN: "Mercedes EQS", titleBN: "মার্সিডিজ ইকিউএস", image: img3 },
    { id: 4, titleEN: "Audi e-tron GT", titleBN: "অ্যাউডি ই-ট্রন জিটি", image: img4},
    { id: 5, titleEN: "Porsche Taycan", titleBN: "পোরশে টাইকান", image: img5 },
    { id: 6, titleEN: "Rivian R1T", titleBN: "রিভিয়ান আর১টি", image: img6 },
    { id: 7, titleEN: "Lucid Air", titleBN: "লুসিড এয়ার", image: img7 },
    { id: 8, titleEN: "Ford F-150 Lightning", titleBN: "ফোর্ড এফ-১৫০ লাইটনিং", image: img8 },
    { id: 9, titleEN: "Nissan Ariya", titleBN: "নিসান অ্যারিয়া", image: img9 },
    { id: 10, titleEN: "Hyundai Ioniq 6", titleBN: "হিউন্দাই আইওনিক ৬", image: img10 },
    { id: 11, titleEN: "Kia EV9", titleBN: "কিয়া ইভি৯", image: img11 },
    { id: 12, titleEN: "Toyota bZ4X", titleBN: "টয়োটা বিএজেড৪এক্স", image: img12 },
  ];

  const [[index, direction], setIndex] = useState([0, 0]);
  const sliderRef = useRef(null);

  const next = () => setIndex(([i]) => [(i + 1) % items.length, 1]);
  const prev = () => setIndex(([i]) => [(i - 1 + items.length) % items.length, -1]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    let interval = setInterval(next, 5000);
    const sliderNode = sliderRef.current;
    const pause = () => clearInterval(interval);
    const resume = () => (interval = setInterval(next, 5000));

    sliderNode?.addEventListener("mouseenter", pause);
    sliderNode?.addEventListener("mouseleave", resume);

    return () => {
      clearInterval(interval);
      sliderNode?.removeEventListener("mouseenter", pause);
      sliderNode?.removeEventListener("mouseleave", resume);
    };
  }, [index]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      zIndex: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section className="w-full py-3 relative" ref={sliderRef}>
      {/* Headline */}
      <div className="w-[82%] mx-auto flex flex-col items-center justify-center mb-3 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#273c75]">
          {language === "EN" ? "Future of Mobility" : "ভবিষ্যতের যাত্রা"}{" "}
          <span className="text-amber-600">{language === "EN" ? "Unveiled" : "উন্মোচিত"}</span>
        </h3>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          {language === "EN"
            ? "Discover the next generation of innovation in motion"
            : "চলাচলের পরবর্তী প্রজন্মের উদ্ভাবন আবিষ্কার করুন"}
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[550px] overflow-hidden flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={items[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-[80%] max-w-[900px] rounded-xl shadow-2xl overflow-hidden bg-white"
          >
            <Link to={`/cars/${items[index].id}`}>
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={items[index].image}
                  alt={language === "EN" ? items[index].titleEN : items[index].titleBN}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black/50 to-transparent w-full">
                  <h4 className="font-semibold text-lg md:text-xl text-white">
                    {language === "EN" ? items[index].titleEN : items[index].titleBN}
                  </h4>
                  <p className="text-sm md:text-base text-gray-200 mt-1">
                    {language === "EN" ? "Coming soon" : "শীঘ্রই আসছে"}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-6 md:mt-16 justify-center">
        <button
          aria-label="Previous"
          onClick={prev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-xl transition"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-xl transition"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 md:w-4 md:h-3 rounded-full transition-all ${i === index ? "bg-[#273c75] scale-110" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}
