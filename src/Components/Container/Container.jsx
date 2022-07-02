import { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import LangProvider from "../LangContext";
import MainSection from "../MainSection/MainSection";
import SideBar from "../SideBar/SideBar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./Container.scss";
import ArticlesProvider from "../Context/AriclesContext";
import { articlesContext } from "../Context/AriclesContext";
const Container = () => {
  // const { pageArticles, articles, pageCount } = useContext(articlesContext);
  const apiUrl = `http://localhost:9080/api/inquiries`;
  const [pageArticles, setPageArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  let limit = 10;
  useEffect(() => {
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

  const updateKeyword = (text) => {
    setKeyword(text);
    searchHandler();
  };

  const searchHandler = () => {
    alert(`search in parent ${keyword}`);
    console.log(articles);
    const filteredArticles = articles.filter((obj) => {
      return (
        obj.Question.toLowerCase().includes(keyword.toLowerCase()) ||
        obj.Answer.toLowerCase().includes(keyword.toLowerCase())
      );
      //to do
      //|| obj.MainService == filters.
    });
    console.log(filteredArticles);
  };

  return (
    <div>
      <ArticlesProvider>
        <LangProvider>
          <Header />
          <div className="container_parent">
            <SideBar />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
            >
              {pageArticles.length > 0 ? (
                <MainSection
                  items={pageArticles}
                  pageCount={pageCount}
                  keyword={keyword}
                  keywordChange={updateKeyword}
                />
              ) : (
                <CircularProgress color="error" />
              )}
            </Box>
            <button onClick={searchHandler}>search</button>
          </div>
        </LangProvider>
      </ArticlesProvider>
    </div>
  );
};
export default Container;
