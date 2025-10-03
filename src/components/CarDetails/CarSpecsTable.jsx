import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { FaTachometerAlt, FaGasPump, FaCogs, FaChair, FaRoad, FaPalette, FaCarSide } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { MdSpeed, MdColorLens } from "react-icons/md";

const CarSpecsTable = ({ car }) => {
  const { language } = useContext(LanguageContext);

  const specs = [
    { 
      label: language === "EN" ? "Engine" : "ইঞ্জিন", 
      value: car.engine || "3.0L Turbo",
      icon: <FaCogs className="text-red-500 w-5 h-5 mr-2" />
    },
    { 
      label: language === "EN" ? "Power" : "পাওয়ার", 
      value: car.power || "400 HP",
      icon: <FaTachometerAlt className="text-blue-500 w-5 h-5 mr-2" />
    },
    { 
      label: language === "EN" ? "Seats" : "সীট সংখ্যা", 
      value: car.seats || "5",
      icon: <FaChair className="text-green-500 w-5 h-5 mr-2" />
    },
    { 
      label: language === "EN" ? "Fuel Type" : "ফুয়েল টাইপ", 
      value: language === "EN" ? car.category.EN : car.category.BN,
      icon: <FaGasPump className="text-yellow-500 w-5 h-5 mr-2" />
    },
    { 
      label: language === "EN" ? "Transmission" : "ট্রান্সমিশন", 
      value: car.transmission || "Automatic",
      icon: <FaCogs className="text-purple-500 w-5 h-5 mr-2" />
    },
    { 
      label: language === "EN" ? "Top Speed" : "সর্বোচ্চ গতি", 
      value: car.topSpeed || "250 km/h",
      icon: <MdSpeed className="text-red-400 w-5 h-5 mr-2" />
    },
    { 
      label: language === "EN" ? "Mileage" : "মাইলেজ", 
      value: car.mileage || "15 km/l",
      icon: <FaRoad className="text-gray-500 w-5 h-5 mr-2" />
    },
    { 
      label: language === "EN" ? "Color Options" : "কালার অপশন", 
      value: car.colors || ["Red", "Blue", "Black"],
      icon: <MdColorLens className="text-pink-500 w-5 h-5 mr-2" />,
      isColor: true
    },
    { 
      label: language === "EN" ? "Body Type" : "বডি টাইপ", 
      value: car.bodyType || "SUV",
      icon: <FaCarSide className="text-indigo-500 w-5 h-5 mr-2" />
    },
    { 
      label: language === "EN" ? "Weight" : "ওজন", 
      value: car.weight || "2000 kg",
      icon: <GiWeight className="text-gray-700 w-5 h-5 mr-2" />
    }
  ];

  return (
    <div className="overflow-x-auto mb-8 shadow-xl rounded-lg border border-gray-300">
      <table className="w-full border-collapse">
        <tbody>
          {specs.map((spec, idx) => (
            <tr key={idx} className={`transition-all hover:bg-gray-100 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
              <td className="px-6 py-4 font-semibold border-b border-gray-300 w-1/3 flex items-center">
                {spec.icon} {spec.label}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-700">
                {spec.isColor
                  ? spec.value.map((color, index) => (
                      <span 
                        key={index} 
                        className="inline-block w-5 h-5 mr-2 rounded-full border border-gray-300"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      ></span>
                    ))
                  : spec.value
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarSpecsTable;
