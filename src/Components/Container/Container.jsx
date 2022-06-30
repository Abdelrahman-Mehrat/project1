import { useState, useEffect, createContext } from "react";
import Header from "../Header/Header";
import LangProvider from "../LangContext";
import MainSection from "../MainSection/MainSection";
import SideBar from "../SideBar/SideBar";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./Container.scss";

export const FilterContext = createContext();

const Container = () => {

  const [items, setItems] = useState([]);
  const [allData, setAllData] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [filters, setFilters] = useState({});
  const filtersValue = { filters, setFilters };
  const apiUrl = `http://localhost:9080/api/inquiries`;
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  let limit = 10;

  useEffect(() => {
    getItemsData();
    filters.searchHandler = searchHandler;
    setFilters(filters);
  }, []);

  const getItemsData = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();
    const total = data.length;
    setpageCount(Math.ceil(total / limit));
    const newData = data.slice(0, limit);
    setItems(newData);
    setAllData(data);
  };

  const searchHandler = () => {
    alert('search in parent')
    console.log(allData)
    const filteredArticles = allData.filter(obj => {
      return obj.Question.toLowerCase().includes(filters.keyword.toLowerCase())
        || obj.Answer.toLowerCase().includes(filters.keyword.toLowerCase());
      //to do
      //|| obj.MainService == filters.
    });
    console.log(filteredArticles);
    setAllData(filteredArticles)
    return filteredArticles;
  }

  // pagination event
  const handlePageClick = (data) => {
    const clickedPage = data.selected + 1;
    let indexOfLastUnit = clickedPage * limit;
    let indexOfFirstUnit = indexOfLastUnit - limit;
    const newData = allData.slice(indexOfFirstUnit, indexOfLastUnit);
    setItems(newData);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <LangProvider>
        <Header />
        <div className="container_parent">
          <FilterContext.Provider value={filtersValue}>
            <SideBar />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh" >
              {items.length > 0 ? (<MainSection
                items={items}
                pageCount={pageCount}
                handlePageClick={handlePageClick} />) :
                <CircularProgress color="error" />
              }
            </Box>
          </FilterContext.Provider>
        </div>
      </LangProvider>
    </div>
  );
};
export default Container;
