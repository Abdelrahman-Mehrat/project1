import React, { useState } from "react";

import "./MainSection.scss";
import Paginate from "../Paginate/Paginate";
import AccordionItem from "../AccordionEl/AccordionItem";
const MainSection = ({ items, pageCount, handlePageClick }) => {
  return (
    <div className="mainSection">
      <section className="sec-accordion">
        {items?.map((item) => {
          return <AccordionItem item={item} />;
        })}
      </section>

      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
export default MainSection;
