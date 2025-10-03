// // src/pages/ServicesPage.jsx
// import React from "react";
// import { motion } from "framer-motion";

// /**
//  * ServicesPage
//  * - Responsive, professional services page for a large car e-commerce site.
//  * - TailwindCSS based.
//  * - Uses framer-motion for smooth entrance animations.
//  *
//  * Assets:
//  * - Replace asset imports (heroImg, featureImg1, ...) with your local images inside /src/assets/... or use remote URLs.
//  *
//  * Usage:
//  * - Put this file in src/pages/ServicesPage.jsx and add a route in your router:
//  *     <Route path="/services" element={<ServicesPage/>} />
//  *
//  * Dependencies:
//  * - tailwindcss configured
//  * - framer-motion (npm i framer-motion)
//  */

// import heroImg from '../assets/itemsImage/img (32).jpg'
// import featureImg1 from '../assets/itemsImage/img (27).jpg'
// import featureImg2 from '../assets/itemsImage/img (22).jpg'
// import featureImg3 from '../assets/itemsImage/img (29).jpg'
// import testimonialImg from '../assets/itemsImage/img (26).jpg'

// const FadeUp = ({ children, delay = 0 }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 18 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay }}
//   >
//     {children}
//   </motion.div>
// );

// export default function ServicesPage() {
//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-800">
//       {/* HERO */}
//       <section className="relative bg-white">
//         <div className="container mx-auto px-4 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-10">
//           <div className="w-full lg:w-1/2">
//             <FadeUp>
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
//                 Enterprise-grade Car Marketplace Services
//               </h1>
//             </FadeUp>

//             <FadeUp delay={0.08}>
//               <p className="mt-6 text-gray-600 max-w-2xl">
//                 Scalable listings, advanced search & filters, secure checkout,
//                 financing integrations, logistics & inspection workflows — built
//                 to power marketplaces for thousands of vehicles and millions of users.
//               </p>
//             </FadeUp>

//             <div className="mt-8 flex gap-3 flex-col sm:flex-row">
//               <FadeUp delay={0.12}>
//                 <a
//                   href="#plans"
//                   className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white shadow-md hover:shadow-lg transition"
//                 >
//                   Explore Plans
//                 </a>
//               </FadeUp>

//               <FadeUp delay={0.16}>
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
//                 >
//                   Schedule a Demo
//                 </a>
//               </FadeUp>
//             </div>

//             <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
//               <small className="text-xs text-gray-500">SLA 99.9%</small>
//               <small className="text-xs text-gray-500">PCI & Data Secure</small>
//               <small className="text-xs text-gray-500">24/7 Support</small>
//             </div>
//           </div>

//           <div className="w-full lg:w-1/2">
//             <FadeUp delay={0.2}>
//               <div className="rounded-2xl overflow-hidden shadow-xl">
//                 <img
//                   src={heroImg}
//                   alt="Showcase car"
//                   className="w-full h-64 sm:h-80 lg:h-96 object-cover"
//                   loading="lazy"
//                 />
//               </div>
//             </FadeUp>
//           </div>
//         </div>
//       </section>

//       {/* FEATURE GRID */}
//       <section className="container mx-auto px-4 py-12">
//         <h2 className="text-2xl font-bold">Core Services</h2>
//         <p className="text-gray-600 mt-2 max-w-2xl">
//           Everything you need to run a modern, high-volume car marketplace.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           <ServiceCard
//             img={featureImg1}
//             title="Advanced Search & Filters"
//             desc="Real-time search, autosuggest, fuzzy matching, faceted filters, multi-criteria ranking."
//           />
//           <ServiceCard
//             img={featureImg2}
//             title="Inventory & Listing Management"
//             desc="Bulk import, scheduled publishing, validation, smart categorization and media management."
//           />
//           <ServiceCard
//             img={featureImg3}
//             title="Payments & Financing"
//             desc="Secure payments, escrow, multiple gateways, and integrated loan/EMI workflows with partner APIs."
//           />
//         </div>
//       </section>

//       {/* DETAILS / WHY US */}
//       <section className="bg-white border-t border-b border-gray-100">
//         <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           <div>
//             <h3 className="text-2xl font-bold">Built for scale, designed for trust</h3>
//             <p className="mt-4 text-gray-600">
//               Our architecture has been built to handle high concurrency — millions of product views,
//               thousands of simultaneous searches, and robust background processing for ingestion and verification.
//             </p>

//             <ul className="mt-6 space-y-3">
//               <li className="flex items-start gap-3">
//                 <span className="inline-block mt-1 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</span>
//                 <div>
//                   <strong>Audit & Verification</strong>
//                   <div className="text-sm text-gray-500">Integrated inspection workflows and verified listings badge.</div>
//                 </div>
//               </li>

//               <li className="flex items-start gap-3">
//                 <span className="inline-block mt-1 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">⚙</span>
//                 <div>
//                   <strong>Integrations</strong>
//                   <div className="text-sm text-gray-500">CRM, ERP, analytics, logistics, KYC & payment providers.</div>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <div className="rounded-xl overflow-hidden">
//               <img src={featureImg2} alt="integration" className="w-full h-64 object-cover" loading="lazy" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing / Plans */}
//       <section id="plans" className="container mx-auto px-4 py-12">
//         <h2 className="text-2xl font-bold">Plans & Pricing</h2>
//         <p className="text-gray-600 mt-2 max-w-2xl">
//           Transparent pricing — predictable usage tiers for enterprises.
//         </p>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <PlanCard
//             title="Starter"
//             price="$299 / mo"
//             bullets={[
//               "Up to 1,000 listings",
//               "Basic search & filters",
//               "Standard support"
//             ]}
//           />
//           <PlanCard
//             title="Growth"
//             popular
//             price="$999 / mo"
//             bullets={[
//               "Up to 10,000 listings",
//               "Advanced search & autosuggest",
//               "Priority support & onboarding"
//             ]}
//           />
//           <PlanCard
//             title="Enterprise"
//             price="Custom"
//             bullets={[
//               "Unlimited listings",
//               "SLA, dedicated account, custom integrations",
//               "On-site training & 24/7 support"
//             ]}
//           />
//         </div>
//       </section>

//       {/* Case Studies / Testimonials */}
//       <section className="bg-white border-t border-gray-100">
//         <div className="container mx-auto px-4 py-12">
//           <h2 className="text-2xl font-bold">Trusted by marketplaces</h2>
//           <p className="text-gray-600 mt-2">Real results from enterprise customers.</p>

//           <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Testimonial
//               img={testimonialImg}
//               name="Ayesha Rahman"
//               role="Product Lead — AutoHub"
//               quote="We launched in 6 weeks and scaled to 100k listings in 3 months. Their indexing and search quality is exceptional."
//             />
//             <Testimonial
//               img={testimonialImg}
//               name="Rajesh Kumar"
//               role="CTO — CityCars"
//               quote="Robust platform, excellent support, and integrations saved us months of engineering time."
//             />
//             <Testimonial
//               img={testimonialImg}
//               name="Lina Gomez"
//               role="Operations — RideSpace"
//               quote="Inspection & verification workflow cut down disputes by 70% — flawless execution."
//             />
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="container mx-auto px-4 py-12">
//         <h2 className="text-2xl font-bold">FAQs</h2>
//         <div className="mt-6 grid gap-4">
//           <FAQItem question="Do you handle financing integrations?" answer="Yes — we integrate with third-party financiers and provide EMI workflows & APIs."/>
//           <FAQItem question="Can we host on our cloud?" answer="Yes — deployment options include our managed hosting or customer VPC deployment."/>
//           <FAQItem question="What is onboarding like?" answer="We provide a structured onboarding plan: data migration, training, go-live support, and SLA."/>
//         </div>
//       </section>

//       {/* CTA + Contact form */}
//       <section id="contact" className="bg-black text-white">
//         <div className="container mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div>
//               <h3 className="text-2xl font-bold">Ready to scale?</h3>
//               <p className="mt-3 text-gray-300 max-w-xl">Schedule a demo — we’ll show you how our platform can support your growth and integrations.</p>
//               <ul className="mt-6 space-y-2 text-gray-300">
//                 <li>• SLA-backed uptime</li>
//                 <li>• Enterprise-grade security</li>
//                 <li>• Global CDN & performance</li>
//               </ul>
//             </div>

//             <div className="bg-white rounded-xl p-6 text-black shadow-lg">
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer small note */}
//       <footer className="bg-gray-100">
//         <div className="container mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div>© {new Date().getFullYear()} Your Company — All rights reserved.</div>
//           <div>Terms · Privacy · Support</div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// /* ---------------------- Subcomponents ---------------------- */

// function ServiceCard({ img, title, desc }) {
//   return (
//     <FadeUp>
//       <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
//         <div className="h-44 w-full overflow-hidden">
//           <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover"/>
//         </div>
//         <div className="p-5">
//           <h4 className="font-semibold">{title}</h4>
//           <p className="text-gray-600 mt-2 text-sm">{desc}</p>
//           <a className="mt-4 inline-block text-sm font-medium text-black" href="#contact">Learn more →</a>
//         </div>
//       </article>
//     </FadeUp>
//   );
// }

// function PlanCard({ title, price, bullets = [], popular = false }) {
//   return (
//     <FadeUp>
//       <div className={`rounded-xl border ${popular ? "border-black shadow-xl" : "border-gray-200"} bg-white p-6`}>
//         {popular && <div className="inline-block px-3 py-1 bg-yellow-300 rounded-full text-xs font-semibold mb-3">Popular</div>}
//         <h3 className="text-xl font-bold">{title}</h3>
//         <div className="mt-3 text-2xl font-extrabold">{price}</div>
//         <ul className="mt-4 space-y-2 text-gray-600">
//           {bullets.map((b, i) => <li key={i}>• {b}</li>)}
//         </ul>
//         <button className={`mt-6 w-full py-3 rounded-lg ${popular ? "bg-black text-white" : "bg-gray-100 text-gray-800"}`}>
//           Get Started
//         </button>
//       </div>
//     </FadeUp>
//   );
// }

// function Testimonial({ img, name, role, quote }) {
//   return (
//     <FadeUp>
//       <div className="bg-white rounded-xl shadow-md p-5">
//         <div className="flex items-center gap-4">
//           <img src={img} alt={name} loading="lazy" className="w-12 h-12 rounded-full object-cover"/>
//           <div>
//             <div className="font-semibold">{name}</div>
//             <div className="text-xs text-gray-500">{role}</div>
//           </div>
//         </div>
//         <blockquote className="mt-4 text-gray-700">“{quote}”</blockquote>
//       </div>
//     </FadeUp>
//   );
// }

// function FAQItem({ question, answer }) {
//   const [open, setOpen] = React.useState(false);
//   return (
//     <div className="bg-white rounded-xl p-4 shadow-sm">
//       <button onClick={() => setOpen(s => !s)} className="w-full flex items-center justify-between">
//         <div className="text-left">
//           <div className="font-medium">{question}</div>
//           <div className="text-sm text-gray-500">{open ? "Showing answer" : "Click to view answer"}</div>
//         </div>
//         <div className="text-2xl">{open ? "−" : "+"}</div>
//       </button>
//       {open && <div className="mt-3 text-gray-600">{answer}</div>}
//     </div>
//   );
// }

// function ContactForm() {
//   const [state, setState] = React.useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });
//   const [submitting, setSubmitting] = React.useState(false);
//   const [sent, setSent] = React.useState(false);

//   const onChange = (k) => (e) => setState(s => ({ ...s, [k]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     // FRONTEND ALERT NOTE: we won't call any backend here.
//     // In production you'd POST to your backend endpoint.
//     await new Promise(res => setTimeout(res, 800)); // simulate
//     setSubmitting(false);
//     setSent(true);

//     // Clear fields optionally
//     setState({ name: "", email: "", company: "", message: "" });
//   };

//   return (
//     <>
//       {!sent ? (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             <input required value={state.name} onChange={onChange("name")}
//               placeholder="Full name" className="border rounded-lg px-3 py-2 w-full"/>
//             <input required value={state.email} onChange={onChange("email")}
//               placeholder="Email" type="email" className="border rounded-lg px-3 py-2 w-full"/>
//           </div>

//           <input value={state.company} onChange={onChange("company")} placeholder="Company (optional)" className="border rounded-lg px-3 py-2 w-full"/>
//           <textarea required value={state.message} onChange={onChange("message")} rows={4} placeholder="Tell us briefly what you need" className="border rounded-lg px-3 py-2 w-full"></textarea>

//           <div className="flex items-center gap-3">
//             <button type="submit" disabled={submitting} className="px-5 py-2 rounded-lg bg-black text-white">
//               {submitting ? "Sending..." : "Request Demo"}
//             </button>
//             <div className="text-sm text-gray-500">We will get back to you within one business day.</div>
//           </div>
//         </form>
//       ) : (
//         <div className="text-center py-10">
//           <div className="text-green-600 font-semibold">Thanks — request received!</div>
//           <div className="mt-3 text-gray-600">We'll email you shortly to schedule a demo.</div>
//         </div>
//       )}
//     </>
//   );
// }















import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

import heroImg from '../assets/itemsImage/img (32).jpg'
import featureImg1 from '../assets/itemsImage/img (27).jpg'
import featureImg2 from '../assets/itemsImage/img (22).jpg'
import featureImg3 from '../assets/itemsImage/img (29).jpg'
import testimonialImg from '../assets/itemsImage/img (26).jpg'

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export default function ServicesPage() {
  const { language } = useContext(LanguageContext);

      useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  const texts = {
    heroTitle: language === "EN" ? "Enterprise-grade Car Marketplace Services" : "এন্টারপ্রাইজ-গ্রেড কার মার্কেটপ্লেস সার্ভিসেস",
    heroDesc: language === "EN"
      ? "Scalable listings, advanced search & filters, secure checkout, financing integrations, logistics & inspection workflows — built to power marketplaces for thousands of vehicles and millions of users."
      : "স্কেলেবল লিস্টিং, অ্যাডভান্সড সার্চ ও ফিল্টার, সিকিউর চেকআউট, ফাইন্যান্সিং ইন্টিগ্রেশন, লজিস্টিক ও ইন্সপেকশন ওয়ার্কফ্লো — হাজার হাজার গাড়ি এবং মিলিয়ন ব্যবহারকারীর মার্কেটপ্লেসের জন্য তৈরি।",
    explorePlans: language === "EN" ? "Explore Plans" : "পরিকল্পনা দেখুন",
    scheduleDemo: language === "EN" ? "Schedule a Demo" : "ডেমো নির্ধারণ করুন",
    coreServices: language === "EN" ? "Core Services" : "কোর সার্ভিসেস",
    coreServicesDesc: language === "EN" ? "Everything you need to run a modern, high-volume car marketplace." : "সবকিছু যা দরকার একটি আধুনিক, হাই-ভলিউম গাড়ি মার্কেটপ্লেস চালানোর জন্য।",
    builtTrustTitle: language === "EN" ? "Built for scale, designed for trust" : "স্কেলের জন্য তৈরি, বিশ্বাসের জন্য ডিজাইন করা",
    plansPricing: language === "EN" ? "Plans & Pricing" : "পরিকল্পনা ও মূল্য",
    plansPricingDesc: language === "EN" ? "Transparent pricing — predictable usage tiers for enterprises." : "স্বচ্ছ মূল্য — এন্টারপ্রাইজের জন্য পূর্বনির্ধারিত ব্যবহার স্তর।",
    trustedBy: language === "EN" ? "Trusted by marketplaces" : "মার্কেটপ্লেসগুলো দ্বারা বিশ্বাসযোগ্য",
    realResults: language === "EN" ? "Real results from enterprise customers." : "এন্টারপ্রাইজ কাস্টমারদের বাস্তব ফলাফল।",
    faqTitle: language === "EN" ? "FAQs" : "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    readyToScale: language === "EN" ? "Ready to scale?" : "স্কেলের জন্য প্রস্তুত?",
    readyDesc: language === "EN" ? "Schedule a demo — we’ll show you how our platform can support your growth and integrations."
      : "ডেমো নির্ধারণ করুন — আমরা দেখাব কিভাবে আমাদের প্ল্যাটফর্ম আপনার বৃদ্ধি এবং ইন্টিগ্রেশনকে সমর্থন করতে পারে।",
    footerNote: language === "EN" ? `© ${new Date().getFullYear()} AmazingDeals — All rights reserved.` 
      : `© ${new Date().getFullYear()}আমাজিন ডেল  — সর্বাধিক অধিকার সংরক্ষিত।`,
    footerLinks: language === "EN" ? "Terms · Privacy · Support" : "শর্তাবলী · গোপনীয়তা · সাপোর্ট"
  };

  return (
    <main className="min-h-screen mt-30 bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <FadeUp>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                {texts.heroTitle}
              </h1>
            </FadeUp>

            <FadeUp delay={0.08}>
              <p className="mt-6 text-gray-600 max-w-2xl">
                {texts.heroDesc}
              </p>
            </FadeUp>

            <div className="mt-8 flex gap-3 flex-col sm:flex-row">
              <FadeUp delay={0.12}>
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-black text-white shadow-md hover:shadow-lg transition"
                >
                  {texts.explorePlans}
                </a>
              </FadeUp>

              <FadeUp delay={0.16}>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  {texts.scheduleDemo}
                </a>
              </FadeUp>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <small className="text-xs text-gray-500">SLA 99.9%</small>
              <small className="text-xs text-gray-500">PCI & Data Secure</small>
              <small className="text-xs text-gray-500">24/7 Support</small>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <FadeUp delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={heroImg}
                  alt={language === "EN" ? "Showcase car" : "শোকার গাড়ি"}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">{texts.coreServices}</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">{texts.coreServicesDesc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <ServiceCard
            img={featureImg1}
            title={language === "EN" ? "Advanced Search & Filters" : "অ্যাডভান্সড সার্চ ও ফিল্টার"}
            desc={language === "EN"
              ? "Real-time search, autosuggest, fuzzy matching, faceted filters, multi-criteria ranking."
              : "রিয়েল-টাইম সার্চ, অটোসাজেস্ট, ফাজি ম্যাচিং, ফ্যাসেটেড ফিল্টার, মাল্টি-ক্রাইটেরিয়া র‍্যাঙ্কিং।"}
          />
          <ServiceCard
            img={featureImg2}
            title={language === "EN" ? "Inventory & Listing Management" : "ইনভেন্টরি ও লিস্টিং ম্যানেজমেন্ট"}
            desc={language === "EN"
              ? "Bulk import, scheduled publishing, validation, smart categorization and media management."
              : "বাল্ক ইমপোর্ট, নির্ধারিত প্রকাশনা, ভ্যালিডেশন, স্মার্ট ক্যাটাগরাইজেশন এবং মিডিয়া ম্যানেজমেন্ট।"}
          />
          <ServiceCard
            img={featureImg3}
            title={language === "EN" ? "Payments & Financing" : "পেমেন্ট ও ফাইন্যান্সিং"}
            desc={language === "EN"
              ? "Secure payments, escrow, multiple gateways, and integrated loan/EMI workflows with partner APIs."
              : "নিরাপদ পেমেন্ট, এসক্রো, একাধিক গেটওয়ে, এবং পার্টনার এপিআই-এর সাথে ইন্টিগ্রেটেড লোন/ইএমআই ওয়ার্কফ্লো।"}
          />
        </div>
      </section>

      {/* DETAILS / WHY US */}
      <section className="bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">{texts.builtTrustTitle}</h3>
            <p className="mt-4 text-gray-600">
              {language === "EN"
                ? "Our architecture has been built to handle high concurrency — millions of product views, thousands of simultaneous searches, and robust background processing for ingestion and verification."
                : "আমাদের আর্কিটেকচার উচ্চ concurrency পরিচালনা করার জন্য তৈরি করা হয়েছে — মিলিয়ন প্রোডাক্ট ভিউ, হাজার হাজার সমকালীন সার্চ, এবং শক্তিশালী ব্যাকগ্রাউন্ড প্রসেসিং ইনজেস্ট ও ভেরিফিকেশনের জন্য।"}
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className=" mt-1 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">✓</span>
                <div>
                  <strong>{language === "EN" ? "Audit & Verification" : "অডিট ও ভেরিফিকেশন"}</strong>
                  <div className="text-sm text-gray-500">
                    {language === "EN"
                      ? "Integrated inspection workflows and verified listings badge."
                      : "ইন্টিগ্রেটেড ইন্সপেকশন ওয়ার্কফ্লো এবং ভেরিফায়েড লিস্টিং ব্যাজ।"}
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className=" mt-1 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">⚙</span>
                <div>
                  <strong>{language === "EN" ? "Integrations" : "ইন্টিগ্রেশন"}</strong>
                  <div className="text-sm text-gray-500">
                    {language === "EN"
                      ? "CRM, ERP, analytics, logistics, KYC & payment providers."
                      : "CRM, ERP, অ্যানালিটিক্স, লজিস্টিক, KYC ও পেমেন্ট প্রোভাইডার।"}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden">
              <img src={featureImg2} alt={language === "EN" ? "integration" : "ইন্টিগ্রেশন"} className="w-full h-64 object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Plans */}
      <section id="plans" className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">{texts.plansPricing}</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">{texts.plansPricingDesc}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlanCard
          language={language}
            title={language === "EN" ? "Starter" : "স্টার্টার"}
            price="$299 / mo"
            bullets={language === "EN"
              ? ["Up to 1,000 listings", "Basic search & filters", "Standard support"]
              : ["১,০০০ পর্যন্ত লিস্টিং", "বেসিক সার্চ ও ফিল্টার", "স্ট্যান্ডার্ড সাপোর্ট"]}
          />
          <PlanCard
          language={language}
            title={language === "EN" ? "Growth" : "গ্রোথ"}
            popular
            price="$999 / mo"
            bullets={language === "EN"
              ? ["Up to 10,000 listings", "Advanced search & autosuggest", "Priority support & onboarding"]
              : ["১০,০০০ পর্যন্ত লিস্টিং", "অ্যাডভান্সড সার্চ ও অটোসাজেস্ট", "প্রায়োরিটি সাপোর্ট ও অনবোর্ডিং"]}
          />
          <PlanCard
          language={language}
            title={language === "EN" ? "Enterprise" : "এন্টারপ্রাইজ"}
            price="Custom"
            bullets={language === "EN"
              ? ["Unlimited listings", "SLA, dedicated account, custom integrations", "On-site training & 24/7 support"]
              : ["অসীম লিস্টিং", "SLA, ডেডিকেটেড অ্যাকাউন্ট, কাস্টম ইন্টিগ্রেশন", "অন-সাইট ট্রেনিং ও ২৪/৭ সাপোর্ট"]}
          />
        </div>
      </section>

      {/* Case Studies / Testimonials */}
      <section className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold">{texts.trustedBy}</h2>
          <p className="text-gray-600 mt-2">{texts.realResults}</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Testimonial
              img={testimonialImg}
              name="Ayesha Rahman"
              role={language === "EN" ? "Product Lead — AutoHub" : "প্রোডাক্ট লিড — অটোহাব"}
              quote={language === "EN"
                ? "We launched in 6 weeks and scaled to 100k listings in 3 months. Their indexing and search quality is exceptional."
                : "আমরা ৬ সপ্তাহে লঞ্চ করেছি এবং ৩ মাসে ১,০০,০০০ লিস্টিং এ স্কেল করেছি। তাদের ইনডেক্সিং ও সার্চ কোয়ালিটি অসাধারণ।"}
            />
            <Testimonial
              img={testimonialImg}
              name="Rajesh Kumar"
              role={language === "EN" ? "CTO — CityCars" : "সিটিক্যারের CTO"}
              quote={language === "EN"
                ? "Robust platform, excellent support, and integrations saved us months of engineering time."
                : "মজবুত প্ল্যাটফর্ম, চমৎকার সাপোর্ট, এবং ইন্টিগ্রেশন আমাদের মাসের ইঞ্জিনিয়ারিং সময় বাঁচিয়েছে।"}
            />
            <Testimonial
              img={testimonialImg}
              name="Lina Gomez"
              role={language === "EN" ? "Operations — RideSpace" : "অপারেশন — রাইডস্পেস"}
              quote={language === "EN"
                ? "Inspection & verification workflow cut down disputes by 70% — flawless execution."
                : "ইন্সপেকশন ও ভেরিফিকেশন ওয়ার্কফ্লো বিতর্ক ৭০% কমিয়েছে — নিখুঁত এক্সিকিউশন।"}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold">{texts.faqTitle}</h2>
        <div className="mt-6 grid gap-4">
          <FAQItem
            question={language === "EN" ? "Do you handle financing integrations?" : "আপনি কি ফাইন্যান্সিং ইন্টিগ্রেশন পরিচালনা করেন?"}
            answer={language === "EN" ? "Yes — we integrate with third-party financiers and provide EMI workflows & APIs." : "হ্যাঁ — আমরা থার্ড-পার্টি ফাইন্যান্সিয়ারদের সাথে ইন্টিগ্রেট করি এবং ইএমআই ওয়ার্কফ্লো ও এপিআই প্রদান করি।"}
          />
          <FAQItem
            question={language === "EN" ? "Can we host on our cloud?" : "আমরা কি আমাদের ক্লাউডে হোস্ট করতে পারি?"}
                     answer={language === "EN" ? "Yes — deployment options include our managed hosting or customer VPC deployment." : "হ্যাঁ — ডিপ্লয়মেন্ট অপশনগুলিতে আমাদের ম্যানেজড হোস্টিং বা কাস্টমার VPC ডিপ্লয়মেন্ট অন্তর্ভুক্ত।"}
          />
          <FAQItem
            question={language === "EN" ? "What is onboarding like?" : "অনবোর্ডিং কেমন হয়?"}
            answer={language === "EN" ? "We provide a structured onboarding plan: data migration, training, go-live support, and SLA." : "আমরা একটি স্ট্রাকচার্ড অনবোর্ডিং প্ল্যান প্রদান করি: ডেটা মাইগ্রেশন, ট্রেনিং, গো-লাইভ সাপোর্ট, এবং SLA।"}
          />
        </div>
      </section>

      {/* CTA + Contact form */}
      <section id="contact" className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">{texts.readyToScale}</h3>
              <p className="mt-3 text-gray-300 max-w-xl">{texts.readyDesc}</p>
              <ul className="mt-6 space-y-2 text-gray-300">
                <li>• SLA-backed uptime</li>
                <li>• Enterprise-grade security</li>
                <li>• Global CDN & performance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 text-black shadow-lg">
              <ContactForm language={language}/>
            </div>
          </div>
        </div>
      </section>

      {/* Footer small note */}
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>{texts.footerNote}</div>
          <div>{texts.footerLinks}</div>
        </div>
      </footer>
    </main>
  );
}

/* ---------------------- Subcomponents ---------------------- */

function ServiceCard({ img, title, desc }) {
  return (
    <FadeUp>
      <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
        <div className="h-44 w-full overflow-hidden">
          <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover"/>
        </div>
        <div className="p-5">
          <h4 className="font-semibold">{title}</h4>
          <p className="text-gray-600 mt-2 text-sm">{desc}</p>
          <a className="mt-4 inline-block text-sm font-medium text-black" href="#contact">{title}</a>
        </div>
      </article>
    </FadeUp>
  );
}

function PlanCard({ language, title, price, bullets = [], popular = false }) {
  return (
    <FadeUp>
      <div className={`rounded-xl border ${popular ? "border-black shadow-xl" : "border-gray-200"} bg-white p-6`}>
        {popular && <div className="inline-block px-3 py-1 bg-yellow-300 rounded-full text-xs font-semibold mb-3">Popular</div>}
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-3 text-2xl font-extrabold">{price}</div>
        <ul className="mt-4 space-y-2 text-gray-600">
          {bullets.map((b, i) => <li key={i}>• {b}</li>)}
        </ul>
        <button className={`mt-6 w-full py-3 rounded-lg ${popular ? "bg-black text-white" : "bg-gray-100 text-gray-800"}`}>
          {language === "EN" ? "Get Started" : "শুরু করুন"}
        </button>
      </div>
    </FadeUp>
  );
}

function Testimonial({ img, name, role, quote }) {
  return (
    <FadeUp>
      <div className="bg-white rounded-xl shadow-md p-5">
        <div className="flex items-center gap-4">
          <img src={img} alt={name} loading="lazy" className="w-12 h-12 rounded-full object-cover"/>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-gray-500">{role}</div>
          </div>
        </div>
        <blockquote className="mt-4 text-gray-700">“{quote}”</blockquote>
      </div>
    </FadeUp>
  );
}

function FAQItem({language, question, answer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <button onClick={() => setOpen(s => !s)} className="w-full flex items-center justify-between">
        <div className="text-left">
          <div className="font-medium">{question}</div>
          <div className="text-sm text-gray-500">{open ? (language === "EN" ? "Showing answer" : "উত্তর দেখানো হচ্ছে") : (language === "EN" ? "Click to view answer" : "")}</div>
        </div>
        <div className="text-2xl">{open ? "−" : "+"}</div>
      </button>
      {open && <div className="mt-3 text-gray-600">{answer}</div>}
    </div>
  );
}

function ContactForm({ language }) {
  const [state, setState] = React.useState({ name: "", email: "", company: "", message: "" });
  const [submitting, setSubmitting] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const onChange = (k) => (e) => setState(s => ({ ...s, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(res => setTimeout(res, 800));
    setSubmitting(false);
    setSent(true);
    setState({ name: "", email: "", company: "", message: "" });
  };

  return (
    <>
      {!sent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input required value={state.name} onChange={onChange("name")}
              placeholder={language === "EN" ? "Full name" : "পুরো নাম"} className="border rounded-lg px-3 py-2 w-full"/>
            <input required value={state.email} onChange={onChange("email")}
              placeholder="Email" type="email" className="border rounded-lg px-3 py-2 w-full"/>
          </div>
          <input value={state.company} onChange={onChange("company")} placeholder={language === "EN" ? "Company (optional)" : "কোম্পানি (ঐচ্ছিক)"} className="border rounded-lg px-3 py-2 w-full"/>
          <textarea required value={state.message} onChange={onChange("message")} rows={4} placeholder={language === "EN" ? "Tell us briefly what you need" : "সংক্ষেপে জানান আপনি কি প্রয়োজন"} className="border rounded-lg px-3 py-2 w-full"></textarea>

          <div className="flex items-center gap-3">
            <button type="submit" disabled={submitting} className="px-5 py-2 rounded-lg bg-black text-white">
              {submitting ? (language === "EN" ? "Sending..." : "পাঠানো হচ্ছে...") : (language === "EN" ? "Request Demo" : "ডেমো অনুরোধ")}
            </button>
            <div className="text-sm text-gray-500">{language === "EN" ? "We will get back to you within one business day." : "আমরা এক ব্যবসায়িক দিনের মধ্যে আপনাকে উত্তর দেব।"}</div>
          </div>
        </form>
      ) : (
        <div className="text-center py-10">
          <div className="text-green-600 font-semibold">{language === "EN" ? "Thanks — request received!" : "ধন্যবাদ — অনুরোধ পাওয়া গেছে!"}</div>
          <div className="mt-3 text-gray-600">{language === "EN" ? "We'll email you shortly to schedule a demo." : "আমরা শীঘ্রই আপনাকে ইমেইল পাঠাবো ডেমো নির্ধারণ করার জন্য।"}</div>
        </div>
      )}
    </>
  );
}
