import React, { useState, useMemo, useContext, useEffect, useRef } from 'react';
import products from '../product';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function AdvancedProductPage() {
  const { language } = useContext(LanguageContext);

  const LOAD_STEP = 10;
  const observerRef = useRef();
  const [viewCount, setViewCount] = useState(20);
  const [query, setQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState(new Set());
  const [category, setCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(5);
  const [maxPrice, setMaxPrice] = useState(40);
  const [minYear, setMinYear] = useState(2018);
  const [maxYear, setMaxYear] = useState(2025);
  const [maxMileage, setMaxMileage] = useState(999999);

  const brands = useMemo(() => Array.from(new Set(products.map(p => p.brand))).sort(), []);
  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category))).sort(), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(p => {
      if (p.price < minPrice || p.price > maxPrice) return false;
      if (p.year < minYear || p.year > maxYear) return false;
      const mileageNum = Number(String(p.mileage).replace(/[^0-9]/g, '')) || 0;
      if (mileageNum > maxMileage) return false;
      if (category !== 'All' && p.category !== category) return false;
      if (selectedBrands.size > 0 && !selectedBrands.has(p.brand)) return false;
      if (q) {
        const hay = `${p.name_en} ${p.name_bn} ${p.brand} ${p.model}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, minPrice, maxPrice, minYear, maxYear, maxMileage, category, selectedBrands]);

  const visible = filtered.slice(0, viewCount);

  const toggleBrand = (b) => {
    setViewCount(20);
    setSelectedBrands(prev => {
      const next = new Set(prev);
      if (next.has(b)) next.delete(b);
      else next.add(b);
      return next;
    });
  };

  const resetFilters = () => {
    setSelectedBrands(new Set());
    setCategory('All');
    setMinPrice(5);
    setMaxPrice(40);
    setMinYear(2018);
    setMaxYear(2025);
    setMaxMileage(999999);
    setQuery('');
    setViewCount(20);
  };


  useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) loadMore();
      });
    }, { threshold: 1 });
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [viewCount, filtered.length]);

  const loadMore = () => setViewCount(v => Math.min(filtered.length, v + LOAD_STEP));

  return (
    <div className="min-h-screen mt-20  flex justify-center">
      <div className="w-[98%] md:w-[82%]">

        {/* HERO */}
        <section className="relative rounded-md  overflow-hidden mb-8">
          <div className=" h-[400px]  md:h-[700px]  flex items-center justify-center">
            <img src={products[3]?.image} alt="hero" className="absolute inset-0 w-full  h-full object-cover " loading="lazy"/>
            <div className="relative z-10 text-center text-white max-w-3xl px-6">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{language === 'EN' ? 'Explore Premium Cars' : 'প্রিমিয়াম গাড়ি আবিষ্কার করুন'}</h1>
              <p className="text-md md:text-lg opacity-90 mb-6">{language === 'EN' ? 'Search, filter and find the perfect car.' : 'সার্চ, ফিল্টার এবং নিখুঁত গাড়ি খুঁজুন।'}</p>
              <div className="mx-auto w-full md:w-3/4">
                <label className="relative block">
                  <input value={query} onChange={e => { setQuery(e.target.value); setViewCount(20); }} placeholder={language === 'EN' ? 'Search by name, brand, model or year...' : 'নাম, ব্র্যান্ড, মডেল বা সাল অনুসারে খুঁজুন...'} className="w-full border border-gray-200 rounded-full py-3 pl-4 pr-12 text-gray-1"/>
                  <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full">{language === 'EN' ? 'Search' : 'সার্চ'}</button>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* PAGE BODY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* SIDEBAR */}
          <aside className="lg:col-span-3 bg-white rounded-2xl p-4 shadow-sm h-fit">
            <h3 className="font-semibold text-lg mb-4">{language === 'EN' ? 'Filters' : 'ফিল্টার'}</h3>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">{language === 'EN' ? 'Brands' : 'ব্র্যান্ড'}</div>
              <div className="flex flex-col gap-2 max-h-40 overflow-auto pr-2">
                {brands.map(b => (
                  <label key={b} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={selectedBrands.has(b)} onChange={() => toggleBrand(b)}/>
                    <span>{b}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">{language === 'EN' ? 'Category' : 'ক্যাটাগরি'}</div>
              <select value={category} onChange={e => { setCategory(e.target.value); setViewCount(20); }} className="w-full rounded-lg p-2 border">
                <option value="All">{language === 'EN' ? 'All' : 'সব'}</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">{language === 'EN' ? 'Price (USD)' : 'মূল্য (USD)'}</div>
              <div className="flex gap-2">
                <input type="number" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} className="w-1/2 rounded-lg p-2 border"/>
                <input type="number" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className="w-1/2 rounded-lg p-2 border"/>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">{language === 'EN' ? 'Model Year' : 'মডেল সাল'}</div>
              <div className="flex gap-2">
                <input type="number" value={minYear} onChange={e => setMinYear(Number(e.target.value))} className="w-1/2 rounded-lg p-2 border"/>
                <input type="number" value={maxYear} onChange={e => setMaxYear(Number(e.target.value))} className="w-1/2 rounded-lg p-2 border"/>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm text-gray-600 mb-2">{language === 'EN' ? 'Max Mileage (km)' : 'সর্বোচ্চ মাইলেজ (কিমি)'}</div>
              <input type="number" value={maxMileage === 999999 ? '' : maxMileage} onChange={e => setMaxMileage(Number(e.target.value))} className="w-full rounded-lg p-2 border"/>
            </div>

            <button onClick={resetFilters} className="w-full bg-red-500 text-white py-2 rounded-lg mt-2">{language === 'EN' ? 'Reset Filters' : 'ফিল্টার রিসেট'}</button>
          </aside>

          {/* PRODUCTS GRID */}
          <section className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visible.map(p => (
              <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                <img src={p.image} alt={language === 'EN' ? p.name_en : p.name_bn} className="h-48 w-full object-cover" loading="lazy"/>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{language === 'EN' ? p.name_en : p.name_bn}</h4>
                    <p className="text-sm text-gray-600 mb-2">{p.brand} | {p.model}</p>
                    <p className="text-sm text-gray-800 font-medium mb-2">${p.price}</p>
                  </div>
                  <div className="mt-2">
                    <Link to={`/product/${p.id}`} className="block text-center bg-sky-600 text-white py-2 rounded-lg">{language === 'EN' ? 'View Details' : 'বিস্তারিত দেখুন'}</Link>
                  </div>
                </div>
              </div>
            ))}
            {viewCount < filtered.length && <div ref={observerRef} className="col-span-full py-3 text-center text-gray-500">{language === 'EN' ? 'Scroll to load more...' : 'লোড করতে স্ক্রল করুন...'}</div>}
          </section>

        </div>
      </div>
    </div>
  );
}
