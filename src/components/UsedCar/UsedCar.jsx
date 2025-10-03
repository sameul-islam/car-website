// import React, { useRef, useState, useEffect, useContext } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { LanguageContext } from "../../context/LanguageContext";


// import img1 from '../../assets/allProducts/img (19).jpg'
// import img2 from '../../assets/allProducts/img (23).jpg'
// import img3 from '../../assets/allProducts/img (34).jpg'
// import img4 from '../../assets/allProducts/img (45).jpg'
// import img5 from '../../assets/allProducts/img (23).jpg'
// import img6 from '../../assets/allProducts/img (24).jpg'
// import img7 from '../../assets/allProducts/img (37).jpg'
// import img8 from '../../assets/allProducts/img (28).jpg'
// import img9 from '../../assets/allProducts/img (39).jpg'
// import img10 from '../../assets/allProducts/img (10).jpg'
// import img11 from '../../assets/allProducts/img (18).jpg'
// import img12 from '../../assets/allProducts/img (14).jpg'


// const cars = [
//   { id: 1, nameEN: "Tesla Model X", nameBN: "টেসলা মডেল এক্স", price: "$90,000", image: img1 },
//   { id: 2, nameEN: "BMW X5", nameBN: "বিএমডব্লিউ এক্স৫", price: "$70,000", image: img2 },
//   { id: 3, nameEN: "Mercedes S-Class", nameBN: "মার্সিডিস এস-ক্লাস", price: "$120,000", image: img3 },
//   { id: 4, nameEN: "Toyota Hilux", nameBN: "টয়োটা হিলাক্স", price: "$45,000", image: img4 },
//   { id: 5, nameEN: "Honda Civic", nameBN: "হোন্ডা সিভিক", price: "$25,000", image: img5 },
//   { id: 6, nameEN: "Audi Q7", nameBN: "অডি কিউ৭", price: "$80,000", image: img6 },
//   { id: 7, nameEN: "Ford Mustang", nameBN: "ফোর্ড মস্তাং", price: "$60,000", image: img7 },
//   { id: 8, nameEN: "Toyota Prius", nameBN: "টয়োটা প্রিয়াস", price: "$35,000", image: img8 },
//   { id: 9, nameEN: "Jeep Wrangler", nameBN: "জিপ র‍্যাংলার", price: "$50,000", image: img9 },
//   { id: 10, nameEN: "Honda Fit", nameBN: "হোন্ডা ফিট", price: "$18,000", image: img10 },
//   { id: 11, nameEN: "Tesla Model S", nameBN: "টেসলা মডেল এস", price: "$95,000", image: img11 },
//   { id: 12, nameEN: "Mercedes G-Class", nameBN: "মার্সিডিস জি-ক্লাস", price: "$130,000", image: img12 },
// ];

// export default function UsedCar() {
//   const { language } = useContext(LanguageContext); 
//   const trackRef = useRef(null);
//   const [index, setIndex] = useState(0);
//   const [cardsPerView, setCardsPerView] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 640) setCardsPerView(1); 
//       else if (width >= 640 && width < 768) setCardsPerView(2); 
//       else if (width >= 768 && width < 1024) setCardsPerView(3); 
//       else setCardsPerView(4); 
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const scrollToIndex = (newIndex) => {
//     const track = trackRef.current;
//     if (!track) return;
//     const cardWidth = track.scrollWidth / cars.length;
//     track.scrollTo({
//       left: cardWidth * newIndex,
//       behavior: "smooth",
//     });
//     setIndex(newIndex);
//   };

//   const handlePrev = () => {
//     const newIndex = Math.max(index - 1, 0);
//     scrollToIndex(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = Math.min(index + 1, cars.length - cardsPerView);
//     scrollToIndex(newIndex);
//   };

//   return (
//     <section className="w-[82%] mx-auto py-16">
//       {/* Headline */}
//       <div className="">
//         <h3 className="text-2xl w-fit font-bold bg-white/50 p-4 shadow-md hover:shadow-2xl duration-300 rounded-md text-[#273c75] text-center md:text-left">
//           {language === "EN" ? "Certified" : "সার্টিফাইড"}
//           <span className="text-amber-600">{language === "EN" ? "Pre-Owned Cars" : "প্রি-ওন্ড কারস"}</span>
//         </h3>
//         <p className="text-gray-500 mt-2 text-sm md:text-base">
//           {language === "EN" ? "Trusted vehicles, ready for your next journey" : "বিশ্বস্ত গাড়ি, আপনার পরবর্তী যাত্রার জন্য প্রস্তুত"}
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="relative">
//         <div
//           ref={trackRef}
//           className="flex overflow-x-auto no-scrollbar  gap-6"
//           style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
//         >
//           {cars.map((car) => (
//             <div
//               key={car.id}
//               className={`flex-shrink-0 w-full md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`}
//               style={{ scrollSnapAlign: "start" }}
//             >
//               <img
//                 src={car.image}
//                 alt={language === "EN" ? car.nameEN : car.nameBN}
//                 className="w-full h-48 md:h-52 lg:h-56 object-cover rounded-t-xl"
//                 loading="lazy"
//               />
//               <div className="p-4">
//                 <h4 className="text-lg md:text-xl font-semibold text-gray-900">
//                   {language === "EN" ? car.nameEN : car.nameBN}
//                 </h4>
//                 <p className="text-orange-600 mt-1 font-medium">{car.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={handlePrev}
//           className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-md w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:shadow-xl transition"
//           aria-label="Previous"
//         >
//           <ChevronLeft className="w-6 h-6 text-gray-700" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-md w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:shadow-xl transition"
//           aria-label="Next"
//         >
//           <ChevronRight className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>
//     </section>
//   );
// }















import React, { useRef, useState, useEffect, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LanguageContext } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

import img1 from '../../assets/allProducts/img (43).jpg'
import img2 from '../../assets/allProducts/img (23).jpg'
import img3 from '../../assets/allProducts/img (34).jpg'
import img4 from '../../assets/allProducts/img (45).jpg'
import img5 from '../../assets/allProducts/img (25).jpg'
import img6 from '../../assets/allProducts/img (24).jpg'
import img7 from '../../assets/allProducts/img (37).jpg'
import img8 from '../../assets/allProducts/img (28).jpg'
import img9 from '../../assets/allProducts/img (39).jpg'
import img10 from '../../assets/allProducts/img (55).jpg'
import img11 from '../../assets/allProducts/img (48).jpg'
import img12 from '../../assets/allProducts/img (65).jpg'

const cars = [
  { id: 43, nameEN: "Tesla Model X", nameBN: "টেসলা মডেল এক্স", price: 90000, image: img1 },
  { id: 23, nameEN: "BMW X5", nameBN: "বিএমডব্লিউ এক্স৫", price: 70000, image: img2 },
  { id: 34, nameEN: "Mercedes S-Class", nameBN: "মার্সিডিস এস-ক্লাস", price: 120000, image: img3 },
  { id: 45, nameEN: "Toyota Hilux", nameBN: "টয়োটা হিলাক্স", price: 45000, image: img4 },
  { id: 25, nameEN: "Honda Civic", nameBN: "হোন্ডা সিভিক", price: 25000, image: img5 },
  { id: 24, nameEN: "Audi Q7", nameBN: "অডি কিউ৭", price: 80000, image: img6 },
  { id: 37, nameEN: "Ford Mustang", nameBN: "ফোর্ড মস্তাং", price: 60000, image: img7 },
  { id: 28, nameEN: "Toyota Prius", nameBN: "টয়োটা প্রিয়াস", price: 35000, image: img8 },
  { id: 39, nameEN: "Jeep Wrangler", nameBN: "জিপ র‍্যাংলার", price: 50000, image: img9 },
  { id: 55, nameEN: "Honda Fit", nameBN: "হোন্ডা ফিট", price: 18000, image: img10 },
  { id: 48, nameEN: "Tesla Model S", nameBN: "টেসলা মডেল এস", price: 95000, image: img11 },
  { id: 65, nameEN: "Mercedes G-Class", nameBN: "মার্সিডিস জি-ক্লাস", price: 130000, image: img12 },
];

export default function UsedCar() {
  const { language } = useContext(LanguageContext); 
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsPerView(1); 
      else if (width >= 640 && width < 768) setCardsPerView(2); 
      else if (width >= 768 && width < 1024) setCardsPerView(3); 
      else setCardsPerView(4); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToIndex = (newIndex) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / cars.length;
    track.scrollTo({
      left: cardWidth * newIndex,
      behavior: "smooth",
    });
    setIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = Math.max(index - 1, 0);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(index + 1, cars.length - cardsPerView);
    scrollToIndex(newIndex);
  };

  const handleCarClick = (id) => {
    navigate(`/product/${id}`); // এখানে লিঙ্ক যুক্ত হলো ডিটেল পেজে
  };

  return (
    <section className="w-[82%] mx-auto py-16">
      {/* Headline */}
      <div className="">
        <h3 className="text-2xl w-fit font-bold bg-white/50 p-4 shadow-md hover:shadow-2xl duration-300 rounded-md text-[#273c75] text-center md:text-left">
          {language === "EN" ? "Certified" : "সার্টিফাইড"}
          <span className="text-amber-600">{language === "EN" ? "Pre-Owned Cars" : "প্রি-ওন্ড কারস"}</span>
        </h3>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          {language === "EN" ? "Trusted vehicles, ready for your next journey" : "বিশ্বস্ত গাড়ি, আপনার পরবর্তী যাত্রার জন্য প্রস্তুত"}
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex overflow-x-auto no-scrollbar  gap-6"
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          {cars.map((car) => (
            <div
              key={car.id}
              onClick={() => handleCarClick(car.id)} // ক্লিক করলে ডিটেল পেজে যাবে
              className={`flex-shrink-0 w-full md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              style={{ scrollSnapAlign: "start" }}
            >
              <img
                src={car.image}
                alt={language === "EN" ? car.nameEN : car.nameBN}
                className="w-full h-48 md:h-52 lg:h-56 object-cover rounded-t-xl"
                loading="lazy"
              />
              <div className="p-4">
                <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                  {language === "EN" ? car.nameEN : car.nameBN}
                </h4>
                <p className="text-orange-600 mt-1 font-medium">${car.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white shadow-md w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:shadow-xl transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white shadow-md w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:shadow-xl transition"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
