import { createContext, useState, useEffect } from "react";

export const articlesContext = createContext();
const ArticlesProvider = ({ children }) => {
  const apiUrl = `http://localhost:9080/api/inquiries`;
  const [pageArticles, setPageArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;
  useEffect(() => {
    getItemsData();
  });
  const getItemsData = async () => {
    const res = await fetch(apiUrl);
    const jsonRes = await res.json();
    const totalCount = jsonRes.length;
    setpageCount(Math.ceil(totalCount / limit));
    const newData = jsonRes.slice(0, limit);
    setPageArticles(newData);
    setArticles(jsonRes);
  };
  // fetch Articles function
  // pagination event
  const handlePageClick = (data) => {
    const clickedPage = data.selected + 1;
    let indexOfLastUnit = clickedPage * limit;
    let indexOfFirstUnit = indexOfLastUnit - limit;
    const newData = articles.slice(indexOfFirstUnit, indexOfLastUnit);
    setPageArticles(newData);
    window.scrollTo(0, 0);
  };
  return (
    <articlesContext.Provider
      value={{ handlePageClick, pageArticles, articles, pageCount }}
    >
      {children}
    </articlesContext.Provider>
  );
};
export default ArticlesProvider;
