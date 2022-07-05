import "./MainSection.scss";
import Paginate from "../Paginate/Paginate";
import Article from "../Article/Article";
import { useContext, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { langContext } from "../LangContext";

const MainSection = () => {
  // translation state & useEffect
  const { translation } = useContext(langContext);
  const [translated, setTranslated] = useState("");

  const apiUrl = `http://localhost:9080/api/inquiries`;
  const [pageArticles, setPageArticles] = useState([]);
  // all Articles
  const [articles, setArticles] = useState([]);
  // all Articles for filter
  const [articlesFilter, setArticlesFilter] = useState([]);
  const [keyword, setKeyword] = useState("");
  // pagination
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;
  // fetch data
  useEffect(() => {
    getItemsData();
  }, []);
  //
  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    setTranslated(translation[currentLang].searchComponent);
  });

  const getItemsData = async () => {
    const res = await fetch(apiUrl);
    const jsonRes = await res.json();
    const totalCount = jsonRes.length;
    setpageCount(Math.ceil(totalCount / limit));
    const newData = jsonRes.slice(0, limit);
    setPageArticles(newData);
    setArticles(jsonRes);
    setArticlesFilter(jsonRes);
  };

  // pagination event
  const handlePageClick = (data) => {
    let clickedPage = data.selected + 1;
    let indexOfLastUnit = clickedPage * limit;
    let indexOfFirstUnit = indexOfLastUnit - limit;
    let newData;
    if (keyword) {
      newData = articlesFilter.slice(indexOfFirstUnit, indexOfLastUnit);
    } else {
      newData = articles.slice(indexOfFirstUnit, indexOfLastUnit);
    }
    setPageArticles(newData);
    window.scrollTo(0, 0);
    return clickedPage;
  };

  const handleOnChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    if (keyword) {
      const filteredArticles = articles.filter((obj) => {
        return (
          obj.Question.toLowerCase().includes(keyword.toLowerCase()) ||
          obj.Answer.toLowerCase().includes(keyword.toLowerCase())
        );
        //to do
        //|| obj.MainService == filters.
      });
      setArticlesFilter(filteredArticles);
      const totalCount = filteredArticles.length;
      setpageCount(Math.ceil(totalCount / limit));
      const newData = filteredArticles.slice(0, limit);
      setPageArticles(newData);
    } else {
      // setArticlesFilter(filteredArticles);
      // setIsEmpty(true);
      const totalCount = articles.length;
      setpageCount(Math.ceil(totalCount / limit));
      const newData = articles.slice(0, limit);
      setPageArticles(newData);
      handlePageClick({ isEmpty: true, selected: 1 });
    }
  }, [keyword]);

  return (
    <div className="mainSection">
      <form action="" className="searchForm">
        <label htmlFor="txtSearch">{translated.keyword}</label>
        <span className="input-btn_container">
          <TextField
            id="txtSearch"
            placeholder={translated.inputPlaceholder}
            variant="standard"
            value={keyword}
            onChange={handleOnChange} />
          <Button className="search-btn">
            <SearchIcon />
          </Button>
        </span>
      </form>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <section className="sec-accordion">
          {pageArticles.length > 0 ? (
            pageArticles.map((item) => {
              return <Article item={item} key={item.Id} />;
            })
          ) : (
            <CircularProgress color="error" />
          )}
        </section>
      </Box>
      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
export default MainSection;
