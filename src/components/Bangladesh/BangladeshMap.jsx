// import React, { useMemo, useState, useContext } from "react";
// import { LanguageContext } from "../../context/LanguageContext";
// import { useNavigate } from "react-router-dom"; 

// export default function BangladeshMap({ embedUrl }) {
//   const { language } = useContext(LanguageContext);
//   const navigate = useNavigate();

//   const defaultUrl =
//     "https://visitedplaces.com/embed/?map=bangladesh&projection=geoMercator&theme=dark-green&water=0&graticule=0&names=1&duration=2400&placeduration=180&slider=0.05&autoplay=1&autozoom=step&autostep=0&home=BD-C&places=~BD-B_BD-A_BD-D_BD-E_BD-H_BD-G_BD-F";

//   const baseEmbedUrl = embedUrl || defaultUrl;

//   const divisions = [
//     { id: "dhaka", labelEN: "Dhaka", labelBN: "ঢাকা", placeCode: "BD-C" },
//     { id: "chattogram", labelEN: "Chattogram", labelBN: "চট্টগ্রাম", placeCode: "BD-B" },
//     { id: "rajshahi", labelEN: "Rajshahi", labelBN: "রাজশাহী", placeCode: "BD-E" },
//     { id: "khulna", labelEN: "Khulna", labelBN: "খুলনা", placeCode: "BD-D" },
//     { id: "barishal", labelEN: "Barisal", labelBN: "বরিশাল", placeCode: "BD-A" },
//     { id: "sylhet", labelEN: "Sylhet", labelBN: "সিলেট", placeCode: "BD-G" },
//     { id: "mymensingh", labelEN: "Mymensingh", labelBN: "ময়মনসিংহ", placeCode: "BD-H" },
//     { id: "rangpur", labelEN: "Rangpur", labelBN: "রংপুর", placeCode: "BD-F" },
//   ];

//   const [selected, setSelected] = useState(null);

//   const iframeSrc = useMemo(() => {
//     const url = new URL(baseEmbedUrl);
//     if (selected) {
//       const sel = divisions.find((d) => d.id === selected);
//       if (sel && sel.placeCode) {
//         url.searchParams.set("home", sel.placeCode);
//       }
//     }
//     return url.toString();
//   }, [baseEmbedUrl, selected]);

//   const handleViewProducts = () => {
//     if (selected) {
//       navigate(`/products/${selected}`);
//     }
//   };

//   return (
//     <section className="bg-white mt-14 py-8 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
//         {/* Left: Division list */}
//         <div className="col-span-1 text-center">
//           <h3 className="text-lg text-[#273c75] bg-[#f5f6fa] p-5 rounded-md shadow-md hover:shadow-2xl font-semibold mb-6">
//           {language === "EN" ? 'Select' : "বিভাগ নির্বা"}
//           <span className="text-amber-600">{language === "EN" ? "Division" : "চন করুন"}</span>
//           </h3>

//           <div className="flex flex-col gap-3">
//             {divisions.map((d) => (
//               <button
//                 key={d.id}
//                 onClick={() => setSelected(d.id)}
//                 className={`text-center px-4 py-2 rounded-lg font-medium transition ${
//                   selected === d.id
//                     ? "bg-orange-500 text-white shadow"
//                     : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50"
//                 }`}
//                 aria-pressed={selected === d.id}
//               >
//                 <div className="text-sm">
//                   {language === "EN" ? d.labelEN : d.labelBN}
//                 </div>
//               </button>
//             ))}

//             <button
//               onClick={() => setSelected(null)}
//               className="mt-3 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 hover:bg-gray-50"
//             >
//               {language === "EN" ? "Clear selection" : "বাছাই বাতিল করুন"}
//             </button>

//             {/* ✅ View Products Button */}
//             <button
//               onClick={handleViewProducts}
//               disabled={!selected}
//               className={`mt-3 px-4 py-2 rounded-lg font-semibold text-white transition ${
//                 selected
//                   ? "bg-orange-500 hover:bg-orange-600"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//             >
//               {language === "EN" ? "View Products" : "প্রোডাক্ট দেখুন"}
//             </button>
//           </div>
//         </div>

//         {/* Right: Iframe map (span remaining columns) */}
//         <div className="col-span-1 lg:col-span-3">
//           <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
//             <div className="w-full h-[55vh] sm:h-[50vh] md:h-[48vh] lg:h-[60vh] xl:h-[72vh]">
//               <iframe
//                 title="Bangladesh Map"
//                 src={iframeSrc}
//                 style={{ width: "100%", height: "100%", border: "0" }}
//                 allowFullScreen
//               />
//             </div>
//           </div>

//           {/* Selected label & small helper */}
//           <div className="mt-4 flex items-center justify-between gap-4">
//             <div>
//               {selected ? (
//                 <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 text-orange-800">
//                   <strong className="capitalize">
//                     {language === "EN"
//                       ? divisions.find((d) => d.id === selected)?.labelEN
//                       : divisions.find((d) => d.id === selected)?.labelBN}
//                   </strong>
//                 </span>
//               ) : (
//                 <span className="text-sm text-gray-500">
//                   {language === "EN" ? "No division selected" : "কোনো বিভাগ নির্বাচিত নয়"}
//                 </span>
//               )}
//             </div>

//             <div className="text-sm text-gray-500">
//               {language === "EN"
//                 ? "Tip: tap a division to center the map."
//                 : "সাহায্য: মানচিত্র কেন্দ্রীভূত করতে একটি বিভাগে ট্যাপ করুন।"}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














import React, { useMemo, useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
// import { useNavigate } from "react-router-dom";

export default function BangladeshMap({ embedUrl }) {
  const { language } = useContext(LanguageContext);
  // const navigate = useNavigate(); 

  const defaultUrl =
    "https://visitedplaces.com/embed/?map=bangladesh&projection=geoMercator&theme=dark-green&water=0&graticule=0&names=1&duration=2400&placeduration=180&slider=0.05&autoplay=1&autozoom=step&autostep=0&home=BD-C&places=~BD-B_BD-A_BD-D_BD-E_BD-H_BD-G_BD-F";

  const baseEmbedUrl = embedUrl || defaultUrl;

  const divisions = [
    { id: "dhaka", labelEN: "Dhaka", labelBN: "ঢাকা", placeCode: "BD-C" },
    { id: "chattogram", labelEN: "Chattogram", labelBN: "চট্টগ্রাম", placeCode: "BD-B" },
    { id: "rajshahi", labelEN: "Rajshahi", labelBN: "রাজশাহী", placeCode: "BD-E" },
    { id: "khulna", labelEN: "Khulna", labelBN: "খুলনা", placeCode: "BD-D" },
    { id: "barishal", labelEN: "Barisal", labelBN: "বরিশাল", placeCode: "BD-A" },
    { id: "sylhet", labelEN: "Sylhet", labelBN: "সিলেট", placeCode: "BD-G" },
    { id: "mymensingh", labelEN: "Mymensingh", labelBN: "ময়মনসিংহ", placeCode: "BD-H" },
    { id: "rangpur", labelEN: "Rangpur", labelBN: "রংপুর", placeCode: "BD-F" },
  ];

  const [selected, setSelected] = useState(null);

  const iframeSrc = useMemo(() => {
    const url = new URL(baseEmbedUrl);
    if (selected) {
      const sel = divisions.find((d) => d.id === selected);
      if (sel && sel.placeCode) {
        url.searchParams.set("home", sel.placeCode);
      }
    }
    return url.toString();
  }, [baseEmbedUrl, selected]);

  const handleViewProducts = () => {
    if (selected) {
      const sel = divisions.find((d) => d.id === selected);
      const divisionName = language === "EN" ? sel.labelEN : sel.labelBN;

    
      alert(` You have selected: ${divisionName} `);


      // navigate(`/products/${selected}`); 
    }
  };

  return (
    <section className="bg-white mt-14 py-8 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left: Division list */}
        <div className="col-span-1 text-center">
          <h3 className="text-lg text-[#273c75] bg-[#f5f6fa] p-5 rounded-md shadow-md hover:shadow-2xl font-semibold mb-6">
            {language === "EN" ? 'Select' : "বিভাগ নির্বা"}
            <span className="text-amber-600">{language === "EN" ? "Division" : "চন করুন"}</span>
          </h3>

          <div className="flex flex-col gap-3">
            {divisions.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelected(d.id)}
                className={`text-center px-4 py-2 rounded-lg font-medium transition ${
                  selected === d.id
                    ? "bg-orange-500 text-white shadow"
                    : "bg-white border border-gray-200 text-gray-800 hover:bg-gray-50"
                }`}
                aria-pressed={selected === d.id}
              >
                <div className="text-sm">
                  {language === "EN" ? d.labelEN : d.labelBN}
                </div>
              </button>
            ))}

            <button
              onClick={() => setSelected(null)}
              className="mt-3 px-4 py-2 rounded-lg text-sm bg-white border border-gray-200 hover:bg-gray-50"
            >
              {language === "EN" ? "Clear selection" : "বাছাই বাতিল করুন"}
            </button>

            {/* View Products Button */}
            <button
              onClick={handleViewProducts}
              disabled={!selected}
              className={`mt-3 px-4 py-2 rounded-lg font-semibold text-white transition ${
                selected
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {language === "EN" ? "View Products" : "প্রোডাক্ট দেখুন"}
            </button>
          </div>
        </div>

        {/* Right: Iframe map (span remaining columns) */}
        <div className="col-span-1 lg:col-span-3">
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="w-full h-[55vh] sm:h-[50vh] md:h-[48vh] lg:h-[60vh] xl:h-[72vh]">
              <iframe
                title="Bangladesh Map"
                src={iframeSrc}
                style={{ width: "100%", height: "100%", border: "0" }}
                allowFullScreen
              />
            </div>
          </div>

          {/* Selected label & small helper */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              {selected ? (
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 text-orange-800">
                  <strong className="capitalize">
                    {language === "EN"
                      ? divisions.find((d) => d.id === selected)?.labelEN
                      : divisions.find((d) => d.id === selected)?.labelBN}
                  </strong>
                </span>
              ) : (
                <span className="text-sm text-gray-500">
                  {language === "EN" ? "No division selected" : "কোনো বিভাগ নির্বাচিত নয়"}
                </span>
              )}
            </div>

            <div className="text-sm text-gray-500">
              {language === "EN"
                ? "Tip: tap a division to center the map."
                : "সাহায্য: মানচিত্র কেন্দ্রীভূত করতে একটি বিভাগে ট্যাপ করুন।"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
