import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext";
import CarImage from "./CarImage";
import CarDescription from "./CarDescription";
import { cars } from "../../AdvancedCarCategories/CarList";
import CarSpecsTable from "./CarSpecsTable";
import RelatedCars from "./RelatedCars";
import Cta from '../../components/Cta';
import UpcomingCars from "../UpComingCars/UpcomingCars";

const CarDetailsPage = () => {
  const { language } = useContext(LanguageContext);
  const { id } = useParams();
  const car = cars.find(car => car.id === parseInt(id));

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  if (!car) {
    return <p className="text-center mt-10">Car not found</p>;
  }

  return (
    <section className="max-w-7xl mx-auto mt-24 py-12 px-4">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-12">
        <CarImage car={car} className="md:w-1/2 w-full" />
        <CarDescription car={car} className="md:w-1/2 w-full" />
      </div>

      {/* Specs Table */}
      <div className="mt-12">
        <CarSpecsTable car={car} />
      </div>

      {/* Related Cars */}
      <div className="mt-16">
        <RelatedCars currentCarId={car.id} />
      </div>

      <div className="mt-16">
         <UpcomingCars/>
      </div>

       <div className="mt-16">
        <Cta/>
       </div>

    </section>
  );
};

export default CarDetailsPage;

