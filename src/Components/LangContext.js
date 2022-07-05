import { useState, useContext, createContext, useEffect } from "react";
export const langContext = createContext();
const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("");
  const [dir, setDir] = useState("");
  // Arabic & English Nav button
  // language and direction
  const ChangeLang = () => {
    const currentLang = localStorage.getItem("lang");
    if (lang === "ar") {
      setLang("en");
      setDir("ltr");
      localStorage.setItem("lang", "en");
      localStorage.setItem("direction", "ltr");
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    } else {
      setLang("ar");
      setDir("rtl");
      localStorage.setItem("lang", "ar");
      localStorage.setItem("direction", "rtl");
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
  };
  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    const currentDir = localStorage.getItem("direction");
    !currentDir && localStorage.setItem("direction", "rtl");
    document.getElementsByTagName("html")[0].setAttribute("dir", currentDir);
    !currentLang && localStorage.setItem("lang", "ar");
    setLang(currentLang);
    setDir(currentDir);
  });
  const translation = {
    // english data
    en: {
      navBarComponent: {
        langBtn: "عربي",
      },
      searchComponent: {
        keyword: "Keyword",
        inputPlaceholder: "Search",
      },
      sidebarComponent: {
        title1: "Filter",
        mainFilter: "Primary service",
        secondFilter: "Secondary service",
        title2: "Last updates",
      },
      articleComponent: {
        dropDownTitle: "attachments",
        title1: "attachments",
      },
    },
    // arr data
    ar: {
      navBarComponent: {
        langBtn: "English",
      },
      searchComponent: {
        keyword: "كلمة البحث",
        inputPlaceholder: "بحث",
      },
      sidebarComponent: {
        title1: "تصفية",
        mainFilter: "الخدمة الرئيسية",
        secondFilter: "الخدمة الفرعية",
        title2: "اخر التحديثات",
      },
      articleComponent: {
        dropDownTitle: "مرفقات",
        title1: "مرفقات",
      },
    },
  };
  return (
    <langContext.Provider value={{ lang, ChangeLang, translation }}>
      {children}
    </langContext.Provider>
  );
};
export default LangProvider;
