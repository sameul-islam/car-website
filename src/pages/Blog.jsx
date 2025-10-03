
import React, { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";


import HeroImage from "../assets/pageImage/img (20).jpg";
import FeaturedImage1 from "../assets/pageImage/img (2).jpg";

import PostImg1 from "../assets/pageImage/img (3).jpg";
import PostImg2 from "../assets/pageImage/img (4).jpg";
import PostImg3 from "../assets/pageImage/img (5).jpg";
import PostImg4 from "../assets/pageImage/img (6).jpg";
import PostImg5 from "../assets/pageImage/img (7).jpg";
import PostImg6 from "../assets/pageImage/img (8).jpg";
import PostImg7 from "../assets/pageImage/img (9).jpg";
import PostImg8 from "../assets/pageImage/img (10).jpg";
import PostImg9 from "../assets/pageImage/img (11).jpg";
import PostImg10 from "../assets/pageImage/img (12).jpg";
import Author1 from "../assets/pageImage/Author (1).jpg";
import Author2 from "../assets/pageImage/Author (2).jpg";



const Blog = () => {
  const { language } = useContext(LanguageContext); 
  const langKey = language === "EN" ? "en" : "bn";


  const posts = [
    {
      id: "p1",
      title: { en: "Why Electric Cars Are Redefining Performance", bn: "কেন ইলেকট্রিক গাড়ি পারফরম্যান্সকে পুনঃসংজ্ঞায়িত করছে" },
      excerpt: {
        en: "Electric drivetrains deliver instant torque and lower center of gravity — learn how manufacturers tune them for supercar-level dynamics.",
        bn: "ইলেকট্রিক ড্রাইভট্রেন মুহূর্তেই টর্ক দেয় এবং লোয়ার সেন্টার অব গ্র্যাভিটি তৈরি করে — জানো কিভাবে নির্মাতারা সেটাকে সুপারকার-লেভেল গতিশীলতার জন্য টিউন করে।"
      },
      date: "2025-07-10",
      author: { name: "James Carter", avatar: Author1 },
      category: "Technology",
      tags: ["Electric", "Performance", "Future"],
      img: FeaturedImage1,
      featured: true,
      readTime: "7 min"
    },
    {
      id: "p2",
      title: { en: "Top 10 Maintenance Tips to Keep Your Car Mint", bn: "তোমার গাড়িকে টিকিয়ে রাখার শীর্ষ ১০ টিপস" },
      excerpt: {
        en: "Preventive maintenance saves money — routine checks, fluid schedules, and seasonal care explained with practical steps.",
        bn: "প্রিভেনটিভ মেইনটেনেন্স টাকা বাঁচায় — রুটিন চেক, ফ্লুইড শিডিউল এবং সিজনাল কেয়ার প্রকট ধাপে ব্যাখ্যা করা হয়েছে।"
      },
      date: "2025-05-22",
      author: { name: "Sara Ahmed", avatar: Author2 },
      category: "Maintenance",
      tags: ["Care", "DIY"],
      img: PostImg1,
      featured: false,
      readTime: "5 min"
    },
    {
      id: "p3",
      title: { en: "How to Choose the Perfect Family SUV", bn: "সঠিক পারিবারিক SUV কিভাবে বাছবেন" },
      excerpt: {
        en: "Safety, space, and economy: a practical guide to choosing an SUV that fits your family and budget.",
        bn: "নিরাপত্তা, স্থান এবং অর্থনীতি: এমন একটি গাইড যা তোমার পরিবার ও বাজেটে খাপ খায় এমন SUV বেছে নিতে সাহায্য করবে।"
      },
      date: "2025-02-12",
      author: { name: "Rafiq Islam", avatar: Author1 },
      category: "Buying Guide",
      tags: ["SUV", "Family"],
      img: PostImg2,
      featured: false,
      readTime: "6 min"
    },
    {
      id: "p4",
      title: { en: "The Rise of Certified Pre-Owned Cars", bn: "সার্টিফায়েড প্রি-ওনড গাড়ির উত্থান" },
      excerpt: {
        en: "Certified pre-owned programs reduce risk — what paperwork to check and what warranties really mean.",
        bn: "সার্টিফায়েড প্রি-ওনড প্রোগ্রাম ঝুঁকি কমায় — কোন কাগজপত্র দেখতে হবে এবং ওয়ারেন্টি আসলে কী বোঝায়।"
      },
      date: "2025-01-04",
      author: { name: "Lina Rahman", avatar: Author2 },
      category: "Market",
      tags: ["CPO", "Value"],
      img: PostImg3,
      featured: true,
      readTime: "8 min"
    },
    {
      id: "p5",
      title: { en: "Buying vs Leasing — Which Is Right for You?", bn: "কেনা বনাম লিজিং — কোনটা তোমার জন্য সঠিক?" },
      excerpt: {
        en: "A numbers-first approach to decide whether buying or leasing makes more financial sense for your lifestyle.",
        bn: "সংখ্যা-ভিত্তিক দৃষ্টিভঙ্গি: কেনা না লিজিং — কোনটি তোমার জীবনের জন্য আর্থিকভাবে বেশি যুক্তিযুক্ত।"
      },
      date: "2024-11-15",
      author: { name: "Arman Hossain", avatar: Author1 },
      category: "Finance",
      tags: ["Leasing", "Buying"],
      img: PostImg4,
      featured: false,
      readTime: "6 min"
    },
    {
      id: "p6",
      title: { en: "Top 7 Safety Features to Look For in 2025", bn: "২০২৫-এ যে ৭টি নিরাপত্তা ফিচার দেখতে হবে" },
      excerpt: {
        en: "ADAS, lane assistants, and passive safety — check the features that matter in real world driving.",
        bn: "ADAS, লেন অ্যাসিস্ট, এবং প্যাসিভ নিরাপত্তা — বাস্তব চালনায় কোন ফিচারগুলো প্রকৃতপক্ষে গুরুত্বপূর্ণ তা দেখো।"
      },
      date: "2025-03-03",
      author: { name: "Nadia Karim", avatar: Author2 },
      category: "Safety",
      tags: ["Safety", "ADAS"],
      img: PostImg5,
      featured: false,
      readTime: "7 min"
    },
    {
      id: "p7",
      title: { en: "Guide to Selling Your Car Fast and Fair", bn: "তোমার গাড়ি দ্রুত ও ন্যায্যভাবে বিক্রির গাইড" },
      excerpt: {
        en: "Pricing strategy, photos, and negotiation tips to sell your car in days, not months.",
        bn: "মূল্য নির্ধারণ, ছবি, এবং দরদাম টিপস — গাড়ি পেতে দিনগুলিতেই বিক্রি করবেন, মাস নয়।"
      },
      date: "2024-10-01",
      author: { name: "Tariq Rahman", avatar: Author1 },
      category: "Selling",
      tags: ["Selling", "Photos"],
      img: PostImg6,
      featured: false,
      readTime: "4 min"
    },
    {
      id: "p8",
      title: { en: "Electric vs Hybrid: Cost & Real Range Comparison", bn: "ইলেকট্রিক বনাম হাইব্রিড: খরচ ও রেঞ্জ তুলনা" },
      excerpt: {
        en: "A practical fuel-cost, charging and range comparison between modern electric and hybrid models.",
        bn: "আধুনিক ইলেকট্রিক এবং হাইব্রিড মডেলগুলোর খরচ, চার্জিং ও রেঞ্জের ব্যবহারিক তুলনা।"
      },
      date: "2025-06-02",
      author: { name: "Farzana Begum", avatar: Author2 },
      category: "Technology",
      tags: ["Electric", "Hybrid"],
      img: PostImg7,
      featured: true,
      readTime: "9 min"
    },
    {
      id: "p9",
      title: { en: "Preparing Your Car for Monsoon: Checklist", bn: "বৃষ্টির মৌসুমে গাড়ি প্রস্তুত করার চেকলিস্ট" },
      excerpt: {
        en: "Tyres, wipers, and drainage checks that prevent water damage and keep you safe on wet roads.",
        bn: "টায়ার, উইপার, এবং ড্রেনেজ চেকগুলো যা পানি ক্ষতি প্রতিরোধ করে এবং ভিজা রাস্তায় নিরাপদ রাখে।"
      },
      date: "2024-08-20",
      author: { name: "Rumana Akter", avatar: Author1 },
      category: "Maintenance",
      tags: ["Monsoon", "Checklist"],
      img: PostImg8,
      featured: false,
      readTime: "5 min"
    },
    {
      id: "p10",
      title: { en: "How AI Is Changing Car Buying Experience", bn: "কিভাবে AI গাড়ি কেনার অভিজ্ঞতা বদলাচ্ছে" },
      excerpt: {
        en: "From personalized recommendations to automated valuations — AI is powering smarter purchases.",
        bn: "পার্সোনালাইজড রিকমেন্ডেশন থেকে অটোমেটেড ভ্যালুয়েশন — AI স্মার্ট কেনাকাটাকে চালিত করছে।"
      },
      date: "2025-04-15",
      author: { name: "Khaled Mustafa", avatar: Author2 },
      category: "Technology",
      tags: ["AI", "UX"],
      img: PostImg9,
      featured: false,
      readTime: "8 min"
    },
    {
      id: "p11",
      title: { en: "Best Compact Cars for City Driving", bn: "শহুরে ড্রাইভিংয়ের জন্য সেরা কম্প্যাক্ট গাড়ি" },
      excerpt: {
        en: "Small footprint, easy parking and efficient fuel consumption — compact cars we recommend for city life.",
        bn: "ছোট পরিধি, সহজ পার্কিং এবং দক্ষ ইন্ধন খরচ — শহরের জন্য আমাদের সুপারিশকৃত কম্প্যাক্ট গাড়িগুলো।"
      },
      date: "2024-09-05",
      author: { name: "Shafin Ali", avatar: Author1 },
      category: "Buying Guide",
      tags: ["Compact", "City"],
      img: PostImg10,
      featured: false,
      readTime: "6 min"
    },
    {
      id: "p12",
      title: { en: "Understanding Depreciation: Maximize Resale Value", bn: "ডিপ্রিসিয়েশন বুঝুন: রিসেল ভ্যালু সর্বাধিক করুন" },
      excerpt: {
        en: "Which brands hold value, maintenance that pays off, and timing your sale for the highest return.",
        bn: "কোন ব্র্যান্ড ভ্যালু ধরে রাখে, কোন রক্ষণাবেক্ষণ ফল দেয়, এবং সর্বোচ্চ আয় পেতে কখন বিক্রি করবেন।"
      },
      date: "2024-07-18",
      author: { name: "Morshed Khan", avatar: Author2 },
      category: "Market",
      tags: ["Depreciation", "Value"],
      img: PostImg1,
      featured: false,
      readTime: "7 min"
    }
  ];

  const allCategories = useMemo(() => {
    const set = new Set();
    posts.forEach(p => set.add(p.category));
    return Array.from(set);
  }, [posts]);

  const allTags = useMemo(() => {
    const set = new Set();
    posts.forEach(p => p.tags.forEach(t => set.add(t)));
    return Array.from(set);
  }, [posts]);


  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [tag, setTag] = useState(null);
  const [sort, setSort] = useState("newest"); 
  const [visible, setVisible] = useState(6);


  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString(language === "EN" ? "en-US" : "bn-BD", {
      year: "numeric", month: "short", day: "numeric"
    });
  };


  const filtered = posts
    .filter(p => {
    
      const hay = `${p.title[langKey]} ${p.excerpt[langKey]}`.toLowerCase();
      if (query.trim()) {
        if (!hay.includes(query.trim().toLowerCase())) return false;
      }
      if (category !== "All" && p.category !== category) return false;
      if (tag && !p.tags.includes(tag)) return false;
      return true;
    })
    .sort((a,b) => {
      if (sort === "newest") return new Date(b.date) - new Date(a.date);
      return new Date(a.date) - new Date(b.date);
    });


  const featuredPosts = filtered.filter(p => p.featured);
  const regularPosts = filtered.filter(p => !p.featured);


  return (
    <main className="w-[98%] md:w-[82%] m-auto my-16 mt-30 bg-white text-gray-900">
      {/* HERO */}
      <header className="relative w-full">
        <img src={HeroImage} alt="Blog hero" className="w-full h-[260px] md:h-[700px] object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/25 flex items-center">
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <div className="text-white md:max-w-2xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {language === "EN" ? "Insights & Stories from the Automotive World" : "অটোমোটিভ জগতের ইনসাইট ও গল্পসমূহ"}
              </h1>
              <p className="mt-3 text-sm md:text-lg text-gray-100/90">
                {language === "EN" ? "Deep dives, expert guides and news — curated for car lovers and buyers." : "ডিপ-ডাইভ, বিশেষজ্ঞ গাইড ও সংবাদ — গাড়ি প্রেমিক ও ক্রেতাদের জন্য সিলেক্ট করা।"}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: content (span 2 on desktop) */}
        <section className="lg:col-span-2 space-y-8">
          {/* Controls: search, category, tags, sort */}
          <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">Search</label>
              <input
                id="search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={language === "EN" ? "Search articles, topics or keywords..." : "আর্টিকেল, টপিক বা কীওয়ার্ড অনুসন্ধান করুন..."}
                className="w-full md:w-[420px] px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div className="flex gap-3 items-center flex-wrap">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg"
                aria-label="Filter by category"
              >
                <option value="All">{language === "EN" ? "All Categories" : "সকল ক্যাটেগরি"}</option>
                {allCategories.map((c) => <option value={c} key={c}>{c}</option>)}
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg"
                aria-label="Sort posts"
              >
                <option value="newest">{language === "EN" ? "Newest" : "নতুনতম"}</option>
                <option value="oldest">{language === "EN" ? "Oldest" : "সবচেয়ে পুরানো"}</option>
              </select>
            </div>
          </div>

          {/* Featured posts (if any) */}
          {featuredPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.slice(0,2).map((post) => (
                <article key={post.id} className="relative rounded-lg overflow-hidden shadow-lg">
                  <img src={post.img} alt={post.title[langKey]} className="w-full h-56 md:h-64 object-cover" loading="lazy" />
                  <div className="p-6 bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 left-0 right-0 text-white">
                    <p className="text-sm text-orange-300 font-medium">{post.category} • {formatDate(post.date)} • {post.readTime}</p>
                    <h3 className="mt-2 text-xl font-bold">{post.title[langKey]}</h3>
                    <p className="mt-2 text-sm text-gray-100/90 line-clamp-2">{post.excerpt[langKey]}</p>
                    <div className="mt-4">
                      <a href={`#/posts/${post.id}`} className="inline-block bg-orange-500/90 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
                        {language === "EN" ? "Read article" : "আর্টিকেল পড়ুন"}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Posts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {regularPosts.slice(0, visible).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img src={post.img} alt={post.title[langKey]} className="w-full h-40 object-cover" loading="lazy" />
                  </div>
                  <div className="p-4 md:w-2/3 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-orange-500 font-semibold">{post.category} • {formatDate(post.date)}</p>
                      <h4 className="mt-2 text-lg font-semibold">{post.title[langKey]}</h4>
                      <p className="mt-2 text-gray-600 text-sm italic">{post.excerpt[langKey]}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={post.author.avatar} alt={post.author.name} className="w-9 h-9 rounded-full object-cover" loading="lazy" />
                        <div>
                          <p className="text-sm font-medium">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{post.readTime}</p>
                        </div>
                      </div>
                      <a href={`#/posts/${post.id}`} className="text-orange-500 font-semibold text-sm">
                        {language === "EN" ? "Read more" : "বিস্তারিত পড়ুন"}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-6">
            {visible < regularPosts.length ? (
              <button
                onClick={() => setVisible((v) => Math.min(v + 6, regularPosts.length))}
                className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              >
                {language === "EN" ? "Load more posts" : "আরও পোস্ট দেখুন"}
              </button>
            ) : (
              <p className="text-sm text-gray-500 italic">{language === "EN" ? "No more posts" : "আর কোনো পোস্ট নেই"}</p>
            )}
          </div>
        </section>

        {/* RIGHT: sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            {/* About / Newsletter */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">{language === "EN" ? "About this blog" : "এই ব্লগ সম্পর্কে"}</h4>
              <p className="text-sm text-gray-600">
                {language === "EN"
                  ? "Expert articles, real-world tests, and practical guides to help you buy, maintain and enjoy cars."
                  : "বিশেষজ্ঞ আর্টিকেল, বাস্তব-ভিত্তিক টেস্ট এবং ব্যবহারিক গাইড যা আপনাকে গাড়ি কেনা, রক্ষণাবেক্ষণ ও উপভোগ করতে সাহায্য করবে।"}
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3">{language === "EN" ? "Categories" : "ক্যাটেগরি"}</h4>
              <ul className="flex flex-wrap gap-2">
                <li>
                  <button onClick={() => { setCategory("All"); setTag(null); }} className={`px-3 py-1 rounded-full text-sm ${category === "All" ? "bg-orange-500 text-white" : "bg-gray-100"}`}>
                    {language === "EN" ? "All" : "সব"}
                  </button>
                </li>
                {allCategories.map((c) => (
                  <li key={c}>
                    <button onClick={() => { setCategory(c); setTag(null); }} className={`px-3 py-1 rounded-full text-sm ${category === c ? "bg-orange-500 text-white" : "bg-gray-100"}`}>
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3">{language === "EN" ? "Popular Tags" : "জনপ্রিয় ট্যাগ"}</h4>
              <div className="flex flex-wrap gap-2">
                {allTags.map((t) => (
                  <button
                    key={t}
                    onClick={() => { setTag(tag === t ? null : t); setCategory("All"); }}
                    className={`text-sm px-3 py-1 rounded-full ${tag === t ? "bg-orange-500 text-white" : "bg-gray-100"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent posts */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-3">{language === "EN" ? "Recent Posts" : "সাম্প্রতিক পোস্ট"}</h4>
              <ul className="space-y-3">
                {posts.slice(0,5).map((p) => (
                  <li key={p.id} className="flex items-start gap-3">
                    <img src={p.img} alt={p.title[langKey]} className="w-16 h-12 object-cover rounded-md" loading="lazy"/>
                    <div>
                      <a href={`#/posts/${p.id}`} className="text-sm font-medium">{p.title[langKey]}</a>
                      <p className="text-xs text-gray-500">{formatDate(p.date)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter mini */}
            <div className="bg-gray-600  text-white p-5 rounded-lg shadow-lg">
              <h4 className="font-semibold mb-2">{language === "EN" ? "Get weekly updates" : "সাপ্তাহিক আপডেট পান"}</h4>
              <p className="text-sm mb-4">{language === "EN" ? "Exclusive deals, new articles and market insights." : "এক্সক্লুসিভ ডিল, নতুন আর্টিকেল এবং মার্কেট ইনসাইট।"}</p>
              <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col gap-2">
                <input type="email" required placeholder={language === "EN" ? "Your email" : "তোমার ইমেইল"} className="flex-1 border px-3 py-2 rounded-md text-white"/>
                <button className="px-3 py-2 bg-black bg-opacity-20 rounded-md font-semibold">{language === "EN" ? "Subscribe" : "সাবস্ক্রাইব"}</button>
              </form>
            </div>

          </div>
        </aside>
      </div>
    </main>
  );
};

export default Blog;
