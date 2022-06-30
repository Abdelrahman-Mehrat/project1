import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import { useContext, useState, useEffect } from "react";
import { FilterContext } from "../Container/Container";
import { langContext } from "../LangContext";
const Search = () => {

  const [searchKeyword, setSearchKeyword] = useState('')
  const { filters, setFilters } = useContext(FilterContext);

  // translation state & useEffect
  const { translation } = useContext(langContext);
  const [translated, setTranslated] = useState([]);

  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    setTranslated(translation[currentLang].searchComponent);
  });

  const handleOnChange = event => {
    setSearchKeyword(event.target.value)
  }

  const handleOnClick = event => {
    filters.keyword = searchKeyword;
    setFilters(filters);
    filters.searchHandler()
  }

  return (
    <form action="" className="searchForm">
      <label htmlFor="">{translated.keys}</label>
      <span className="input-btn_container">
        <TextField
          id="standard-basic"
          placeholder={translated.inputPlaceholder}
          variant="standard"
          onChange={handleOnChange} />
        <Button className="search-btn" onClick={handleOnClick}>
          <SearchIcon />
        </Button>
      </span>
    </form>
  );
};
export default Search;
