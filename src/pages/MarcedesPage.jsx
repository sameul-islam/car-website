import React, { useState, useMemo, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import products from "../product";
import { LanguageContext } from "../context/LanguageContext";
import heroImg from "../assets/brands/marcedes.jpg"

export default function MercedesPage() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  const mercedesCars = useMemo(
    () => products.filter((p) => p.brand === "Mercedes"),
    []
  );

  const [visibleCount, setVisibleCount] = useState(10);
  const [filters, setFilters] = useState({
    model: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredCars = useMemo(() => {
    return mercedesCars.filter((car) => {
      const matchesModel = filters.model
        ? car.model.toLowerCase().includes(filters.model.toLowerCase())
        : true;
      const matchesMin = filters.minPrice
        ? car.price >= Number(filters.minPrice)
        : true;
      const matchesMax = filters.maxPrice
        ? car.price <= Number(filters.maxPrice)
        : true;
      return matchesModel && matchesMin && matchesMax;
    });
  }, [mercedesCars, filters]);

  const visibleCars = filteredCars.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredCars.length));
  };

  return (
    <div className="min-h-screen mt-30 bg-gray-50">
      {/* Hero Section with Image */}
      <section
        className="relative bg-cover bg-center h-64 md:h-[600px] m-auto md:w-[82%] flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/40 bg-opacity-40"></div>
        <h1 className="relative text-3xl md:text-5xl font-bold mb-2 z-10">
          {language === "EN"
            ? "Mercedes Cars Collection"
            : "মার্সিডিজ গাড়ির কালেকশন"}
        </h1>
        <p className="relative text-sm md:text-lg z-10">
          {language === "EN"
            ? "Explore our latest Mercedes models with detailed specs and pricing."
            : "আমাদের সর্বশেষ মার্সিডিজ মডেলগুলো বিস্তারিত স্পেসিফিকেশন এবং মূল্যের সাথে অন্বেষণ করুন।"}
        </p>
      </section>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 mt-10 px-4 md:px-0">
        {/* Sidebar Filter */}
        <aside className="hidden md:block md:w-1/4 bg-white p-6 rounded-xl shadow-md sticky top-20 h-fit">
          <h2 className="text-xl font-semibold mb-4">
            {language === "EN" ? "Filter Cars" : "গাড়ি ফিল্টার করুন"}
          </h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium">
              {language === "EN" ? "Model" : "মডেল"}
            </label>
            <input
              type="text"
              value={filters.model}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, model: e.target.value }))
              }
              placeholder={language === "EN" ? "Enter model" : "মডেল লিখুন"}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">
              {language === "EN" ? "Min Price" : "ন্যূনতম মূল্য"}
            </label>
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, minPrice: e.target.value }))
              }
              placeholder="$"
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">
              {language === "EN" ? "Max Price" : "সর্বাধিক মূল্য"}
            </label>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))
              }
              placeholder="$"
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            onClick={() => setFilters({ model: "", minPrice: "", maxPrice: "" })}
            className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 transition"
          >
            {language === "EN" ? "Reset Filters" : "ফিল্টার রিসেট"}
          </button>
        </aside>

        {/* Cars Grid */}
        <main className="md:flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={car.image}
                alt={language === "EN" ? car.name_en : car.name_bn}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-1">
                  {language === "EN" ? car.name_en : car.name_bn}
                </h3>
                <p className="text-gray-600 mb-2">${car.price}</p>
                <p className="text-sm text-gray-500 flex-1">
                  {language === "EN" ? car.shortDesc_en : car.shortDesc_bn}
                </p>
                <button
                  onClick={() => navigate("/product/" + car.id)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                  {language === "EN" ? "View Details" : "বিস্তারিত দেখুন"}
                </button>
              </div>
            </div>
          ))}

          {/* Load More Button */}
          {visibleCount < filteredCars.length && (
            <div className="col-span-full flex justify-center mt-4">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
              >
                {language === "EN" ? "Load More" : "আরও দেখুন"}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
