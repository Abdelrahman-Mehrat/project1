import "./NavBarFixed.scss";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const NavBarFixed = () => {
  return (
    <nav className="Top-nav">
      <div className="container">

      <span className="logo-icon">Logo</span>
      <ButtonGroup variant="contained" size="small" aria-label="outlined primary button group">
    <Button>Arabic</Button>
        <Button>English</Button>
    </ButtonGroup>
      </div>
    </nav>
  );
};
export default NavBarFixed;
