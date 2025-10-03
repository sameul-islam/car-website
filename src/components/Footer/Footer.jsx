import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Facebook, Instagram, Linkedin, Twitter, ChevronDown, Youtube } from "lucide-react";




export default function Footer() {
  const { language } = useContext(LanguageContext);
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [showTooltip, setShowTooltip] = useState(false);

  const texts = {
    tagline: {
      EN: "Premium Cars, Trusted Deals, All in One Place",
      BN: "প্রিমিয়াম গাড়ি, বিশ্বস্ত ডিল, সব এক জায়গায়",
    },
    sections: {
      EN: {
        about: [
          { title: "About Us", link: "/about-us" },
          { title: "Our Team", link: "/our-team" },
          { title: "Mission & Vision", link: "/mission-vision" },
          { title: "Testimonials", link: "/testimonials" },
          { title: "Partners", link: "/partners" },
          { title: "Blog", link: "/blog" },
        ],
        story: [
          { title: "Our Story", link: "/our-story" },
          { title: "Milestones", link: "/milestones" },
          { title: "Achievements", link: "/achievements" },
          { title: "Awards", link: "/awards" },
          { title: "Events", link: "/events" },
        ],
        careers: [
          { title: "Open Positions", link: "/open-positions" },
          { title: "Internships", link: "/internships" },
          { title: "Benefits", link: "/benefits" },
          { title: "Culture", link: "/culture" },
          { title: "Apply Now", link: "/apply" },
        ],
        services: [
          { title: "Car Sales", link: "/car-sales" },
          { title: "Car Rentals", link: "/car-rentals" },
          { title: "Maintenance", link: "/maintenance" },
          { title: "Custom Orders", link: "/custom-orders" },
          { title: "Consulting", link: "/consulting" },
          { title: "Privacy Policy", link: "/privacy-policy" },
          { title: "Terms & Conditions", link: "/terms" },
        ],
      },
      BN: {
        about: [
          { title: "আমাদের সম্পর্কে", link: "/about-us" },
          { title: "আমাদের দল", link: "/our-team" },
          { title: "লক্ষ্য ও দৃষ্টি", link: "/mission-vision" },
          { title: "প্রশংসাপত্র", link: "/testimonials" },
          { title: "সহযোগী", link: "/partners" },
          { title: "ব্লগ", link: "/blog" },
        ],
        story: [
          { title: "আমাদের গল্প", link: "/our-story" },
          { title: "মাইলস্টোন", link: "/milestones" },
          { title: "সাফল্য", link: "/achievements" },
          { title: "পুরস্কার", link: "/awards" },
          { title: "ইভেন্ট", link: "/events" },
        ],
        careers: [
          { title: "ওপেন পজিশন", link: "/open-positions" },
          { title: "ইন্টার্নশিপ", link: "/internships" },
          { title: "সুবিধা", link: "/benefits" },
          { title: "সংস্কৃতি", link: "/culture" },
          { title: "এখন আবেদন করুন", link: "/apply" },
        ],
        services: [
          { title: "গাড়ি বিক্রয়", link: "/car-sales" },
          { title: "গাড়ি ভাড়া", link: "/car-rentals" },
          { title: "রক্ষণাবেক্ষণ", link: "/maintenance" },
          { title: "কাস্টম অর্ডার", link: "/custom-orders" },
          { title: "কনসাল্টিং", link: "/consulting" },
          { title: "গোপনীয়তা নীতি", link: "/privacy-policy" },
          { title: "শর্তাবলী", link: "/terms" },
        ],
      },
    },
    contact: {
      EN: { phone: "+880 1234 567890", address: "Dhaka, Bangladesh" },
      BN: { phone: "+৮৮০ ১২৩৪ ৫৬৭৮৯০", address: "ঢাকা, বাংলাদেশ" },
    },
    social: [
      { icon: <Facebook size={20} />, link: "https://facebook.com" },
      { icon: <Instagram size={20} />, link: "https://instagram.com" },
      { icon: <Youtube size={20} />, link: "https://youtube.com" },
      { icon: <Linkedin size={20} />, link: "https://linkedin.com" },
      { icon: <Twitter size={20} />, link: "https://twitter.com" },
    ],
    appStores: [
      { img: "/appstore.png", link: "https://www.apple.com/app-store/" },
      { img: "/playstore.png", link: "https://play.google.com/store" },
    ],
    legal: {
      EN: "© 2025 AmazingDeals || All rights reserved.",
      BN: "© ২০২৫ অসাধারণডিল || সর্বস্বত্ব সংরক্ষিত।",
    },
    adminTooltip: {
      EN: "This is an Admin-only page. Hidden for normal users. Clients can request to enable or modify it later as per requirements.",
      BN: "এটি শুধুমাত্র অ্যাডমিনের জন্য। সাধারণ ব্যবহারকারীর জন্য লুকানো। ক্লায়েন্ট চাইলে ভবিষ্যতে এটি যুক্ত বা পরিবর্তন করা যাবে।",
    },
  };

  const handleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const sectionKeys = ["about", "story", "careers", "services", "contact"];

  return (
    <footer className="relative w-full bg-gray-800 text-gray-100 pt-16">
      {/* Top border */}
      <div className="w-[82%] mx-auto border-t-2 border-orange-500 mb-10"></div>

      {/* Line 1: Logo + Tagline */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mb-12 px-4 lg:px-0">
        <div className=" flex w-full gap-x-8 justify-between mb-4 sm:mb-0">
          <div className="flex flex-col md:flex-row items-center">
            <a href="/" className="flex flex-col md:flex-row items-center">
              <img src="/logo.png" alt="Logo" className="h-12 mr-4" />
              <span className="font-semibold text-lg text-gray-100">AmazingDeals</span>
            </a>
          </div>
          <p className="text-lg sm:text-xl font-medium text-gray-300">{texts.tagline[language]}</p>
        </div>
      </div>

      {/* Line 2: Sections */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Desktop: grid layout */}
        <div className="hidden md:grid grid-cols-5 gap-8 mb-12">
          {sectionKeys.map((key) => (
            <div key={key}>
              <h4 className="font-semibold text-gray-100 mb-4 text-lg capitalize">
                {key === "contact" ? (language === "EN" ? "Contact" : "যোগাযোগ") : 
                key === "about" ? (language === "EN" ? "About" : "আমাদের সম্পর্কে") :
                key === "story" ? (language === "EN" ? "Story" : "আমাদের গল্প") :
                key === "careers" ? (language === "EN" ? "Careers" : "ক্যারিয়ার্স") :
                key === "services" ? (language === "EN" ? "Services" : "সার্ভিসেস") : ""}
              </h4>
              {key === "contact" ? (
                <div className="text-gray-400 text-sm space-y-2">
                  <p>{texts.contact[language].phone}</p>
                  <p>{texts.contact[language].address}</p>
                </div>
              ) : (
                <ul className="space-y-2 text-gray-400 text-sm">
                  {texts.sections[language][key].map((item, idx) => (
                    <li key={idx} className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: dropdown */}
        <div className="md:hidden mb-12">
          {sectionKeys.map((key) => (
            <div key={key} className="mb-4 border-b border-gray-700">
              <button
                onClick={() => handleDropdown(key)}
                className="w-full flex justify-between items-center py-3 text-gray-200 font-medium"
              >
                {key === "contact" ? (language === "EN" ? "Contact" : "যোগাযোগ") : 
                key === "about" ? (language === "EN" ? "About" : "আমাদের সম্পর্কে") :
                key === "story" ? (language === "EN" ? "Story" : "আমাদের গল্প") :
                key === "careers" ? (language === "EN" ? "Careers" : "ক্যারিয়ার্স") :
                key === "services" ? (language === "EN" ? "Services" : "সার্ভিসেস") : ""}
                <ChevronDown size={20} />
              </button>
              <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openDropdown === key ? "max-h-96 mt-2" : "max-h-0"}`}>
                {key === "contact" ? (
                  <div className="text-gray-400 text-sm space-y-2">
                    <p>{texts.contact[language].phone}</p>
                    <p>{texts.contact[language].address}</p>
                  </div>
                ) : (
                  <ul className="text-gray-400 text-sm space-y-2 pl-4">
                    {texts.sections[language][key].map((item, idx) => (
                      <li key={idx} className="hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                        <a href={item.link}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Line 3: App Stores + Social */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 px-4 lg:px-0 gap-6">
        <div className="flex gap-4">
          {texts.appStores.map((store, idx) => (
            <a key={idx} href={store.link} target="_blank" rel="noopener noreferrer">
              <img src={store.img} alt="Store" className="h-12 object-contain" />
            </a>
          ))}
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          {texts.social.map((s, idx) => (
            <a key={idx} href={s.link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors duration-300">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Line 4: Legal + Admin */}
      <div className=" max-w-7xl justify-center p-5  mx-auto flex flex-col sm:flex-row  items-center border-t border-gray-700 pt-6 px-4 lg:px-0 gap-4 text-gray-400 text-xs sm:text-sm relative">
        <p className="text-center">{texts.legal[language]}</p>

        {/* Admin link */}
        <div 
          className="relative group"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <a href="/admin" className="text-orange-500 font-semibold text-xs sm:text-sm">Admin</a>

          {/* Tooltip for desktop */}
          {showTooltip && (
            <div className="absolute bottom-full mb-2 w-64 bg-gray-800 text-gray-200 text-xs rounded-lg shadow-lg p-3 hidden md:block z-20">
              {texts.adminTooltip[language]}
            </div>
          )}

          {/* Mobile small note */}
          <div className="block md:hidden text-gray-400 text-[11px] mt-1 max-w-xs">
            {texts.adminTooltip[language]}
          </div>
        </div>
      </div>
    </footer>
  );
}
