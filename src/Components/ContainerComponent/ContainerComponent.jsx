import { useState } from "react";
import NavBarFixed from "../Fixed/NavBarFixed";
import MainSection from "../MainSection/MainSection";
import SideBarFilter from "../SideBarFilter/SideBarFilter";
import "./ContainerComponent.scss";
const ContainerComponent = () => {
  const [lang, setLang] = useState("EN");
  const langAr = () => {
    setLang("AR");
  };
  const langEn = () => {
    setLang("EN");
  };
  return (
    <div>
      <NavBarFixed lang={lang} langAr={langAr} langEn={langEn} />
      <div className="container_parent">
        <SideBarFilter />
        <MainSection />
      </div>
    </div>
  );
};
export default ContainerComponent;
