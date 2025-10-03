import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../context/LanguageContext";

import carMobileShow from '../assets/othersImage/carMobileShow.jpg'

export default function MobileAdvancedSearch() {
  const { language } = useContext(LanguageContext);

  const [carType, setCarType] = useState("new");
  const [searchBy, setSearchBy] = useState("budget");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const newCarData = {
    Toyota: { models: ["Corolla", "Camry", "RAV4"], prices: ["$15,000", "$20,000", "$30,000+"] },
    Honda: { models: ["Civic", "Accord", "CR-V"], prices: ["$18,000", "$25,000", "$35,000+"] },
    BMW: { models: ["3 Series", "5 Series", "X5"], prices: ["$40,000", "$50,000", "$70,000+"] },
    Mercedes: { models: ["C-Class", "E-Class", "GLC"], prices: ["$42,000", "$55,000", "$75,000+"] },
  };

  const oldCarData = {
    Toyota: { models: ["Corolla 2015", "Camry 2014"], prices: ["$8,000", "$10,000", "$12,000+"] },
    Honda: { models: ["Civic 2016", "Accord 2015"], prices: ["$9,000", "$11,000", "$13,000+"] },
    BMW: { models: ["3 Series 2013", "X5 2012"], prices: ["$15,000", "$18,000", "$22,000+"] },
    Mercedes: { models: ["C-Class 2014", "E-Class 2013"], prices: ["$16,000", "$20,000", "$25,000+"] },
  };

 
  const activeData = carType === "new" ? newCarData : oldCarData;
  const makes = Object.keys(activeData);
  const models = selectedMake ? activeData[selectedMake].models : [];
  const prices = selectedMake ? activeData[selectedMake].prices : [];

  return (
    <section className="w-[95%] mx-auto py-10">
      {/* Car Image */}
      <motion.div
        className="w-full h-[370px]  rounded-lg overflow-hidden shadow-md mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={carMobileShow}
          alt={language === "EN" ? "Luxury Car" : "লাক্সারি গাড়ি"}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Search Box */}
      <motion.div
        className="bg-white rounded-lg shadow-xl p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          {language === "EN" ? "Find Your Right Car" : "আপনার সঠিক গাড়ি খুঁজুন"}
        </h2>

        {/* Car Type Buttons */}
        <div className="flex gap-3 justify-center mb-5">
          <button
            onClick={() => {
              setCarType("new");
              setSelectedMake("");
              setSelectedModel("");
              setSelectedPrice("");
            }}
            className={`px-4 py-2 rounded-md font-medium text-sm ${
              carType === "new"
                ? "bg-[#273c75] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {language === "EN" ? "New Car" : "নতুন গাড়ি"}
          </button>
          <button
            onClick={() => {
              setCarType("old");
              setSelectedMake("");
              setSelectedModel("");
              setSelectedPrice("");
            }}
            className={`px-4 py-2 rounded-md font-medium text-sm ${
              carType === "old"
                ? "bg-[#273c75] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {language === "EN" ? "Old Car" : "পুরানো গাড়ি"}
          </button>
        </div>

        {/* Radio Buttons */}
        <div className="flex gap-4 justify-center mb-5">
          <label className="flex items-center gap-1 cursor-pointer text-sm">
            <input
              type="radio"
              value="budget"
              checked={searchBy === "budget"}
              onChange={() => setSearchBy("budget")}
            />
            <span>{language === "EN" ? "By Budget" : "বাজেট অনুযায়ী"}</span>
          </label>
          <label className="flex items-center gap-1 cursor-pointer text-sm">
            <input
              type="radio"
              value="model"
              checked={searchBy === "model"}
              onChange={() => setSearchBy("model")}
            />
            <span>{language === "EN" ? "By Model" : "মডেল অনুযায়ী"}</span>
          </label>
        </div>

        {/* Conditional Dropdowns */}
        {searchBy === "budget" && (
          <div className="mb-5">
            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="">
                {language === "EN" ? "Select Price" : "মূল্য নির্বাচন করুন"}
              </option>
              {carType === "new"
                ? Object.values(newCarData).flatMap((c) => c.prices).map((p, idx) => (
                    <option key={idx} value={p}>
                      {p}
                    </option>
                  ))
                : Object.values(oldCarData).flatMap((c) => c.prices).map((p, idx) => (
                    <option key={idx} value={p}>
                      {p}
                    </option>
                  ))}
            </select>
          </div>
        )}

        {searchBy === "model" && (
          <div className="mb-5">
            <select
              value={selectedMake}
              onChange={(e) => {
                setSelectedMake(e.target.value);
                setSelectedModel("");
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-3"
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

            {selectedMake && (
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
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
            )}
          </div>
        )}

        {/* Search Button */}
        <button
          className="w-full py-2 bg-[#273c75] text-white rounded-md font-semibold hover:bg-[#192a56] transition text-sm"
          onClick={() =>
            alert(
              language === "EN"
                ? `Searching: ${
                    searchBy === "budget"
                      ? `${selectedPrice}`
                      : `${selectedMake} - ${selectedModel}`
                  }`
                : `অনুসন্ধান: ${
                    searchBy === "budget"
                      ? `${selectedPrice}`
                      : `${selectedMake} - ${selectedModel}`
                  }`
            )
          }
        >
          {language === "EN" ? "Search" : "সার্চ করুন"}
        </button>
      </motion.div>
    </section>
  );
}
