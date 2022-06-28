import "./MainSection.scss";
import Paginate from "../Paginate/Paginate";
import Article from "../Article/Article";
import Search from "../Search/Search";

const MainSection = ({ items, pageCount, handlePageClick }) => {

  

  return (
    <div className="mainSection">
      <section className="sec-accordion">
        <Search />
        {items?.map((item) => {
          return <Article item={item} />;
        })}
      </section>

      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
export default MainSection;
