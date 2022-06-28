import { useState, useContext, createContext, useEffect } from "react";
export const langContext = createContext();
const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("ar");
  // Arabic & English Nav button
  const ChangeLang = () => {
    if (lang === "ar") {
      setLang("en");
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    } else {
      setLang("ar");
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
  };
  return (
    <langContext.Provider value={{ lang, ChangeLang }}>
      {children}
    </langContext.Provider>
  );
};
export default LangProvider;
