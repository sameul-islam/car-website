import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

// Import Images
import HeroImage from "../assets/pageImage/img (23).jpg";
import MissionImage from "../assets/pageImage/img (26).jpg";
import VisionImage from "../assets/pageImage/img (21).jpg";
import { Link } from "react-router-dom";

const MissionVision = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    hero: {
      EN: {
        title: "Our Mission & Vision",
        subtitle:
          "We are driven by purpose and guided by values — committed to excellence, innovation, and long-term impact.",
      },
      BN: {
        title: "আমাদের মিশন এবং ভিশন",
        subtitle:
          "আমরা উদ্দেশ্য দ্বারা চালিত এবং মূল্যবোধ দ্বারা পরিচালিত — উৎকর্ষতা, উদ্ভাবন এবং দীর্ঘমেয়াদী প্রভাবের জন্য প্রতিশ্রুতিবদ্ধ।",
      },
    },
    mission: {
      EN: {
        title: "Our Mission",
        description:
          "Our mission is to redefine excellence by empowering customers with transparent solutions, cutting-edge innovation, and unwavering integrity.",
        points: [
          "Deliver seamless customer experiences",
          "Build trust through transparency",
          "Encourage innovation in every process",
          "Create long-term value for stakeholders",
        ],
      },
      BN: {
        title: "আমাদের মিশন",
        description:
          "আমাদের মিশন হল গ্রাহকদের স্বচ্ছ সমাধান, আধুনিক উদ্ভাবন এবং অটল সততার মাধ্যমে উৎকর্ষতাকে পুনঃসংজ্ঞায়িত করা।",
        points: [
          "গ্রাহকদের নিরবিচ্ছিন্ন অভিজ্ঞতা প্রদান",
          "স্বচ্ছতার মাধ্যমে আস্থা তৈরি",
          "প্রতিটি প্রক্রিয়ায় উদ্ভাবনকে উৎসাহিত করা",
          "স্টেকহোল্ডারদের দীর্ঘমেয়াদী মূল্য তৈরি করা",
        ],
      },
    },
    vision: {
      EN: {
        title: "Our Vision",
        description:
          "We envision becoming a global leader by shaping a sustainable future, nurturing talent, and setting new benchmarks in quality and service.",
        points: [
          "Expand to global markets with excellence",
          "Lead the industry with sustainable practices",
          "Empower communities with opportunities",
          "Set benchmarks in service and quality",
        ],
      },
      BN: {
        title: "আমাদের ভিশন",
        description:
          "আমরা এমন একটি ভবিষ্যৎ কল্পনা করি যেখানে আমরা একটি বৈশ্বিক নেতা হবো, টেকসই ভবিষ্যৎ গড়ে তুলব, প্রতিভা লালন করব এবং মান ও সেবায় নতুন মানদণ্ড স্থাপন করব।",
        points: [
          "বৈশ্বিক বাজারে উৎকর্ষতা নিয়ে সম্প্রসারণ",
          "টেকসই প্র্যাকটিস দ্বারা শিল্পে নেতৃত্ব",
          "সম্প্রদায়কে সুযোগ দিয়ে শক্তিশালী করা",
          "সেবা ও মানে নতুন মানদণ্ড স্থাপন",
        ],
      },
    },
    highlights: {
      EN: [
        { title: "Integrity", text: "We act with honesty and uphold the highest ethical standards." },
        { title: "Innovation", text: "We continuously explore new ideas to deliver better solutions." },
        { title: "Sustainability", text: "We care for the planet and build practices that endure." },
        { title: "Excellence", text: "We aim for perfection in every detail of our work." },
      ],
      BN: [
        { title: "সততা", text: "আমরা সততার সাথে কাজ করি এবং সর্বোচ্চ নৈতিক মান বজায় রাখি।" },
        { title: "উদ্ভাবন", text: "আমরা সর্বদা নতুন ধারণা অনুসন্ধান করি এবং উন্নত সমাধান প্রদান করি।" },
        { title: "টেকসইতা", text: "আমরা পৃথিবীর যত্ন করি এবং দীর্ঘস্থায়ী প্র্যাকটিস তৈরি করি।" },
        { title: "উৎকর্ষতা", text: "আমরা আমাদের প্রতিটি কাজে নিখুঁততা অর্জনের চেষ্টা করি।" },
      ],
    },
    cta: {
      EN: {
        title: "Join Us in Building a Better Future",
        button: "Get Involved",
      },
      BN: {
        title: "একটি উন্নত ভবিষ্যৎ গড়ার যাত্রায় আমাদের সাথে থাকুন",
        button: "যোগ দিন",
      },
    },
  };

  return (
    <div className="w-[98%] md:w-[82%] m-auto my-16">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={HeroImage}
          alt="Mission Vision"
          className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {texts.hero[language].title}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-200">
              {texts.hero[language].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
        <img
          src={MissionImage}
          alt="Mission"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">{texts.mission[language].title}</h2>
          <p className="text-gray-700 text-lg mb-6">{texts.mission[language].description}</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {texts.mission[language].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-12 lg:px-20 flex flex-col md:flex-row-reverse items-center gap-10">
        <img
          src={VisionImage}
          alt="Vision"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">{texts.vision[language].title}</h2>
          <p className="text-gray-700 text-lg mb-6">{texts.vision[language].description}</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            {texts.vision[language].points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-gray-100 py-16 px-4 md:px-12 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {language === "EN" ? "Core Highlights" : "মূল বৈশিষ্ট্য"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {texts.highlights[language].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-gray-700 text-white rounded-lg p-12 text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {texts.cta[language].title}
        </h2>
       <Link to='/blog'> <button className="bg-white text-[#40739e] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
          {texts.cta[language].button}
        </button> </Link>
      </div>
    </div>
  );
};

export default MissionVision;
