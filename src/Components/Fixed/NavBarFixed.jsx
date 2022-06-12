import "./NavBarFixed.scss";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import enLogo from "./logoEn.png";
const NavBarFixed = ({ lang, langAr, langEn }) => {
  console.log();
  return (
    <nav className="Top-nav">
      <div className="container">
        <span className="logo-icon">
          <img src={enLogo} alt="" />
        </span>
        <span>
          {lang == "EN" ? (
            <Button className="btnNav-lang" variant="outlined" onClick={langAr}>
              العربيه
            </Button>
          ) : (
            <Button
              className="btnNav-lang"
              n
              variant="outlined"
              onClick={langEn}
            >
              English
            </Button>
          )}
        </span>
      </div>
    </nav>
  );
};
export default NavBarFixed;
