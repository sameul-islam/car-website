import { useContext } from "react";
import {
  ShieldCheck,
  DollarSign,
  ThumbsUp,
  Headphones,
  Star,
  CheckCircle,
} from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import selsVideo from '../assets/video/selsVideo.mp4';
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export default function VideoShowcase() {
  const { language } = useContext(LanguageContext);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const options = [
    { icon: <ShieldCheck className="w-7 h-7 text-orange-500" />, title: {EN:"Trusted & Secure",BN:"বিশ্বস্ত এবং নিরাপদ"}, desc:{EN:"100% verified dealers and safe transactions.",BN:"১০০% যাচাই করা ডিলার এবং নিরাপদ লেনদেন।"} },
    { icon: <DollarSign className="w-7 h-7 text-orange-500" />, title: {EN:"Best Price Guarantee",BN:"সেরা মূল্য গ্যারান্টি"}, desc:{EN:"Most competitive prices, no hidden fees.",BN:"বাজারে প্রতিযোগিতামূলক দাম, কোন লুকানো খরচ নেই।"} },
    { icon: <ThumbsUp className="w-7 h-7 text-orange-500" />, title: {EN:"Quality Cars",BN:"গুণগত মানসম্পন্ন গাড়ি"}, desc:{EN:"Every car undergoes rigorous inspection.",BN:"প্রতিটি গাড়ি কঠোর পরিদর্শনের মধ্য দিয়ে যায়।"} },
    { icon: <Headphones className="w-7 h-7 text-orange-500" />, title: {EN:"24/7 Support",BN:"২৪/৭ সহায়তা"}, desc:{EN:"Experts available anytime.",BN:"বিশেষজ্ঞরা সব সময় সাহায্য করতে প্রস্তুত।"} },
    { icon: <Star className="w-7 h-7 text-orange-500" />, title: {EN:"Customer Satisfaction",BN:"গ্রাহক সন্তুষ্টি"}, desc:{EN:"Customer happiness is our priority.",BN:"গ্রাহক সন্তুষ্টি আমাদের অগ্রাধিকার।"} },
    { icon: <CheckCircle className="w-7 h-7 text-orange-500" />, title: {EN:"Certified Cars",BN:"সনদপ্রাপ্ত গাড়ি"}, desc:{EN:"Certification with every car.",BN:"প্রতিটি গাড়ির সাথে সার্টিফিকেট।"} },
  ];

  const fadeUp = { hidden:{opacity:0, y:20}, visible:{opacity:1, y:0} };

  return (
    <section ref={ref} className="relative w-full bg-gray-50 py-20 px-2 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{ visible:{opacity:1,y:0} }}
          transition={{ duration:0.8 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-16"
        >
          {language==="EN"?"Why Choose":"কেন আমাদের নির্বাচ"}{" "}
          <span className="text-orange-500">{language==="EN"?"Us?":"চন করবেন আমাদের?"}</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-stretch">
          {/* Left: Video */}
          <motion.div
            initial={{ y:50 }}
            animate={controls}
            variants={{ visible:{y:0, transition:{type:"spring", stiffness:80, damping:20}} }}
            className="w-full relative flex items-center justify-center overflow-hidden rounded-md shadow-sm"
          >
             <motion.video
              src={selsVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-[97%] sm:w-full h-[350px] sm:h-[520px] md:h-[550px] object-cover rounded-md mx-auto"
              style={{ willChange: "transform" }}
              whileInView={{ y: [-10, 0, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl"></div>
            {/* High-End Car Badge */}
            <div className="absolute top-6 left-6 bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg text-sm">
              {language==="EN"?"High-End Car":"হাই-এন্ড কার"}
            </div>
          </motion.div>

          {/* Right: Options */}
          <div className="flex flex-col justify-between gap-4">
            {options.map((opt,index)=>(
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={fadeUp}
                transition={{ duration:0.5 }}
                whileHover={{ boxShadow:"0 15px 25px rgba(0,0,0,0.1)" }}
                className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-all shadow-sm"
              >
                <div className="flex-shrink-0">
                  <motion.div whileHover={{ scale:1.2 }} className="p-2 bg-orange-100 rounded-full">
                    {opt.icon}
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{language==="EN"?opt.title.EN:opt.title.BN}</h3>
                  <p className="text-gray-600 text-sm">{language==="EN"?opt.desc.EN:opt.desc.BN}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
