import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";

import HeroImage from "../assets/pageImage/img (12).jpg";
import MissionImage from "../assets/pageImage/img (3).jpg";
import VisionImage from "../assets/pageImage/img (2).jpg";
import TeamImage1 from "../assets/pageImage/img (5).jpg";
import TeamImage2 from "../assets/pageImage/img (6).jpg";
import TeamImage3 from "../assets/pageImage/img (9).jpg";
import TeamImage4 from "../assets/pageImage/img (10).jpg"; 
import HistoryImage from "../assets/pageImage/img (11).jpg";
import ValuesImage from "../assets/pageImage/img (22).jpg";
import Showcase1 from "../assets/pageImage/img (12).jpg"; 
import Showcase2 from "../assets/pageImage/img (13).jpg"; 
import { Link } from "react-router-dom";

const AboutUs = () => {
  const { language } = useContext(LanguageContext);

      useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  const texts = {
    hero: {
      EN: {
        title: "About AmazingDeals",
        subtitle:
          "We deliver premium cars with trusted deals, exceptional service, and a one-stop experience for every automotive need.",
      },
      BN: {
        title: "অ্যামেজিংডিল সম্পর্কে",
        subtitle:
          "আমরা প্রিমিয়াম গাড়ি, বিশ্বস্ত ডিল এবং অসাধারণ সেবা দিয়ে এক-স্টপ অটো অভিজ্ঞতা প্রদান করি।",
      },
    },
    sections: {
      EN: {
        mission: {
          title: "Our Mission",
          description: `At AmazingDeals, our mission is to redefine the car buying experience by providing unparalleled service, transparent pricing, and an extensive range of premium vehicles. We strive to make every transaction smooth, enjoyable, and trustworthy for our customers.`,
        },
        vision: {
          title: "Our Vision",
          description: `We envision a future where AmazingDeals becomes the most trusted platform for car enthusiasts, offering a seamless, all-in-one solution for purchasing, renting, and maintaining premium cars.`,
        },
        history: {
          title: "Our Journey",
          description: `Founded in 2010, AmazingDeals started as a small dealership with a vision to serve car lovers with integrity and excellence. Over the past decade, we have expanded nationwide, partnered with leading automotive brands, and earned the trust of thousands of satisfied customers.`,
        },
        values: {
          title: "Core Values",
          description: `Integrity, Transparency, Customer Satisfaction, Innovation, and Excellence are the pillars of our operations. We believe that every interaction should reflect our commitment to these values.`,
        },
        team: {
          title: "Meet Our Team",
          description: `Our team is composed of automotive experts, service specialists, and passionate professionals committed to delivering the best customer experience. Each member brings unique expertise and dedication to every interaction.`,
        },
        testimonials: {
          title: "What Our Clients Say",
          clients: [
            {
              name: "John Doe",
              feedback: "AmazingDeals made buying my dream car a hassle-free experience. Highly recommend!",
            },
            {
              name: "Sarah Khan",
              feedback: "Excellent service and trustworthy deals. The team is extremely knowledgeable and helpful.",
            },
          ],
        },
        cta: {
          title: "Ready to Explore Premium Cars?",
          button: "View Our Inventory",
        },
      },
      BN: {
        mission: {
          title: "আমাদের লক্ষ্য",
          description: `অ্যামেজিংডিলের লক্ষ্য হল অসাধারণ সেবা, স্বচ্ছ দাম, এবং প্রিমিয়াম গাড়ির বিস্তৃত পরিসর দিয়ে কার কেনার অভিজ্ঞতাকে পুনঃসংজ্ঞায়িত করা। আমরা চাই প্রতিটি লেনদেন সহজ, আনন্দদায়ক এবং বিশ্বাসযোগ্য হোক।`,
        },
        vision: {
          title: "আমাদের দৃষ্টি",
          description: `আমরা এমন একটি ভবিষ্যৎ কল্পনা করি যেখানে অ্যামেজিংডিল সবচেয়ে বিশ্বাসযোগ্য প্ল্যাটফর্ম হয়ে উঠবে, যা প্রিমিয়াম গাড়ি কেনা, ভাড়া নেওয়া এবং রক্ষণাবেক্ষণের জন্য একটি সমন্বিত সমাধান প্রদান করবে।`,
        },
        history: {
          title: "আমাদের যাত্রা",
          description: `২০১০ সালে প্রতিষ্ঠিত, অ্যামেজিংডিল শুরু হয়েছিল একটি ছোট ডিলারশিপ হিসেবে, যেখানে সৎ ও উৎকৃষ্ট মানের সেবা দেওয়ার লক্ষ্য ছিল। গত দশকে, আমরা জাতীয়ভাবে সম্প্রসারিত হয়েছি, শীর্ষস্থানীয় অটোমোটিভ ব্র্যান্ডের সঙ্গে অংশীদারিত্ব করেছি, এবং হাজার হাজার সন্তুষ্ট গ্রাহকের বিশ্বাস অর্জন করেছি।`,
        },
        values: {
          title: "মূল মূল্যবোধ",
          description: `সততা, স্বচ্ছতা, গ্রাহক সন্তুষ্টি, উদ্ভাবন, এবং উৎকৃষ্টতা আমাদের মূল ভিত্তি। আমরা বিশ্বাস করি প্রতিটি যোগাযোগে আমাদের এই মানগুলো প্রতিফলিত হওয়া উচিত।`,
        },
        team: {
          title: "আমাদের দল",
          description: `আমাদের দল গাড়ি বিশেষজ্ঞ, সার্ভিস স্পেশালিস্ট এবং উৎসাহী পেশাদারদের নিয়ে গঠিত, যারা সেরা গ্রাহক অভিজ্ঞতা প্রদান করতে প্রতিশ্রুতিবদ্ধ। প্রতিটি সদস্য তার অনন্য দক্ষতা এবং উত্সাহ নিয়ে কাজ করে।`,
        },
        testimonials: {
          title: "গ্রাহকদের মন্তব্য",
          clients: [
            {
              name: "জন ডো",
              feedback: "অ্যামেজিংডিল আমার স্বপ্নের গাড়ি কেনা সহজ করে দিয়েছে। অত্যন্ত সুপারিশযোগ্য!",
            },
            {
              name: "সারা খান",
              feedback: "চমৎকার সেবা এবং বিশ্বাসযোগ্য ডিল। দলটি অত্যন্ত জ্ঞানী এবং সহায়ক।",
            },
          ],
        },
        cta: {
          title: "প্রিমিয়াম গাড়ি অন্বেষণ করতে প্রস্তুত?",
          button: "আমাদের ইনভেন্টরি দেখুন",
        },
      },
    },
  };

  return (
    <div className="w-[98%] md:w-[82%] m-auto my-16">
      {/* Hero Section */}
{/* Hero Section */}
<div className="relative w-full mb-10">
  {/* Hero Image */}
  <img
    src={HeroImage}
    alt="Hero"
    className="w-full h-[450px] md:h-[600px] lg:h-[700px] object-cover"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50  bg-opacity-30 flex items-center justify-center">
    <div className="p-6 md:p-12 rounded-md text-center max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {texts.hero[language].title}
      </h1>
      <p className="text-lg md:text-2xl text-gray-200">
        {texts.hero[language].subtitle}
      </p>
    </div>
  </div>
</div>


      <div className="max-w-6xl mx-auto px-4 lg:px-0 space-y-20">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={MissionImage}
            alt="Mission"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">{texts.sections[language].mission.title}</h2>
            <p className="text-gray-700 text-lg">{texts.sections[language].mission.description}</p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src={VisionImage}
            alt="Vision"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">{texts.sections[language].vision.title}</h2>
            <p className="text-gray-700 text-lg">{texts.sections[language].vision.description}</p>
          </div>
        </div>

        {/* Showcase Additional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img src={Showcase1} alt="Showcase Car" className="w-full rounded-lg shadow-lg" />
          <img src={Showcase2} alt="Showcase Car" className="w-full rounded-lg shadow-lg" />
        </div>

        {/* History */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={HistoryImage}
            alt="History"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">{texts.sections[language].history.title}</h2>
            <p className="text-gray-700 text-lg">{texts.sections[language].history.description}</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src={ValuesImage}
            alt="Values"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">{texts.sections[language].values.title}</h2>
            <p className="text-gray-700 text-lg">{texts.sections[language].values.description}</p>
          </div>
        </div>

        {/* Team */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">{texts.sections[language].team.title}</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg">
            {texts.sections[language].team.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <img src={TeamImage1} alt="Team member" className="w-full rounded-lg shadow-lg" />
            <img src={TeamImage2} alt="Team member" className="w-full rounded-lg shadow-lg" />
            <img src={TeamImage3} alt="Team member" className="w-full rounded-lg shadow-lg" />
            <img src={TeamImage4} alt="Team member" className="w-full rounded-lg shadow-lg" /> {/* নতুন ছবি */}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8 mt-16">
          <h2 className="text-3xl font-semibold text-center">
            {texts.sections[language].testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {texts.sections[language].testimonials.clients.map((client, idx) => (
              <div key={idx} className="bg-gray-100 rounded-lg p-6 shadow-lg">
                <p className="text-gray-800 text-lg mb-4">"{client.feedback}"</p>
                <p className="font-semibold text-gray-900">- {client.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-[#273c75] text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {texts.sections[language].cta.title}
          </h2>
         <Link to='/blog'> <button className="bg-white text-gray-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300">
            {texts.sections[language].cta.button}
          </button> </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
