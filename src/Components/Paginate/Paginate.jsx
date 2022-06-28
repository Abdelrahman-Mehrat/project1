import ReactPaginate from "react-paginate";
import "./Paginate.scss";

function Paginate({ pageCount, handlePageClick }) {
  return (
    <div className="container">
      <ReactPaginate
        previousLabel={"<"}
        previousLinkClassName={"page-prevBtn"}
        nextLabel={">"}
        nextLinkClassName={"page-nextBtn"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination-container"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Paginate;
