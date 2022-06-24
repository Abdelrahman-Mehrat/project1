import { useState, useEffect } from "react";
import NavBarFixed from "../Fixed/NavBarFixed";
import MainSection from "../MainSection/MainSection";
import SideBarFilter from "../SideBarFilter/SideBarFilter";
import "./ContainerComponent.scss";
const ContainerComponent = () => {
  const [lang, setLang] = useState("AR");
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
  // Arabic & English Nav buttons
  const arBtn = () => {
    setLang("AR");
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  };
  const enBtn = () => {
    setLang("EN");
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  };
  return (
    <div>
      <NavBarFixed lang={lang} arBtn={arBtn} enBtn={enBtn} />
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
