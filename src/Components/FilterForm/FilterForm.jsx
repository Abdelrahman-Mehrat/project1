import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./FilterForm.scss";
const FilterForm = () => {
  return (
    <form action="" className="filterForm">
      <label htmlFor="">الكلمات الدالة</label>
      <span className="input-btn_container">
        <TextField id="standard-basic" placeholder="بحث" variant="standard" />
        <Button className="search-btn">
          <SearchIcon />
        </Button>
      </span>
    </form>
  );
};
export default FilterForm;
