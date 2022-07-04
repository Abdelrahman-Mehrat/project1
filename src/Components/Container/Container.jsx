import Header from "../Header/Header";
import LangProvider from "../LangContext";
import MainSection from "../MainSection/MainSection";
import SideBar from "../SideBar/SideBar";
import "./Container.scss";

const Container = () => {
  return (
    <div>
      <LangProvider>
        <Header />
        <div className="container_parent">
          <SideBar />
          <MainSection />
        </div>
      </LangProvider>
    </div>
  );
};
export default Container;
