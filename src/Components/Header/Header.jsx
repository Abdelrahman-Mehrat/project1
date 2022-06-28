import "./Header.scss";
import Button from "@mui/material/Button";
import enLogo from "./logoEn.png";
import arLogo from "./logo.png";
import { useContext } from "react";
import { langContext } from "../LangContext";
const Header = () => {
  const { ChangeLang, lang } = useContext(langContext);
  console.log();
  return (
    <nav className="Top-nav">
      <div className="container">
        <span className="logo-icon">
          {lang === "en" ? (
            <img src={enLogo} alt="" />
          ) : (
            <img src={arLogo} alt="" />
          )}
        </span>
        <span>
          <Button
            className="btnNav-lang"
            variant="outlined"
            onClick={ChangeLang}
          >
            {lang === "ar" ? "English" : "العربية"}
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
