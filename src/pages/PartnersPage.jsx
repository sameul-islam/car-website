import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import Partner1 from "../assets/pageImage/img (15).jpg";
import Partner2 from "../assets/pageImage/img (17).jpg";
import Partner3 from "../assets/pageImage/img (13).jpg";
import Partner4 from "../assets/pageImage/img (14).jpg";
import Partner5 from "../assets/pageImage/img (18).jpg";
import Partner6 from "../assets/pageImage/img (12).jpg";

const PartnersPage = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    EN: {
      heroTitle: "Our Trusted Partners",
      heroSubtitle:
        "We are proud to collaborate with world-class organizations that share our commitment to innovation, trust, and excellence.",
      sectionTitle: "Meet Our Partners",
      sectionSubtitle:
        "Together with our partners, we create value, deliver excellence, and shape the future of the automotive industry.",
    },
    BN: {
      heroTitle: "আমাদের বিশ্বস্ত পার্টনাররা",
      heroSubtitle:
        "আমরা গর্বিত বিশ্বমানের প্রতিষ্ঠানগুলোর সাথে কাজ করতে যারা উদ্ভাবন, বিশ্বাস এবং উৎকৃষ্টতায় আমাদের অঙ্গীকারকে শেয়ার করে।",
      sectionTitle: "আমাদের পার্টনারদের সাথে পরিচিত হোন",
      sectionSubtitle:
        "আমাদের পার্টনারদের সাথে একত্রে আমরা মূল্য সৃষ্টি করি, উৎকর্ষতা প্রদান করি এবং অটোমোটিভ শিল্পের ভবিষ্যৎ তৈরি করি।",
    },
  };

  const partners = [
    { nameEN: "AutoWorld Inc.", nameBN: "অটোওয়ার্ল্ড ইনক.", img: Partner1 },
    { nameEN: "Prime Motors", nameBN: "প্রাইম মোটরস", img: Partner2 },
    { nameEN: "Luxury Drive", nameBN: "লাক্সারি ড্রাইভ", img: Partner3 },
    { nameEN: "Elite Cars", nameBN: "এলিট কারস", img: Partner4 },
    { nameEN: "Speedster Ltd.", nameBN: "স্পিডস্টার লিমিটেড", img: Partner5 },
    { nameEN: "Future Mobility", nameBN: "ফিউচার মোবিলিটি", img: Partner6 },
  ];

  return (
    <div className="w-[98%] mt-24 m-auto my-20 md:w-[82%]">
      {/* Hero Section */}
      <div className="relative w-full h-[280px] md:h-[450px] bg-gradient-to-r from-[#192a56] to-[#273c75] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {texts[language].heroTitle}
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-3xl">
          {texts[language].heroSubtitle}
        </p>
      </div>

      {/* Partners Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {texts[language].sectionTitle}
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            {texts[language].sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition duration-300"
            >
              <img
                src={partner.img}
                alt={language === "EN" ? partner.nameEN : partner.nameBN}
                className="w-28 h-28 object-contain mb-4"
              />
              <p className="font-semibold text-gray-800 text-center">
                {language === "EN" ? partner.nameEN : partner.nameBN}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
