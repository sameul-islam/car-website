import { useState, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LanguageContext } from "../../context/LanguageContext";
import { useNavigate } from "react-router-dom"; 

import img1 from "../../assets/allProducts/img (1).jpg";
import img2 from "../../assets/allProducts/img (2).jpg";
import img3 from "../../assets/allProducts/img (3).jpg";
import img4 from "../../assets/allProducts/img (4).jpg";
import img5 from "../../assets/allProducts/img (5).jpg";
import img6 from "../../assets/allProducts/img (6).jpg";
import img7 from "../../assets/allProducts/img (7).jpg";
import img8 from "../../assets/allProducts/img (8).jpg";
import img9 from "../../assets/allProducts/img (9).jpg";
import img10 from "../../assets/allProducts/img (10).jpg";
import img11 from "../../assets/allProducts/img (11).jpg";
import img12 from "../../assets/allProducts/img (12).jpg";
import img13 from "../../assets/allProducts/img (13).jpg";
import img14 from "../../assets/allProducts/img (14).jpg";
import img15 from "../../assets/allProducts/img (15).jpg";
import img16 from "../../assets/allProducts/img (16).jpg";
import img17 from "../../assets/allProducts/img (17).jpg";
import img18 from "../../assets/allProducts/img (18).jpg";
import img19 from "../../assets/allProducts/img (19).jpg";
import img20 from "../../assets/allProducts/img (20).jpg";
import img21 from "../../assets/allProducts/img (21).jpg";
import img22 from "../../assets/allProducts/img (22).jpg";
import img23 from "../../assets/allProducts/img (23).jpg";
import img24 from "../../assets/allProducts/img (24).jpg";
import img25 from "../../assets/allProducts/img (25).jpg";
import img26 from "../../assets/allProducts/img (26).jpg";
import img27 from "../../assets/allProducts/img (27).jpg";
import img28 from "../../assets/allProducts/img (28).jpg";
import img29 from "../../assets/allProducts/img (29).jpg";
import img30 from "../../assets/allProducts/img (30).jpg";
import img31 from "../../assets/allProducts/img (31).jpg";
import img32 from "../../assets/allProducts/img (32).jpg";

const carsData = [
  { id: 1, nameEN: "Tesla Model 3", nameBN: "টেসলা মডেল ৩", categoryEN: "Electric", categoryBN: "ইলেকট্রিক", price: 12000, image: img1 },
  { id: 2, nameEN: "BMW X5", nameBN: "বিএমডব্লিউ এক্স৫", categoryEN: "SUV", categoryBN: "এসইউভি", price: 18000, image: img2 },
  { id: 3, nameEN: "Audi A4", nameBN: "আউডি এ৪", categoryEN: "Sedan", categoryBN: "সেডান", price: 22000, image: img3 },
  { id: 4, nameEN: "Mercedes C-Class", nameBN: "মার্সিডিজ সি-ক্লাস", categoryEN: "Luxury", categoryBN: "লাক্সারি", price: 28000, image: img4 },
  { id: 5, nameEN: "Toyota Corolla", nameBN: "টোয়োটা কোরোলা", categoryEN: "Sedan", categoryBN: "সেডান", price: 8000, image: img5 },
  { id: 6, nameEN: "Honda Civic", nameBN: "হোন্ডা সিভিক", categoryEN: "Sedan", categoryBN: "সেডান", price: 15000, image: img6 },
  { id: 7, nameEN: "Ford Mustang", nameBN: "ফোর্ড মুস্ট্যাং", categoryEN: "Sports", categoryBN: "স্পোর্টস", price: 25000, image: img7 },
  { id: 8, nameEN: "Chevrolet Camaro", nameBN: "শেভ্রোলেট ক্যামারো", categoryEN: "Sports", categoryBN: "স্পোর্টস", price: 32000, image: img8 },
  { id: 9, nameEN: "Hyundai Elantra", nameBN: "হুন্ডাই এলান্টরা", categoryEN: "Sedan", categoryBN: "সেডান", price: 9000, image: img9 },
  { id: 10, nameEN: "Kia Sportage", nameBN: "কিয়া স্পোর্টেজ", categoryEN: "SUV", categoryBN: "এসইউভি", price: 17000, image: img10 },
  { id: 11, nameEN: "Nissan Altima", nameBN: "নিসান আলটিমা", categoryEN: "Sedan", categoryBN: "সেডান", price: 16000, image: img11 },
  { id: 12, nameEN: "Mazda CX-5", nameBN: "মাজদা সিএক্স-৫", categoryEN: "SUV", categoryBN: "এসইউভি", price: 20000, image: img12 },
  { id: 13, nameEN: "Jeep Wrangler", nameBN: "জিপ র‍্যাংলার", categoryEN: "SUV", categoryBN: "এসইউভি", price: 27000, image: img13 },
  { id: 14, nameEN: "Volkswagen Passat", nameBN: "ভক্সওয়াগেন পাসাত", categoryEN: "Sedan", categoryBN: "সেডান", price: 14000, image: img14 },
  { id: 15, nameEN: "Porsche 911", nameBN: "পোর্শে ৯১১", categoryEN: "Sports", categoryBN: "স্পোর্টস", price: 35000, image: img15 },
  { id: 16, nameEN: "Ferrari Roma", nameBN: "ফেরারি রোমা", categoryEN: "Luxury", categoryBN: "লাক্সারি", price: 34000, image: img16 },
  { id: 17, nameEN: "Lamborghini Huracan", nameBN: "ল্যাম্বোরগিনি হুরাকান", categoryEN: "Sports", categoryBN: "স্পোর্টস", price: 33000, image: img17 },
  { id: 18, nameEN: "Jaguar XF", nameBN: "জাগুয়ার এক্সএফ", categoryEN: "Luxury", categoryBN: "লাক্সারি", price: 26000, image: img18 },
  { id: 19, nameEN: "Range Rover Evoque", nameBN: "রেঞ্জ রোভার ইভোক", categoryEN: "SUV", categoryBN: "এসইউভি", price: 30000, image: img19 },
  { id: 20, nameEN: "Subaru Forester", nameBN: "সুবারু ফরেস্টার", categoryEN: "SUV", categoryBN: "এসইউভি", price: 19000, image: img20 },
  { id: 21, nameEN: "Chevy Tahoe", nameBN: "শেভি টাহো", categoryEN: "SUV", categoryBN: "এসইউভি", price: 28000, image: img21 },
  { id: 22, nameEN: "Volvo XC60", nameBN: "ভলভো এক্সসি৬০", categoryEN: "SUV", categoryBN: "এসইউভি", price: 21000, image: img22 },
  { id: 23, nameEN: "Peugeot 3008", nameBN: "পিজো ৩০০৮", categoryEN: "SUV", categoryBN: "এসইউভি", price: 16000, image: img23 },
  { id: 24, nameEN: "Fiat 500", nameBN: "ফিয়াট ৫০০", categoryEN: "Hatchback", categoryBN: "হ্যাচব্যাক", price: 7000, image: img24 },
  { id: 25, nameEN: "Mini Cooper", nameBN: "মিনি কুপার", categoryEN: "Hatchback", categoryBN: "হ্যাচব্যাক", price: 11000, image: img25 },
  { id: 26, nameEN: "Suzuki Swift", nameBN: "সুজুকি সুইফট", categoryEN: "Hatchback", categoryBN: "হ্যাচব্যাক", price: 6000, image: img26 },
  { id: 27, nameEN: "Renault Clio", nameBN: "রেনল্ট ক্লিও", categoryEN: "Hatchback", categoryBN: "হ্যাচব্যাক", price: 9000, image: img27 },
  { id: 28, nameEN: "Skoda Octavia", nameBN: "স্কোডা অক্টাভিয়া", categoryEN: "Sedan", categoryBN: "সেডান", price: 13000, image: img28 },
  { id: 29, nameEN: "Mitsubishi Outlander", nameBN: "মিতসুবিশি আউটল্যান্ডার", categoryEN: "SUV", categoryBN: "এসইউভি", price: 18000, image: img29 },
  { id: 30, nameEN: "Chrysler 300", nameBN: "ক্রিসলার ৩০০", categoryEN: "Luxury", categoryBN: "লাক্সারি", price: 24000, image: img30 },
  { id: 31, nameEN: "Bentley Continental", nameBN: "বেন্টলি কন্টিনেন্টাল", categoryEN: "Luxury", categoryBN: "লাক্সারি", price: 35000, image: img31 },
  { id: 32, nameEN: "Rolls Royce Ghost", nameBN: "রোলস রয়েস ঘোস্ট", categoryEN: "Luxury", categoryBN: "লাক্সারি", price: 35000, image: img32 },
];

const priceRanges = [
  { labelEN: "$5,000 - $15,000", labelBN: "$৫,০০০ - ১৫,০০০", min: 5000, max: 15000 },
  { labelEN: "$15,000 - $20,000", labelBN: "$১৫,০০০ - ২০,০০০", min: 15000, max: 20000 },
  { labelEN: "$20,000 - $25,000", labelBN: "$২০,০০০ - ২৫,০০০", min: 20000, max: 25000 },
  { labelEN: "$25,000 - $35,000", labelBN: "$২৫,০০০ - ৩৫,০০০", min: 25000, max: 35000 },
];

export default function PopularCars() {
  const { language } = useContext(LanguageContext); 
  const [selectedRange, setSelectedRange] = useState(null);
  const navigate = useNavigate();

  const filteredCars = selectedRange
    ? carsData.filter(
        (car) =>
          car.price >= selectedRange.min && car.price <= selectedRange.max
      )
    : carsData;

  const scrollLeft = () => {
    document.getElementById("carScroll").scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    document.getElementById("carScroll").scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-[82%] mx-auto px-4 flex flex-col md:flex-row items-center justify-between mb-6">
        <h2 className="text-2xl font-bold bg-white/50 p-4 shadow-md hover:shadow-2xl duration-300 rounded-md text-[#273c75] text-center md:text-left">
          {language === "EN" ? "Popular " : "জনপ্রিয় "}
          <span className="text-amber-600">{language === "EN" ? "Cars" : "গাড়ি"} </span>
        </h2>
        <div className="mt-4 md:mt-0">
          <select
            className="px-4 py-2 border text-amber-700 border-gray-400 rounded-lg shadow-sm focus:ring-1 focus:ring-[#273c75]"
            onChange={(e) =>
              setSelectedRange(
                priceRanges.find(
                  (range) =>
                    (language === "EN" ? range.labelEN : range.labelBN) === e.target.value
                ) || null
              )
            }
          >
            <option value="">{language === "EN" ? "All Prices" : "সব দাম"}</option>
            {priceRanges.map((range) => (
              <option
                key={range.labelEN}
                value={language === "EN" ? range.labelEN : range.labelBN}
              >
                {language === "EN" ? range.labelEN : range.labelBN}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="relative max-w-[82%] mx-auto">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/55 shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          id="carScroll"
          className="flex gap-6 overflow-x-auto scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer"
              style={{ scrollSnapAlign: "start" }}
              onClick={() => navigate(`/product/${car.id}`)} // <-- Navigate to ProductDetailPage
            >
              <img
                src={car.image}
                alt={language === "EN" ? car.nameEN : car.nameBN}
                className="w-full h-48 sm:h-52 md:h-56 object-cover rounded-lg"
              />
              <h3 className="mt-3 font-semibold text-gray-800 text-center">
                {language === "EN" ? car.nameEN : car.nameBN}
              </h3>
              <p className="text-sm text-gray-500 text-center">
                {language === "EN" ? car.categoryEN : car.categoryBN}
              </p>
              <p className="text-[#40739e] font-bold text-center">
                ${car.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/55 shadow-lg p-2 rounded-full hover:bg-gray-100 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

