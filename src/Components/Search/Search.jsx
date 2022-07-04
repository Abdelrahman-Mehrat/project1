import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";
import { useContext, useState, useEffect } from "react";
import { langContext } from "../LangContext";

const Search = (props) => {
  // translation state & useEffect
  const { translation } = useContext(langContext);
  const [translated, setTranslated] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  // translation
  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    setTranslated(translation[currentLang].searchComponent);
  });
  // search handler
  const handleOnChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleOnClick = (event) => {
    props.keywordChange(searchKeyword);
  };

  return (
    <form action="" className="searchForm">
      <label htmlFor="">{translated.keys}</label>
      <span className="input-btn_container">
        <TextField
          id="standard-basic"
          placeholder={translated.inputPlaceholder}
          variant="standard"
          onChange={handleOnChange}
        />
        <Button className="search-btn" onClick={handleOnClick}>
          <SearchIcon />
        </Button>
      </span>
    </form>
  );
};
export default Search;
