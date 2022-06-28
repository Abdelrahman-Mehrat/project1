import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
const Search = () => {
  return (
    <form action="" className="searchForm">
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
export default Search;
