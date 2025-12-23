import React from "react";
import Button from "./Button";
import { IoLanguageOutline } from "react-icons/io5";
import { useLanguage } from "../contexts/LanguageContext";

const LangToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
    arrow={false} 
      onClick={toggleLanguage} 
      className="text-xs px-1 py-0.5 flex items-center gap-2 text-white border bg-transparent rounded cursor-pointer hover:bg-white hover:text-black duration-200"
    >
      <IoLanguageOutline />
      <span>{language === "en" ? "FR" : "EN"}</span>
    </button>
  );
};

export default LangToggleButton;