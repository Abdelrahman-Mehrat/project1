import "./Header.scss";
import Button from "@mui/material/Button";
import enLogo from "./logoEn.png";
import arLogo from "./logo.png";
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
        <span className="logo-icon">
          {<img src={lang === "en" ? enLogo : arLogo} alt="" />}
        </span>
        <span>
          <Button
            className="btnNav-lang"
            variant="outlined"
            onClick={ChangeLang}
          >
            {translated.langBtn}
          </Button>
          {/* {lang === "EN" ? (  
            <Button className="btnNav-lang" variant="outlined" onClick={arBtn}>
              العربيه
            </Button>
          ) : (
            <Button className="btnNav-lang" variant="outlined" onClick={enBtn}>
              English
            </Button>
          )} */}
        </span>
      </div>
    </nav>
  );
};
export default Header;
