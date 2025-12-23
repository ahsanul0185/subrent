import { useLanguage } from "./LanguageContext";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (text) => {
    const separator = "***";
    const index = text.indexOf(separator);

    if (index === -1) return text;

    return language === "en"
      ? text.substring(0, index)
      : text.substring(index + separator.length);
  };

  return { t, language };
};
