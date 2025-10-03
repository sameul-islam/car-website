import { motion, useInView } from "framer-motion";
import { useRef, useState, useContext } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";
import { LanguageContext } from "../context/LanguageContext";

export default function ScrollCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 
  const [showConfetti, setShowConfetti] = useState(false);
  const { language } = useContext(LanguageContext); 

  if (isInView && !showConfetti) {
    setShowConfetti(true);
  }

  return (
    <section
      ref={ref}
      className="relative w-full py-20 bg-gradient-to-r from-[#1e3799] via-[#3c6382] to-[#0c2461] overflow-hidden"
    >
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <ConfettiExplosion force={0.6} duration={4000} particleCount={120} width={1600} />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          {language === "EN" 
            ? <>Drive Your <span className="text-yellow-300">Dream Car</span> Today</> 
            : <>আজই আপনার <span className="text-yellow-300">স্বপ্নের গাড়ি</span> চালান</>
          }
        </motion.h2>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
        >
          {language === "EN" 
            ? "Join thousands of happy customers who found their perfect car with us." 
            : "হাজার হাজার খুশি গ্রাহকের সঙ্গে যোগ দিন যারা আমাদের মাধ্যমে তাদের নিখুঁত গাড়ি খুঁজে পেয়েছে।"
          }
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/cars"
            className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:bg-yellow-300 transition flex items-center justify-center gap-2"
          >
            {language === "EN" ? "Explore Cars" : "গাড়ি দেখুন"} <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 bg-white/20 border border-white/40 text-white font-semibold rounded-xl shadow-lg hover:bg-white/30 transition flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-5 h-5" /> {language === "EN" ? "Contact Us" : "যোগাযোগ করুন"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
