import ReactPaginate from "react-paginate";
import "./Paginate.scss";

function Paginate({ pageCount, handlePageClick }) {
  return (
    <div className="container">
      <ReactPaginate
        previousLabel={<>&rarr;</>}
        previousLinkClassName={"page-prevBtn"}
        nextLabel={<>&larr;</>}
        nextLinkClassName={"page-nextBtn"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination-container"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Paginate;
