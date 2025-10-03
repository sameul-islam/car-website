import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { SearchContext } from "../components/Navbar/SearchContext";
import products from "../product";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function AllProductsPage() {
  const { language } = useContext(LanguageContext);
  const { searchQuery, filterType } = useContext(SearchContext);
  const navigate = useNavigate();

  // Filter states
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTransmission, setSelectedTransmission] = useState("all");
  const [selectedModel, setSelectedModel] = useState("all");
  const [selectedMileage, setSelectedMileage] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100]); // K USD
  const [yearRange, setYearRange] = useState([2000, 2030]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  // Intersection observer for lazy loading
  const { ref, inView } = useInView({ threshold: 1 });

  // Dynamic filter options
  const brands = ["all", ...new Set(products.map((p) => p.brand).filter(Boolean))];
  const categories = ["all", ...new Set(products.map((p) => p.category).filter(Boolean))];
  const transmissions = ["all", ...new Set(products.map((p) => p.transmission).filter(Boolean))];
  const models = ["all", ...new Set(products.map((p) => p.model).filter(Boolean))];
  const mileages = ["all", ...new Set(products.map((p) => p.mileage).filter(Boolean))];
  const types = ["all", ...new Set(products.map((p) => p.type).filter(Boolean))];

  // Filter logic
  useEffect(() => {
    const filtered = products.filter((p) => {
      const typeMatch = selectedType === "all" || p.type === selectedType;
      const brandMatch = selectedBrand === "all" || p.brand === selectedBrand;
      const categoryMatch = selectedCategory === "all" || p.category === selectedCategory;
      const transmissionMatch = selectedTransmission === "all" || p.transmission === selectedTransmission;
      const modelMatch = selectedModel === "all" || p.model === selectedModel;
      const mileageMatch = selectedMileage === "all" || p.mileage === selectedMileage;
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      const yearMatch = p.year >= yearRange[0] && p.year <= yearRange[1];
      const query = searchQuery.toLowerCase();
      const queryMatch =
        p.name_en?.toLowerCase().includes(query) ||
        p.name_bn?.toLowerCase().includes(query) ||
        p.brand?.toLowerCase().includes(query) ||
        p.model?.toLowerCase().includes(query) ||
        p.category?.toLowerCase().includes(query);
      return typeMatch && brandMatch && categoryMatch && transmissionMatch && modelMatch && mileageMatch && priceMatch && yearMatch && queryMatch;
    });
    setFilteredProducts(filtered);
  }, [searchQuery, filterType, selectedBrand, selectedCategory, selectedTransmission, selectedModel, selectedMileage, selectedType, priceRange, yearRange]);

  // Lazy load more when in view
  useEffect(() => {
    if (inView) {
      setVisibleCount((prev) => Math.min(prev + 12, filteredProducts.length));
    }
  }, [inView, filteredProducts.length]);

  return (
    <div className="container mt-30 mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row mt-6">
        {/* Sidebar filters */}
        <aside className="w-full md:w-1/4 mb-4 md:mb-0 md:pr-4 md:sticky md:top-24">
          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{language === "EN" ? "Brand" : "ব্র্যান্ড"}</h3>
            <select className="w-full border px-3 py-2 rounded" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
              {brands.map((b) => (<option key={b} value={b}>{b}</option>))}
            </select>
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{language === "EN" ? "Category" : "ক্যাটাগরি"}</h3>
            <select className="w-full border px-3 py-2 rounded" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
            </select>
          </div>

          {/* Transmission */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{language === "EN" ? "Transmission" : "ট্রান্সমিশন"}</h3>
            <select className="w-full border px-3 py-2 rounded" value={selectedTransmission} onChange={(e) => setSelectedTransmission(e.target.value)}>
              {transmissions.map((t) => (<option key={t} value={t}>{t}</option>))}
            </select>
          </div>

          {/* Model */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{language === "EN" ? "Model" : "মডেল"}</h3>
            <select className="w-full border px-3 py-2 rounded" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
              {models.map((m) => (<option key={m} value={m}>{m}</option>))}
            </select>
          </div>

          {/* Mileage */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{language === "EN" ? "Mileage" : "মাইলেজ"}</h3>
            <select className="w-full border px-3 py-2 rounded" value={selectedMileage} onChange={(e) => setSelectedMileage(e.target.value)}>
              {mileages.map((m) => (<option key={m} value={m}>{m}</option>))}
            </select>
          </div>

          {/* Type */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{language === "EN" ? "Type" : "টাইপ"}</h3>
            <div className="flex flex-col">
              {types.map((t) => (
                <label key={t} className="inline-flex items-center mb-1">
                  <input type="radio" value={t} checked={selectedType === t} onChange={() => setSelectedType(t)} className="mr-2"/>
                  {t}
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{language === "EN" ? "Price Range (K USD)" : "মূল্য সীমা (হাজার USD)"}</h3>
            <Slider range min={0} max={100} value={priceRange} onChange={setPriceRange}/>
            <p className="mt-1">{priceRange[0]}K - {priceRange[1]}K</p>
          </div>

          {/* Year Range */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">{language === "EN" ? "Year Range" : "বছরের সীমা"}</h3>
            <Slider range min={2000} max={2030} value={yearRange} onChange={setYearRange}/>
            <p className="mt-1">{yearRange[0]} - {yearRange[1]}</p>
          </div>
        </aside>

        Products Grid
        <section className="w-full mt-4 md:mt-0 md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.slice(0, visibleCount).map((p) => (
            <div key={p.id} className="border rounded-md overflow-hidden shadow hover:shadow-lg transition duration-300 flex flex-col">
              <img src={p.image} alt={p.name_en} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="font-semibold text-lg">{language === "EN" ? p.name_en : p.name_bn}</h4>
                  <p className="text-gray-600 text-sm mt-1">{language === "EN" ? p.shortDesc_en : p.shortDesc_bn}</p>
                  <p className="mt-2 font-semibold">{p.brand} | {p.model}</p>
                  <p className="mt-1">{p.category} | ${p.price}K</p>
                  {p.year && <p className="mt-1">{p.year}</p>}
                  {p.mileage && <p className="mt-1">{p.mileage}</p>}
                  {p.transmission && <p className="mt-1">{p.transmission}</p>}
                  {p.type && <p className="mt-1">{p.type}</p>}
                </div>
                {/* View Details Button */}
       <button  onClick={() => navigate(`/product/${p.id}`)}
           className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700  transition duration-300"
            >
          {language === "EN" ? "View Details" : "বিস্তারিত দেখুন"}
          </button> 
              </div>
           
            </div>
          ))}
          {/* No products message */}
          {filteredProducts.length === 0 && (
            <p className="text-center col-span-full text-gray-500">
              {language === "EN" ? "No products found." : "কোনো প্রোডাক্ট পাওয়া যায়নি।"}
            </p>
          )}
        </section>
      </div>

      {/* Invisible div for lazy loading */}
      {visibleCount < filteredProducts.length && <div ref={ref} className="h-6"></div>}
    </div>
  );
}
