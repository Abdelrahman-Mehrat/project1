import { useState, useEffect, createContext } from "react";
import Header from "../Header/Header";
import LangProvider from "../LangContext";
import MainSection from "../MainSection/MainSection";
import SideBar from "../SideBar/SideBar";
import "./Container.scss";

export const FilterContext = createContext();
// export const langContext = createContext();

const Container = () => {
  // const [lang, setLang] = useState("AR");
  const [items, setItems] = useState([]);
  const [allData, setAllData] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  const [filters, setFilters] = useState({});
  const filtersValue = { filters, setFilters };
  let limit = 10;
  useEffect(() => {
    const getItemsData = async () => {
      const res = await fetch(`http://localhost:9080/api/inquiries`);
      const data = await res.json();
      const total = data.length;
      setpageCount(Math.ceil(total / limit));
      const newData = data.slice(0, limit);
      setItems(newData);
      console.log(data);
      setAllData(data);
    };
    getItemsData();
  }, []);

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
  // Arabic & English Nav button
  // const ChangeLang = () => {
  //   if (lang === "AR") {
  //     setLang("EN");
  //     document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  //   } else {
  //     setLang("AR");
  //     document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  //   }
  // };
  const handleOnClickShowFilters = () => {
    console.log(filters);
  };
  return (
    <div>
      <LangProvider>
        {/* <langContext.Provider value={{ lang, ChangeLang }}> */}
        <Header />
        <div className="container_parent">
          <FilterContext.Provider value={filtersValue}>
            <SideBar />
            <MainSection
              items={items}
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            />
            <button onClick={handleOnClickShowFilters}>Log Filters</button>
          </FilterContext.Provider>
        </div>
        {/* </langContext.Provider> */}
      </LangProvider>
    </div>
  );
};
export default Container;
