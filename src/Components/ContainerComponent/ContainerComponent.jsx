import NavBarFixed from "../Fixed/NavBarFixed";
import MainSection from "../MainSection/MainSection";
import SideBarFilter from "../SideBarFilter/SideBarFilter";
import "./ContainerComponent.scss";
const ContainerComponent = () => {
  return (
    <div>
      <NavBarFixed />
      <div className="container_parent">
        <SideBarFilter />
        <MainSection />
      </div>
    </div>
  );
};
export default ContainerComponent;
