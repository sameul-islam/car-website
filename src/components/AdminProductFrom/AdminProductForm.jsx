
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";


export default function AdminProductForm({ onSubmit }) {
  // example options — replace or fetch from API
  const CATEGORY_OPTIONS = ["Sedan", "SUV", "Hatchback", "Truck", "Electric", "Van"];
  const BRAND_OPTIONS = ["Toyota", "Honda", "BMW", "Mercedes", "Audi", "Tesla"];
  const TRANSMISSION_OPTIONS = ["Automatic", "Manual", "CVT"];
  const FUEL_OPTIONS = ["Petrol", "Diesel", "Hybrid", "Electric"];

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const [brand, setBrand] = useState(BRAND_OPTIONS[0]);
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [color, setColor] = useState("");
  const [transmission, setTransmission] = useState(TRANSMISSION_OPTIONS[0]);
  const [fuel, setFuel] = useState(FUEL_OPTIONS[0]);
  const [stock, setStock] = useState(1);
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [isPublished, setIsPublished] = useState(true);


  const [images, setImages] = useState([]); 
  const fileInputRef = useRef(null);
  const dropRef = useRef(null);


  const [errors, setErrors] = useState({});

  const [dragOver, setDragOver] = useState(false);


  const formatPriceInput = (val) => {
    const cleaned = val.replace(/[^0-9.]/g, "");
    if (!cleaned) return "";
    const parts = cleaned.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

  const handleFileSelection = (filesList) => {
    const arr = Array.from(filesList).slice(0, 8);
    const newImgs = arr.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      isMain: false,
      id: Math.random().toString(36).slice(2, 9),
    }));

    setImages((prev) => {
      const merged = [...prev, ...newImgs];
      if (merged.length > 0 && !merged.some((i) => i.isMain)) {
        merged[0].isMain = true;
      }
      return merged.slice(0, 8); 
    });
  };

  const handleInputFiles = (e) => {
    handleFileSelection(e.target.files);
  };

  const removeImage = (id) => {
    setImages((prev) => {
      const filtered = prev.filter((i) => i.id !== id);
      if (!filtered.some((i) => i.isMain) && filtered.length) {
        filtered[0].isMain = true;
      }
      return filtered;
    });
  };

  const setMainImage = (id) => {
    setImages((prev) => prev.map((i) => ({ ...i, isMain: i.id === id })));
  };

  const addTag = () => {
    const val = tagInput.trim();
    if (!val) return;
    if (!tags.includes(val)) setTags((t) => [...t, val]);
    setTagInput("");
  };

  const removeTag = (t) => setTags((prev) => prev.filter((x) => x !== t));

  useEffect(() => {
    const el = dropRef.current;
    if (!el) return;
    const onDragOver = (e) => {
      e.preventDefault();
      setDragOver(true);
    };
    const onDragLeave = (e) => {
      setDragOver(false);
    };
    const onDrop = (e) => {
      e.preventDefault();
      setDragOver(false);
      if (e.dataTransfer?.files?.length) {
        handleFileSelection(e.dataTransfer.files);
      }
    };
    el.addEventListener("dragover", onDragOver);
    el.addEventListener("dragleave", onDragLeave);
    el.addEventListener("drop", onDrop);
    return () => {
      el.removeEventListener("dragover", onDragOver);
      el.removeEventListener("dragleave", onDragLeave);
      el.removeEventListener("drop", onDrop);
    };
  }, []);


  const validate = () => {
    const errs = {};
    if (!title.trim()) errs.title = "Title is required";
    if (!price || Number(price.toString().replace(/,/g, "")) <= 0) errs.price = "Price must be > 0";
    if (images.length === 0) errs.images = "At least 1 image is required";
    if (!category) errs.category = "Category required";
    if (!brand) errs.brand = "Brand required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }


    const payload = {
      title,
      shortDescription: shortDesc,
      description,
      price: Number(price.toString().replace(/,/g, "")),
      oldPrice: oldPrice ? Number(oldPrice.toString().replace(/,/g, "")) : null,
      category,
      brand,
      year: year || null,
      mileage: mileage || null,
      color,
      transmission,
      fuel,
      stock: Number(stock),
      location,
      tags,
      isPublished,
      images: images.map((i) => ({ name: i.file.name, size: i.file.size, type: i.file.type, isMain: i.isMain })),

    };


    if (onSubmit) onSubmit(payload);
    else {
      console.log("Prepared Payload:", payload);
      alert("Product prepared in console (front-end only). Implement backend to persist.");
    }
  };


  useEffect(() => {
    return () => {
      images.forEach((i) => URL.revokeObjectURL(i.url));
    };
  }, [images]);

  return (
    <div className="max-w-6xl mt-30 mx-auto p-6">
      <motion.h1 initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold mb-6">
        Admin — Create / Upload Product
      </motion.h1>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white rounded-lg shadow-md p-6">
        {/* top row: images + main form fields */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Image column */}
          <div className="md:col-span-5">
            <label className="block text-sm font-medium text-gray-700 mb-3">Product Images</label>

            <div
              ref={dropRef}
              className={`relative border-2 ${dragOver ? "border-orange-400 bg-orange-50/20" : "border-dashed border-gray-300"} rounded-md p-4 flex flex-col items-center justify-center`}
              aria-label="Drag and drop area"
            >
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Drag & drop images here or</p>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                >
                  Select Images
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleInputFiles}
                  className="hidden"
                />
                <p className="text-xs text-gray-400 mt-2">Max 8 images. JPG, PNG recommended.</p>
              </div>

              {errors.images && <p className="text-red-500 text-xs mt-3">{errors.images}</p>}
            </div>

            {/* previews */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {images.map((img) => (
                <div key={img.id} className="relative group">
                  <img src={img.url} alt="preview" className="w-full h-24 object-cover rounded-md border" />
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => setMainImage(img.id)}
                      title="Set as main"
                      className={`text-xs px-2 py-1 rounded-md ${img.isMain ? "bg-orange-500 text-white" : "bg-black bg-opacity-40 text-white"}`}
                    >
                      {img.isMain ? "Main" : "Main"}
                    </button>
                    <button
                      type="button"
                      onClick={() => removeImage(img.id)}
                      title="Remove"
                      className="text-xs px-2 py-1 rounded-md bg-red-500 text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* fields column */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`mt-1 block w-full rounded-md border ${errors.title ? "border-red-500" : "border-gray-300"} px-3 py-2`}
                placeholder="Ex: 2023 Toyota Camry XLE"
                aria-invalid={!!errors.title}
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  value={price}
                  onChange={(e) => setPrice(formatPriceInput(e.target.value))}
                  className={`mt-1 block w-full rounded-md border ${errors.price ? "border-red-500" : "border-gray-300"} px-3 py-2`}
                  placeholder="e.g. 25,000"
                />
                {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Old Price (optional)</label>
                <input
                  value={oldPrice}
                  onChange={(e) => setOldPrice(formatPriceInput(e.target.value))}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  placeholder="e.g. 28,000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2">
                  {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Brand</label>
                <select value={brand} onChange={(e) => setBrand(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2">
                  {BRAND_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input value={year} onChange={(e) => setYear(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" placeholder="e.g. 2023" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Mileage (km)</label>
                <input value={mileage} onChange={(e) => setMileage(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" placeholder="e.g. 12,000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Color</label>
                <input value={color} onChange={(e) => setColor(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" placeholder="e.g. White" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Transmission</label>
                <select value={transmission} onChange={(e) => setTransmission(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2">
                  {TRANSMISSION_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
                <select value={fuel} onChange={(e) => setFuel(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2">
                  {FUEL_OPTIONS.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
                <input type="number" min="0" value={stock} onChange={(e) => setStock(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" placeholder="City, Country" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Short Description</label>
              <textarea value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} rows={2} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Short summary for listing" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Full Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" placeholder="Detailed description, features, history..." />
            </div>

            <div className="flex flex-col md:flex-row gap-3 items-start">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Tags</label>
                <div className="flex gap-2 mt-2">
                  <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())} placeholder="Type and press Enter" className="w-full rounded-md border border-gray-300 px-3 py-2" />
                  <button type="button" onClick={addTag} className="px-4 py-2 bg-gray-800 text-white rounded-md">Add</button>
                </div>
                <div className="flex gap-2 flex-wrap mt-2">
                  {tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md flex items-center gap-2">
                      {t}
                      <button type="button" onClick={() => removeTag(t)} className="text-red-500 ml-1">×</button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Publish</label>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center">
                    <input type="checkbox" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} className="h-4 w-4" />
                    <span className="ml-2 text-sm text-gray-700">Published</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* submit row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            <p>All fields saved locally in this form. Implement backend to persist.</p>
          </div>

          <div className="flex items-center gap-3">
            <button type="button" onClick={() => {
              // reset quick
              setTitle(""); setShortDesc(""); setDescription(""); setPrice(""); setOldPrice(""); setCategory(CATEGORY_OPTIONS[0]); setBrand(BRAND_OPTIONS[0]);
              setYear(""); setMileage(""); setColor(""); setTransmission(TRANSMISSION_OPTIONS[0]); setFuel(FUEL_OPTIONS[0]); setStock(1); setLocation(""); setTags([]); setImages([]); setIsPublished(true);
              setErrors({});
            }} className="px-4 py-2 rounded-md border border-gray-300">Reset</button>

            <button type="submit" className="px-6 py-2 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">Save Product</button>
          </div>
        </div>
      </form>
    </div>
  );
}
