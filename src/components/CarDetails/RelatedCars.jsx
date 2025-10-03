import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cars } from "../../AdvancedCarCategories/CarList";
import { LanguageContext } from "../../context/LanguageContext";
import { motion } from "framer-motion";

const RelatedCars = ({ currentCarId }) => {
  const { language } = useContext(LanguageContext);
  const relatedCars = cars.filter(car => car.id !== currentCarId).slice(0, 4);

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#273c75] mb-4">
        {language === "EN" ? "You May Also Like" : "আপনাকে পছন্দ হতে পারে"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {relatedCars.map(car => (
          <motion.div
            key={car.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={`/cars/${car.id}`}>
              <img
                src={car.image}
                alt={language === "EN" ? car.name.EN : car.name.BN}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="font-bold text-md">
                  {language === "EN" ? car.name.EN : car.name.BN}
                </h3>
                <p className="text-gray-600">{car.price}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCars;



