import "./MainSection.scss";
import Paginate from "../Paginate/Paginate";
import Article from "../Article/Article";
import Search from "../Search/Search";

const MainSection = ({ items, pageCount, handlePageClick, keyword, keywordChange }) => {

  return (
    <div className="mainSection">
      <section className="sec-accordion">
        <Search keyword={keyword} keywordChange={keywordChange} />
        {items?.map((item) => {
          return <Article item={item} key={item.Id} />;
        })}
      </section>
      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
export default MainSection;
