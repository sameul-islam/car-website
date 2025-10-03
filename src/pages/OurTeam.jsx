import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


import HeroImage from "../assets/pageImage/team (1).jpg";
import Team1 from "../assets/pageImage/team (2).jpg";
import Team2 from "../assets/pageImage/team (3).jpg";
import Team3 from "../assets/pageImage/team (4).jpg";
import Team4 from "../assets/pageImage/team (5).jpg";



const OurTeam = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    hero: {
      EN: {
        title: "Meet Our Dedicated Team",
        subtitle:
          "Our passionate professionals drive innovation and excellence in every project.",
      },
      BN: {
        title: "আমাদের নিবেদিত টিমের সাথে পরিচিত হন",
        subtitle:
          "আমাদের নিবেদিতপ্রাণ টিম প্রতিটি প্রজেক্টে আনে নতুনত্ব এবং উৎকর্ষতা।",
      },
    },
    sectionTitle: {
      EN: "Our Team Members",
      BN: "আমাদের টিম মেম্বাররা",
    },
  };

  const teamMembers = [
    {
      id: 1,
      name: { EN: "John Smith", BN: "জন স্মিথ" },
      role: { EN: "Founder & CEO", BN: "প্রতিষ্ঠাতা ও সিইও" },
      img: Team1,
    },
    {
      id: 2,
      name: { EN: "Sarah Johnson", BN: "সারাহ জনসন" },
      role: { EN: "Marketing Head", BN: "মার্কেটিং প্রধান" },
      img: Team2,
    },
    {
      id: 3,
      name: { EN: "David Lee", BN: "ডেভিড লি" },
      role: { EN: "Lead Engineer", BN: "লিড ইঞ্জিনিয়ার" },
      img: Team3,
    },
    {
      id: 4,
      name: { EN: "Emily Davis", BN: "এমিলি ডেভিস" },
      role: { EN: "Customer Support", BN: "কাস্টমার সাপোর্ট" },
      img: Team4,
    },
  ];

  return (
    <div className="my-16 m-auto w-[98%] md:w-[82%]">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src={HeroImage}
          alt="Our Team"
          className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-opacity-40 flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {texts.hero[language].title}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-200">
              {texts.hero[language].subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 px-4 md:px-12 lg:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          {texts.sectionTitle[language]}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name[language]}
                  className="w-full h-72 object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href="#"
                    className="text-white text-lg bg-gray-700 p-2 rounded-full hover:bg-blue-600"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg bg-gray-700 p-2 rounded-full hover:bg-sky-500"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg bg-gray-700 p-2 rounded-full hover:bg-blue-700"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name[language]}
                </h3>
                <p className="text-gray-500">{member.role[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
