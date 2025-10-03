import React, { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "EN");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "EN" ? "BN" : "EN";
      localStorage.setItem("language", newLang);
      return newLang;
    });
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
