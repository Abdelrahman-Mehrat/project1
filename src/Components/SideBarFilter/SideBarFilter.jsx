import Filters from "../Filters/Filters";
import RecentArticles from "../RecentArticles/RecentArticles";
import "./SideBarFilter.scss";

const SideBarFilter = () => {
  return (
    <div className="sideBar">
      <Filters />
      <RecentArticles />
    </div>
  );
};
export default SideBarFilter;
