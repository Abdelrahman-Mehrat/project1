import { useState, useEffect } from "react";
import NavBarFixed from "../Fixed/NavBarFixed";
import MainSection from "../MainSection/MainSection";
import SideBarFilter from "../SideBarFilter/SideBarFilter";
import "./ContainerComponent.scss";
const ContainerComponent = () => {
  const [lang, setLang] = useState("EN");
  const [items, setItems] = useState([]);
  const [allData, setAllData] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  let limit = 10;

  useEffect(() => {
    const getItemsData = async () => {
      const res = await fetch(`http://localhost:9080/api/inquiries`);
      const data = await res.json();

      const total = data.length;
      setpageCount(Math.ceil(total / limit));
      const newData = data.slice(0, limit);
      setItems(newData);
      setAllData(data);
    };
    getItemsData();
  }, []);

  const handlePageClick = (data) => {
    const clickedPage = data.selected + 1;
    let indexOfLastUnit = clickedPage * limit;
    let indexOfFirstUnit = indexOfLastUnit - limit;
    const newData = allData.slice(indexOfFirstUnit, indexOfLastUnit);
    console.log(newData);
    setItems(newData);
    // window.scrollTo(0, 0);
  };
  // useEffect(() => {
  //   getAllData();
  // }, []);
  // const getAllData = () => {
  //   fetch("http://localhost:9080/api/inquiries")
  //     .then((res) => res.json())
  //     // .then((result) => console.log(result))
  //     .then((result) => setAllData(result));
  // };
  const langAr = () => {
    setLang("AR");
    // document.querySelector("html")
  };
  const langEn = () => {
    setLang("EN");
  };
  return (
    <div>
      <NavBarFixed lang={lang} langAr={langAr} langEn={langEn} />
      <div className="container_parent">
        <SideBarFilter />
        <MainSection
          items={items}
          pageCount={pageCount}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};
export default ContainerComponent;
