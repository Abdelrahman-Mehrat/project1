import Filters from "../Filters/Filters";
import RecentArticles from "../RecentArticles/RecentArticles";
import { useState, useEffect, useContext } from "react";
import { langContext } from "../LangContext";
import "./SideBar.scss";

const SideBar = () => {
  const { translation } = useContext(langContext);
  const [translated, setTranslated] = useState([]);
  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    setTranslated(translation[currentLang].sidebarComponent);
  });
  return (
    <div className="sideBar">
      <Filters Translated={translated} />
      <RecentArticles Translated={translated} />
    </div>
  );
};
export default SideBar;
