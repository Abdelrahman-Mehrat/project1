import ReactPaginate from "react-paginate";
import "./Paginate.scss";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
function Paginate({ pageCount, handlePageClick }) {
  return (
    <div className="container">
      <ReactPaginate
        previousLabel={<ArrowRightIcon fontSize="small" />}
        previousLinkClassName={"page-prevBtn"}
        nextLabel={<ArrowLeftIcon fontSize="small" />}
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
