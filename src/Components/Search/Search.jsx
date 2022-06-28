import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import { useContext, useState, useEffect } from "react";
import { FilterContext } from "../Container/Container";
import { langContext } from "../LangContext";
const Search = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const handleSearch = (event) => {
    let searchKeyword = event.target.value;
    filters.keyword = searchKeyword;
    setFilters(filters);
  };
  // translation state & useEffect
  const { translation } = useContext(langContext);
  const [translated, setTranslated] = useState([]);
  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    setTranslated(translation[currentLang].searchComponent);
  });

  return (
    <form action="" className="searchForm">
      <label htmlFor="">{translated.keys}</label>
      <span className="input-btn_container">
        <TextField
          id="standard-basic"
          placeholder={translated.inputPlaceholder}
          variant="standard"
        />
        <Button className="search-btn" onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </span>
    </form>
  );
};
export default Search;
