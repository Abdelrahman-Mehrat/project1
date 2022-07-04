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
  const [translated, setTranslated] = useState([]);
  const apiUrl = `http://localhost:9080/api/inquiries`;
  const [pageArticles, setPageArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [keyword, setKeyword] = useState();
  let limit = 10;

  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    setTranslated(translation[currentLang].searchComponent);
    getItemsData();
  }, []);

  const getItemsData = async () => {
    const res = await fetch(apiUrl);
    const jsonRes = await res.json();
    const totalCount = jsonRes.length;
    setpageCount(Math.ceil(totalCount / limit));
    const newData = jsonRes.slice(0, limit);
    setPageArticles(newData);
    setArticles(jsonRes);
  };

  // pagination event
  const handlePageClick = (data) => {
    const clickedPage = data.selected + 1;
    let indexOfLastUnit = clickedPage * limit;
    let indexOfFirstUnit = indexOfLastUnit - limit;
    const newData = articles.slice(indexOfFirstUnit, indexOfLastUnit);
    setPageArticles(newData);
    window.scrollTo(0, 0);
  };

  const handleOnChange = event => {
    setKeyword(event.target.value)
    // searchHandler();
  }
  useEffect(() => {
    debugger
    if (keyword) {
      const filteredArticles = articles.filter((obj) => {
        return (
          obj.Question.toLowerCase().includes(keyword.toLowerCase()) ||
          obj.Answer.toLowerCase().includes(keyword.toLowerCase())
        );
        //to do
        //|| obj.MainService == filters.
      });
      setPageArticles(filteredArticles);
    } else {
      setPageArticles(articles)
    }
  }, [keyword])

  // const searchHandler = () => {
    
  // };
  return (
    <div className="mainSection">
      <form action="" className="searchForm">
        <label htmlFor="">{translated.keys}</label>
        <span className="input-btn_container">
          <TextField
            id="standard-basic"
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
    </div >
  );
};
export default MainSection;
