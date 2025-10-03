import React, { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Link, useNavigate } from "react-router-dom";

const CarDescription = ({ car }) => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState(
    car.colors && car.colors.length > 0 ? car.colors[0] : ""
  );

  return (
    <div className="flex-1 flex flex-col justify-between">
      {/* Car Name, Price & Category */}
      <div>
        <h1 className="text-3xl font-bold text-[#273c75] mb-2">
          {language === "EN" ? car.name.EN : car.name.BN}
        </h1>
        <p className="text-gray-600 text-lg font-semibold mb-2">{car.price}</p>
        <p className="text-orange-600 font-medium mb-4">
          {language === "EN" ? car.category.EN : car.category.BN}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < car.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.072 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 font-medium">{car.rating}/5</span>
        </div>

        {/* Description */}
        {car.description && (
          <p className="text-gray-700 mb-6">{car.description[language]}</p>
        )}

        {/* Color Options */}
        {car.colors && car.colors.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">
              {language === "EN" ? "Choose Color" : "রঙ নির্বাচন করুন"}
            </h3>
            <div className="flex gap-3 flex-wrap">
              {car.colors.map((color, idx) => (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded-full border-2 transition-transform transform hover:scale-110 ${
                    selectedColor === color
                      ? "border-black shadow-lg"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap mt-4">
        <Link
          to="/loanform"
          className="px-6 py-3 bg-[#273c75] text-white rounded-md font-semibold hover:bg-[#1e2a5a] transition"
        >
          {language === "EN" ? "Apply for Loan" : "লোনের জন্য আবেদন করুন"}
        </Link>

        {/* Buy Now Button with proper product linking */}
        <button
          className="px-6 py-3  border border-[#273c75] text-[#273c75] rounded-md font-semibold hover:bg-[#273c75] hover:text-white transition"
          onClick={() => navigate("/buy", { state: { product: car } })} 
        >
          {language === "EN" ? "Buy Now" : "এখন কিনুন"}
        </button>
      </div>
    </div>
  );
};

export default CarDescription;
