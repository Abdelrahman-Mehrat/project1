import React, { useState } from "react";

import "./MainSection.scss";
import Paginate from "../Paginate/Paginate";
import AccordionItem from "../AccordionEl/AccordionItem";
import FilterForm from "../FilterForm/FilterForm";
const MainSection = ({ items, pageCount, handlePageClick }) => {
  return (
    <div className="mainSection">
      <section className="sec-accordion">
        <FilterForm />
        {items?.map((item) => {
          return <AccordionItem item={item} />;
        })}
      </section>

      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
export default MainSection;
