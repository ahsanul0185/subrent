
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    // 1️⃣ Try localStorage first
    const savedLang = localStorage.getItem("language");
    if (savedLang) return savedLang;

    // 2️⃣ Fallback to browser language
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith("fr") ? "fr" : "en";
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  // 3️⃣ Save to localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // 4️⃣ Toggle function
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
