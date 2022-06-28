import Filters from "../Filters/Filters";
import RecentArticles from "../RecentArticles/RecentArticles";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="sideBar">
      <Filters />
      <RecentArticles />
    </div>
  );
};
export default SideBar;
