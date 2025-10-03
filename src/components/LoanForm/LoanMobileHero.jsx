// import React, { useState } from "react";
// import { motion } from "framer-motion";

// export default function MobileHero() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   return (
//     <section className="md:hidden mt-30 w-full flex justify-center">
//       <div className="relative w-full h-[450px] shadow-xl overflow-hidden rounded-sm">
//         {/* Background Image */}
//         <img
//           src="/LoanHero2.jpg"
//           alt="Car Hero"
//           className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50 z-10"></div>

//         {/* Content */}
//         <motion.div
//           className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
//         >
//           <motion.div
//             className="inline-block"
//             animate={{
//               rotateY: mousePos.x * 5,
//               rotateX: -mousePos.y * 5,
//               scale: 1 + Math.abs(mousePos.x + mousePos.y) * 0.02,
//             }}
//             transition={{ type: "spring", stiffness: 120, damping: 20 }}
//           >
//             <motion.h1
//               className="text-3xl font-bold text-white mb-2"
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1 }}
//             >
//               Find Your <span className="text-red-600">Dream Car</span>
//             </motion.h1>
//             <motion.p
//               className="text-base text-white/90 mb-4 max-w-xs"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 0.3 }}
//             >
//               Explore exclusive cars and flexible EMI plans for your perfect ride.
//             </motion.p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../../context/LanguageContext";

import LoanHeroMobile from '../../assets/othersImage/LoanHeroMobile.jpg'

const LoanMobileHero = () =>  {
  const { language } = useContext(LanguageContext);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setMousePos({ x: (x - centerX) / centerX, y: (y - centerY) / centerY });
  };

  return (
    <section className="md:hidden mt-28 w-full flex justify-center">
      <div
        className="relative w-full h-[450px] shadow-xl overflow-hidden rounded-sm"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      >
        {/* Background Image */}
        <img
          src={LoanHeroMobile}
          alt="Car Hero"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4"
          style={{ perspective: 800 }}
        >
          <motion.div
            className="inline-block"
            animate={{
              rotateY: mousePos.x * 5,
              rotateX: -mousePos.y * 5,
              scale: 1 + Math.abs(mousePos.x + mousePos.y) * 0.02,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Headline */}
            <motion.h1
              className="text-3xl font-bold text-white mb-2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {language === "EN" ? (
                <>Find Your <span className="text-red-600">Dream Car</span></>
              ) : (
                <>আপনার <span className="text-red-600">স্বপ্নের গাড়ি</span> খুঁজুন</>
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-base text-white/90 mb-4 max-w-xs"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {language === "EN"
                ? "Explore exclusive cars and flexible EMI plans for your perfect ride."
                : "আপনার উপযুক্ত গাড়ির জন্য এক্সক্লুসিভ গাড়ি এবং নমনীয় ইএমআই পরিকল্পনা আবিষ্কার করুন।"}
            </motion.p>

            {/* Search Box */}
            <motion.div
              className="flex gap-2 max-w-xs mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <input
                type="text"
                placeholder={
                  language === "EN"
                    ? "Search car model..."
                    : "গাড়ির মডেল খুঁজুন..."
                }
                className="flex-1 px-4 py-2 text-white rounded-l-md outline-none border border-gray-300 focus:ring-2 focus:ring-red-600"
              />
              <button className="bg-red-600 text-white px-3 py-1.5 rounded-md font-semibold hover:bg-red-700 transition">
                {language === "EN" ? "Search" : "খুঁজুন"}
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


export default LoanMobileHero;