import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import { useContext } from "react";
import { FilterContext } from "../Container/Container";
const Search = () => {

  const { filters, setFilters } = useContext(FilterContext);

  const handleSearch = (event) => {
    let searchKeyword = event.target.value;
    filters.keyword = searchKeyword;
    setFilters(filters);
  }
  
  return (
    <form action="" className="searchForm">
      <label htmlFor="">الكلمات الدالة</label>
      <span className="input-btn_container">
        <TextField id="standard-basic" placeholder="بحث" variant="standard" />
        <Button className="search-btn" onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </span>
    </form>
  );
};
export default Search;
