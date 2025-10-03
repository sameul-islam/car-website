import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

import carshow from '../assets/othersImage/carshow.jpg'

export default function DesktopAdvancedSearch() {
  const { language } = useContext(LanguageContext);

  const [carType, setCarType] = useState("new");
  const [searchBy, setSearchBy] = useState("budget");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");


  const newCarPrices = ["10,000 -20,000", "20,000 - 30,000", "30,000 - 40,000", "40,000+", "Custom"];
  const newCarData = {
    Toyota: ["Corolla", "Camry", "RAV4"],
    Honda: ["Civic", "Accord", "CR-V"],
    BMW: ["3 Series", "5 Series", "X5"],
    Mercedes: ["C-Class", "E-Class", "GLC"],
  };


  const oldCarPrices = ["3,000 - 5,000", "5,000 - 7,000", "7,000 - 10,000", "10,000+"];
  const oldCarData = {
    Toyota: ["Corolla (2008)", "Camry (2010)", "RAV4 (2012)"],
    Honda: ["Civic (2009)", "Accord (2011)", "CR-V (2013)"],
    BMW: ["3 Series (2007)", "5 Series (2009)", "X5 (2011)"],
    Mercedes: ["C-Class (2006)", "E-Class (2008)", "GLC (2010)"],
  };

 
  const prices = carType === "new" ? newCarPrices : oldCarPrices;
  const carData = carType === "new" ? newCarData : oldCarData;

  const makes = Object.keys(carData);
  const models = selectedMake ? carData[selectedMake] : [];

  return (
    <section className="lg:w-[85%] md:w-[97%] mx-auto py-16 flex gap-8 items-center">
      {/* Left Image */}
      <motion.div
        className="w-1/2 lg:h-[465px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={carshow}
          alt={language === "EN" ? "Luxury Car" : "লাক্সারি গাড়ি"}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right Search Box */}
      <motion.div
        className="w-1/2 bg-white rounded-xl shadow-2xl p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          {language === "EN" ? `Find Your Right Car` : "আপনার সঠিক গাড়ি খুঁজুন"}
        </h2>

        {/* Car Type Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => {
              setCarType("new");
              setSelectedMake("");
              setSelectedModel("");
              setSelectedPrice("");
            }}
            className={`px-6 py-2 rounded-lg font-medium ${
              carType === "new"
                ? "bg-[#273c75] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {language === "EN" ? "New Car" : "নতুন গাড়ি"}
          </button>
          <button
            onClick={() => {
              setCarType("old");
              setSelectedMake("");
              setSelectedModel("");
              setSelectedPrice("");
            }}
            className={`px-6 py-2 rounded-lg font-medium ${
              carType === "old"
                ? "bg-[#273c75] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {language === "EN" ? "Old Car" : "পুরানো গাড়ি"}
          </button>
        </div>

        {/* Radio Buttons */}
        <div className="flex gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="budget"
              checked={searchBy === "budget"}
              onChange={() => setSearchBy("budget")}
            />
            <span>{language === "EN" ? "By Budget" : "বাজেট অনুযায়ী"}</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="model"
              checked={searchBy === "model"}
              onChange={() => setSearchBy("model")}
            />
            <span>{language === "EN" ? "By Model" : "মডেল অনুযায়ী"}</span>
          </label>
        </div>

        {/* Conditional Search Inputs */}
        {searchBy === "budget" ? (
          <div className="mb-6">
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
            >
              <option value="">
                {language === "EN" ? "Select Price" : "মূল্য নির্বাচন করুন"}
              </option>
              {prices.map((price, idx) => (
                <option key={idx} value={price}>
                  {price}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <select
                value={selectedMake}
                onChange={(e) => {
                  setSelectedMake(e.target.value);
                  setSelectedModel("");
                }}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-3"
              >
                <option value="">
                  {language === "EN" ? "Select Make" : "মার্ক নির্বাচন করুন"}
                </option>
                {makes.map((make, idx) => (
                  <option key={idx} value={make}>
                    {make}
                  </option>
                ))}
              </select>

              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                disabled={!selectedMake}
              >
                <option value="">
                  {language === "EN" ? "Select Model" : "মডেল নির্বাচন করুন"}
                </option>
                {models.map((model, idx) => (
                  <option key={idx} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* Search Button */}
        <button
          className="w-full py-3 bg-[#273c75] text-white rounded-lg font-semibold hover:bg-[#192a56] transition"
          onClick={() =>
            alert(
              language === "EN"
                ? `Searching: ${
                    searchBy === "budget"
                      ? selectedPrice
                      : selectedMake + " - " + selectedModel
                  }`
                : `অনুসন্ধান: ${
                    searchBy === "budget"
                      ? selectedPrice
                      : selectedMake + " - " + selectedModel
                  }`
            )
          }
        >
          {language === "EN" ? "Search" : "অনুসন্ধান"}
        </button>
      </motion.div>
    </section>
  );
}
















