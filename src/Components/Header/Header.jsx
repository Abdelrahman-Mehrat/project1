import "./Header.scss";
// import Button from "@mui/material/Button";
import enLogo from "./logoEn.png";
import arLogo from "./logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import { useContext, useEffect, useState } from "react";
import { langContext } from "../LangContext";
const Header = () => {
  const { ChangeLang, lang, translation } = useContext(langContext);
  const [translated, setTranslated] = useState([]);
  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    setTranslated(translation[currentLang].navBarComponent);
  });
  console.log();
  return (
    <nav className="Top-nav">
      <div className="container">
        <div className="co-name">
          <span className="logo-icon">
            {<img src={lang === "en" ? enLogo : arLogo} alt="" />}
          </span>
        </div>
        <h1>Knowledge base</h1>
        <button className="btnNav-lang" onClick={ChangeLang}>
          <LanguageIcon fontSize="small" />
          {translated.langBtn}
        </button>
      </div>
    </nav>
  );
};
export default Header;
