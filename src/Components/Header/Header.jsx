import "./Header.scss";
import Button from "@mui/material/Button";
import enLogo from "./logoEn.png";
import arLogo from "./logo.png";

const Header = ({ lang, arBtn, enBtn }) => {
  console.log();
  return (
    <nav className="Top-nav">
      <div className="container">
        <span className="logo-icon">
          {lang === "EN" ? (
            <img src={enLogo} alt="" />
          ) : (
            <img src={arLogo} alt="" />
          )}
        </span>
        <span>
          {lang === "EN" ? (
            <Button className="btnNav-lang" variant="outlined" onClick={arBtn}>
              العربيه
            </Button>
          ) : (
            <Button className="btnNav-lang" variant="outlined" onClick={enBtn}>
              English
            </Button>
          )}
        </span>
      </div>
    </nav>
  );
};
export default Header;
