import { useState, useEffect, createContext } from "react";
import Header from "../Header/Header";
import LangProvider from "../LangContext";
import MainSection from "../MainSection/MainSection";
import SideBar from "../SideBar/SideBar";
import "./Container.scss";

export const FilterContext = createContext();

const Container = () => {

  const [items, setItems] = useState([]);
  const [allData, setAllData] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [filters, setFilters] = useState({});
  const filtersValue = { filters, setFilters };
  const apiUrl = `http://localhost:9080/api/inquiries`;
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
    console.log(data);
    setAllData(data);
  };

  const searchHandler = async () => {
    alert('search in parent')

    const response = await fetch(apiUrl, {
      method: 'GET',
      body: JSON.stringify(filters)
    });
    console.log(response.json())
    return response.json();
  }

  // pagination event
  const handlePageClick = (data) => {
    const clickedPage = data.selected + 1;
    let indexOfLastUnit = clickedPage * limit;
    let indexOfFirstUnit = indexOfLastUnit - limit;
    const newData = allData.slice(indexOfFirstUnit, indexOfLastUnit);
    console.log(newData);
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
            <MainSection
              items={items}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
          </FilterContext.Provider>
        </div>
      </LangProvider>
    </div>
  );
};
export default Container;
