// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import products from '../product';
// import { LanguageContext } from '../context/LanguageContext';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const { language } = useContext(LanguageContext);

//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, [id]);

//   const product = products.find(p => p.id === Number(id));

//   if (!product) return (
//     <div className="flex justify-center items-center min-h-screen">
//       <h2 className="text-2xl font-bold">{language === 'EN' ? 'Product not found' : 'গাড়ি পাওয়া যায়নি'}</h2>
//     </div>
//   );

//   return (
//     <div className="min-h-screen mt-30 bg-gray-50   flex justify-center">
//       <div className="w-[98%] lg:w-[82%] bg-white rounded-2xl shadow-lg overflow-hidden">

//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:p-6">
//           {/* Main Image */}
//           <img 
//             src={product.image} 
//             alt={language === 'EN' ? product.name_en : product.name_bn} 
//             className="w-full h-fit  object-cover rounded-md" 
//             loading="lazy" 
//           />

//           {/* Thumbnails and Info */}
//           <div className="flex flex-col gap-4">
//             <div className="grid grid-cols-2 gap-2">
//               {[product.image, product.image, product.image, product.image].map((img, idx) => (
//                 <img 
//                   key={idx} 
//                   src={img} 
//                   alt={`thumbnail-${idx}`} 
//                   className="w-full h-fit object-cover rounded-md" 
//                   loading="lazy" 
//                 />
//               ))}
//             </div>

//             <div>
//               <h2 className="text-3xl font-bold">{language === 'EN' ? product.name_en : product.name_bn}</h2>
//               <p className="text-gray-600 mb-2">{product.brand} | {product.model}</p>
//               <p className="text-xl font-semibold mb-4">${product.price}</p>
//               <p className="text-gray-700 mb-4">{language === 'EN' ? product.description_en : product.description_bn}</p>
//             </div>

//             <div className="flex gap-4">
//               <button className="flex-1 bg-sky-600 text-white py-3 rounded-lg font-semibold hover:bg-sky-700 transition">
//           <Link to='/loanform'>     {language === 'EN' ? 'Apply For Loan' : 'ঋণের জন্য আবেদন করুন'}     </Link> 
//               </button>
//               <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition" onClick={() => navigate('/buy', {state: {product} })}>
//           {language === 'EN' ? 'Buy Now' : 'এখন কিনুন'}  
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Details Table */}
//         <div className="p-6 overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2">{language === 'EN' ? 'Property' : 'প্রপার্টি'}</th>
//                 <th className="px-4 py-2">{language === 'EN' ? 'Value' : 'মান'}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[
//                 ['Brand', product.brand],
//                 ['Model', product.model],
//                 ['Year', product.year],
//                 ['Price (USD)', `$${product.price}`],
//                 ['Mileage (km)', product.mileage],
//                 ['Category', product.category]
//               ].map(([label, value], idx) => (
//                 <tr key={idx} className="border-t">
//                   <td className="px-4 py-2">
//                     {language === 'EN' ? label : 
//                       label === 'Brand' ? 'ব্র্যান্ড' :
//                       label === 'Model' ? 'মডেল' :
//                       label === 'Year' ? 'সাল' :
//                       label === 'Price (USD)' ? 'মূল্য (USD)' :
//                       label === 'Mileage (km)' ? 'মাইলেজ (কিমি)' :
//                       'ক্যাটাগরি'}
//                   </td>
//                   <td className="px-4 py-2">{value}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Optional Description Box */}
//         <div className="p-6 bg-gray-100 rounded-xl mt-6">
//           <h3 className="text-xl font-semibold mb-2">{language === 'EN' ? 'Additional Information' : 'অতিরিক্ত তথ্য'}</h3>
//           <p className="text-gray-700 text-sm">
//             {language === 'EN' ? 'This section can include any additional information about the car, warranty details, or special notes.' : 'এই সেকশনটিতে গাড়ি সম্পর্কিত অতিরিক্ত তথ্য, ওয়ারেন্টি বা বিশেষ নোট অন্তর্ভুক্ত করা যেতে পারে।'}
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }














import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../product';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const product = products.find(p => p.id === Number(id));

  if (!product) return (
    <div className="flex justify-center items-center min-h-screen">
      <h2 className="text-2xl font-bold">{language === 'EN' ? 'Product not found' : 'গাড়ি পাওয়া যায়নি'}</h2>
    </div>
  );

  // Related Cars: একই ক্যাটাগরির ৮টি কার নির্বাচন
  const relatedCars = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 8);

  const handleViewDetails = (carId) => {
    navigate(`/product/${carId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen mt-30 bg-gray-50 flex flex-col items-center">

      <div className="w-[98%] lg:w-[82%] bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:p-6">
          <img 
            src={product.image} 
            alt={language === 'EN' ? product.name_en : product.name_bn} 
            className="w-full h-fit object-cover rounded-md" 
            loading="lazy" 
          />

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              {[product.image, product.image, product.image, product.image].map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`thumbnail-${idx}`} 
                  className="w-full h-fit object-cover rounded-md" 
                  loading="lazy" 
                />
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-bold">{language === 'EN' ? product.name_en : product.name_bn}</h2>
              <p className="text-gray-600 mb-2">{product.brand} | {product.model}</p>
              <p className="text-xl font-semibold mb-4">${product.price}</p>
              <p className="text-gray-700 mb-4">{language === 'EN' ? product.description_en : product.description_bn}</p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-sky-600 text-white py-3 rounded-lg font-semibold hover:bg-sky-700 transition">
                <Link to='/loanform'> {language === 'EN' ? 'Apply For Loan' : 'ঋণের জন্য আবেদন করুন'} </Link>
              </button>
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition" onClick={() => navigate('/buy', {state: {product}})}>
                {language === 'EN' ? 'Buy Now' : 'এখন কিনুন'}
              </button>
            </div>
          </div>
        </div>

        {/* Details Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">{language === 'EN' ? 'Property' : 'প্রপার্টি'}</th>
                <th className="px-4 py-2">{language === 'EN' ? 'Value' : 'মান'}</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Brand', product.brand],
                ['Model', product.model],
                ['Year', product.year],
                ['Price (USD)', `$${product.price}`],
                ['Mileage (km)', product.mileage],
                ['Category', product.category]
              ].map(([label, value], idx) => (
                <tr key={idx} className="border-t">
                  <td className="px-4 py-2">
                    {language === 'EN' ? label : 
                      label === 'Brand' ? 'ব্র্যান্ড' :
                      label === 'Model' ? 'মডেল' :
                      label === 'Year' ? 'সাল' :
                      label === 'Price (USD)' ? 'মূল্য (USD)' :
                      label === 'Mileage (km)' ? 'মাইলেজ (কিমি)' :
                      'ক্যাটাগরি'}
                  </td>
                  <td className="px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Optional Description Box */}
        <div className="p-6 bg-gray-100 rounded-xl mt-6">
          <h3 className="text-xl font-semibold mb-2">{language === 'EN' ? 'Additional Information' : 'অতিরিক্ত তথ্য'}</h3>
          <p className="text-gray-700 text-sm">
            {language === 'EN' ? 'This section can include any additional information about the car, warranty details, or special notes.' : 'এই সেকশনটিতে গাড়ি সম্পর্কিত অতিরিক্ত তথ্য, ওয়ারেন্টি বা বিশেষ নোট অন্তর্ভুক্ত করা যেতে পারে।'}
          </p>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <div className="p-6 mt-6">
            <h3 className="text-2xl font-semibold mb-4">{language === 'EN' ? 'Related Cars' : 'সম্পর্কিত গাড়ি'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedCars.map((car) => (
                <div key={car.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                  <img src={car.image} alt={language === 'EN' ? car.name_en : car.name_bn} className="w-full h-40 object-cover" loading="lazy"/>
                  <div className="p-3 flex flex-col flex-1">
                    <h4 className="font-semibold text-lg mb-1">{language === 'EN' ? car.name_en : car.name_bn}</h4>
                    <p className="text-gray-600 mb-2">${car.price}</p>
                    <button onClick={() => handleViewDetails(car.id)} className="mt-auto bg-sky-600 text-white py-2 rounded-lg font-medium hover:bg-sky-700 transition">
                      {language === 'EN' ? 'View Details' : 'বিস্তারিত দেখুন'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
