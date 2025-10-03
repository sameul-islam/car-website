import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import products from "../product";
import { useNavigate } from "react-router-dom";

export default function SuvCarsPage() {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

      useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  const suvCars = products.filter((car) => car.category === "SUV");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white shadow-md py-10 mb-6">
        <div className="w-[90%] mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#273c75] mb-2">
            {language === "EN" ? "SUV " : "এসইউভি "}
            <span className="text-amber-600">
              {language === "EN" ? "Cars" : "গাড়ি"}
            </span>
          </h1>
          <p className="text-gray-500">
            {language === "EN"
              ? "Explore our collection of SUV cars"
              : "আমাদের এসইউভি গাড়ির কালেকশন দেখুন"}
          </p>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="w-[90%] mx-auto pb-10">
        {suvCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {suvCars.map((car) => {
              // Safe price handling
              const price =
                car.price && !isNaN(Number(car.price))
                  ? Number(car.price).toLocaleString()
                  : "0";

              return (
                <div
                  key={car.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  <img
                    src={car.image}
                    alt={language === "EN" ? car.name_en : car.name_bn}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 flex flex-col gap-2">
                    <h2 className="font-semibold text-lg">
                      {language === "EN" ? car.name_en : car.name_bn}
                    </h2>
                    <p className="text-gray-600">
                      {car.brand || "-"} | {car.model || "-"}
                    </p>
                    <p className="text-[#40739e] font-bold">${price}</p>
                    <button
                      onClick={() => navigate(`/product/${car.id}`)}
                      className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      {language === "EN" ? "View Details" : "বিস্তারিত দেখুন"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500 text-xl">
            {language === "EN"
              ? "No SUV cars available"
              : "কোনো এসইউভি গাড়ি নেই"}
          </div>
        )}
      </section>
    </div>
  );
}
