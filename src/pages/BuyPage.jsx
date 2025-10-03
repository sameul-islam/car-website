
import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import products from "../product";
import { LanguageContext } from "../context/LanguageContext";

const processPayment = (data) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ ok: true, id: Date.now() }), 2000)
  );

export default function BuyPage() {
  const { language } = useContext(LanguageContext);
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const stateProduct = location.state?.product || null;
  const paramId = params?.id ? Number(params.id) : null;
  const paramProduct = paramId ? products.find((p) => p.id === paramId) : null;
  const product = stateProduct || paramProduct;

  useEffect(() => {
    if (!product) {
      const t = setTimeout(() => navigate("/"), 800);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product, navigate]);

  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "Credit Card",
    cardNumber: "",
    expiry: "",
    cvv: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [orderResult, setOrderResult] = useState(null);

  const validateStep = () => {
    const e = {};
    if (step === 1) {
      if (!form.name || form.name.trim().length < 2)
        e.name =
          language === "EN" ? "Name is required" : "নাম আবশ্যক";
      if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email))
        e.email =
          language === "EN"
            ? "Valid email required"
            : "বৈধ ইমেইল আবশ্যক";
      if (!form.phone || form.phone.trim().length < 7)
        e.phone =
          language === "EN" ? "Valid phone required" : "বৈধ ফোন নম্বর আবশ্যক";
      if (!form.address || form.address.trim().length < 5)
        e.address =
          language === "EN" ? "Address is required" : "ঠিকানা আবশ্যক";
    } else if (step === 2 && form.payment === "Credit Card") {
      if (!/^\d{12,19}$/.test(form.cardNumber.replace(/\s+/g, "")))
        e.cardNumber =
          language === "EN" ? "Enter card number" : "কার্ড নম্বর লেখুন";
      if (!/^\d{2}\/\d{2}$/.test(form.expiry))
        e.expiry = language === "EN" ? "Expiry MM/YY" : "মেয়াদ MM/YY";
      if (!/^\d{3,4}$/.test(form.cvv))
        e.cvv = language === "EN" ? "CVV" : "CVV";
    }
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const nextStep = () => {
    const e = validateStep();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    const e = validateStep();
    setErrors(e);
    if (Object.keys(e).length) return;

    setLoading(true);
    try {
      const payload = {
        productId: product.id,
        productName: product.name_en,
        price: product.price,
        customer: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          address: form.address,
          notes: form.notes,
        },
        payment: {
          method: form.payment,
          cardLast4: form.cardNumber.replace(/\s+/g, "").slice(-4),
        },
      };

      const res = await processPayment(payload);

      if (res.ok) {
        setOrderResult({ success: true, orderId: res.id });
        setTimeout(() => navigate("/"), 1600);
      } else {
        setOrderResult({
          success: false,
          message: language === "EN" ? "Payment failed" : "পেমেন্ট ব্যর্থ",
        });
      }
    } catch (err) {
      setOrderResult({
        success: false,
        message:
          language === "EN"
            ? "Something went wrong"
            : "কিছু ভুল হয়েছে",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6">
          <p className="text-lg mb-2">
            {language === "EN" ? "No product specified." : "কোন পণ্য নির্ধারণ করা হয়নি।"}
          </p>
          <p className="text-sm text-gray-500">
            {language === "EN"
              ? "You will be redirected to home..."
              : "আপনি হোম পেজে নিয়ে যাওয়া হবে..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-30 bg-gray-50 flex justify-center p-4">
      <div className="w-full lg:w-4/5 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          {language === "EN" ? "Complete your purchase" : "আপনার ক্রয় সম্পূর্ণ করুন"}
        </h1>

        {/* Progress Indicator */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 text-center">
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                  step >= s ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"
                }`}
              >
                {s}
              </div>
              <p className="text-sm mt-2">
                {s === 1
                  ? language === "EN" ? "Customer" : "গ্রাহক"
                  : s === 2
                  ? language === "EN" ? "Payment" : "পেমেন্ট"
                  : language === "EN" ? "Review" : "রিভিউ"}
              </p>
            </div>
          ))}
        </div>

        <div className="md:flex gap-6">
          {/* Order Summary */}
          <aside className="md:w-1/3 bg-gray-50 p-4 rounded-lg shadow-sm mb-6 md:mb-0">
            <img
              src={product.image}
              alt={product.name_en}
              className="w-full h-fit object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h2 className="font-semibold">{language === "EN" ? product.name_en : product.name_bn}</h2>
            <p className="text-sm text-gray-600">{product.brand} • {product.model}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <p className="text-xs text-gray-500 mt-3">
              {language === "EN" ? "Shipping & taxes calculated at checkout" : "শিপিং ও কর চেকআউটে গণনা করা হবে"}
            </p>
          </aside>

          {/* Step Form */}
          <main className="md:flex-1">
            {!orderResult ? (
              <>
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === "EN" ? "Full name" : "পুরো নাম"}
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        placeholder={language === "EN" ? "John Doe" : "তোমার নাম"}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === "EN" ? "Email" : "ইমেইল"}
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        placeholder="name@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === "EN" ? "Phone" : "ফোন"}
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        placeholder="+8801..."
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === "EN" ? "Address" : "ঠিকানা"}
                      </label>
                      <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        placeholder={language === "EN" ? "Street, City, ZIP" : "সড়ক, শহর, পোস্টকোড"}
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        {language === "EN" ? "Payment method" : "পেমেন্ট পদ্ধতি"}
                      </label>
                      <select
                        name="payment"
                        value={form.payment}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                      >
                        <option value="Credit Card">{language === "EN" ? "Credit / Debit Card" : "ক্রেডিট / ডেবিট কার্ড"}</option>
                        <option value="Bank Transfer">{language === "EN" ? "Bank Transfer" : "ব্যাংক ট্রান্সফার"}</option>
                        <option value="Cash on Delivery">{language === "EN" ? "Cash on Delivery" : "ক্যাশ অন ডেলিভারি"}</option>
                      </select>
                    </div>

                    {form.payment === "Credit Card" && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">{language === "EN" ? "Card number" : "কার্ড নম্বর"}</label>
                          <input
                            name="cardNumber"
                            value={form.cardNumber}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                            placeholder="1234 5678 9012 3456"
                          />
                          {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">{language === "EN" ? "Expiry (MM/YY)" : "মেয়াদ (MM/YY)"}</label>
                          <input
                            name="expiry"
                            value={form.expiry}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                            placeholder="08/25"
                          />
                          {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">{language === "EN" ? "CVV" : "CVV"}</label>
                          <input
                            name="cvv"
                            value={form.cvv}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-lg"
                            placeholder="123"
                          />
                          {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium mb-1">{language === "EN" ? "Notes (optional)" : "নোট (ঐচ্ছিক)"}</label>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        className="w-full p-3 border rounded-lg"
                        rows="3"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">{language === "EN" ? "Review Your Order" : "আপনার অর্ডার পর্যালোচনা করুন"}</h2>
                    <div className="p-4 border rounded-lg bg-gray-50">
                      <p><strong>{language === "EN" ? "Product:" : "পণ্য:"}</strong> {language === "EN" ? product.name_en : product.name_bn}</p>
                      <p><strong>{language === "EN" ? "Price:" : "মূল্য:"}</strong> ${product.price}</p>
                      <p><strong>{language === "EN" ? "Payment Method:" : "পেমেন্ট পদ্ধতি:"}</strong> {form.payment}</p>
                      <p><strong>{language === "EN" ? "Name:" : "নাম:"}</strong> {form.name}</p>
                      <p><strong>{language === "EN" ? "Email:" : "ইমেইল:"}</strong> {form.email}</p>
                      <p><strong>{language === "EN" ? "Phone:" : "ফোন:"}</strong> {form.phone}</p>
                      <p><strong>{language === "EN" ? "Address:" : "ঠিকানা:"}</strong> {form.address}</p>
                      {form.notes && <p><strong>{language === "EN" ? "Notes:" : "নোট:"}</strong> {form.notes}</p>}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between gap-4 mt-6">
                  {step > 1 && (
                    <button
                      onClick={prevStep}
                      className="px-4 py-2 border rounded-lg"
                    >
                      {language === "EN" ? "Back" : "পেছনে"}
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      onClick={nextStep}
                      className="px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-700"
                    >
                      {language === "EN" ? "Next" : "পরবর্তী"}
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className={`px-6 py-3 rounded-lg text-white ${
                        loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      {loading
                        ? language === "EN"
                          ? "Processing..."
                          : "প্রসেস হচ্ছে..."
                        : language === "EN"
                        ? "Place Order"
                        : "অর্ডার দিন"}
                    </button>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-10">
                {orderResult?.success ? (
                  <>
                    <h2 className="text-2xl font-semibold mb-2">
                      {language === "EN" ? "Order placed!" : "অর্ডার সম্পন্ন!"}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {language === "EN" ? "Your order id:" : "অর্ডার আইডি:"}{" "}
                      <span className="font-mono">{orderResult.orderId}</span>
                    </p>
                    <button
                      onClick={() => navigate("/")}
                      className="px-6 py-2 bg-sky-600 text-white rounded-lg"
                    >
                      {language === "EN"
                        ? "Continue Shopping"
                        : "শপিং তালিকায় ফিরে যান"}
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-2">
                      {language === "EN" ? "Payment failed" : "পেমেন্ট ব্যর্থ"}
                    </h2>
                    <p className="text-gray-600 mb-4">{orderResult?.message}</p>
                    <button
                      onClick={() => setOrderResult(null)}
                      className="px-6 py-2 bg-gray-200 rounded-lg"
                    >
                      {language === "EN" ? "Try again" : "আবার চেষ্টা করুন"}
                    </button>
                  </>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}







