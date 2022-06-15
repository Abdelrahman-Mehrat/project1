import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./MainSection.scss";
import Paginate from "../Paginate/Paginate";
const MainSection = ({ items, pageCount, handlePageClick }) => {
  const [values, setValues] = React.useState(["PDF1", "PDF2"]);
  const [selected, setSelected] = useState("Bam");
  function handleChange(event) {
    setSelected(event.target.value);
  }
  return (
    <div className="mainSection">
      <section className="sec-accordion">
        {items?.map((item) => {
          return (
            <Accordion className="accordion-container" key={item.Id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="accord-title">
                  {item.Question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="AccordionDetails">
                <Typography>{item.Answer}</Typography>

                <div>
                  <FormControl>
                    <InputLabel htmlFor="agent-simple">Agent</InputLabel>
                    <Select
                      value={selected}
                      onChange={handleChange}
                      inputProps={{
                        name: "agent",
                        id: "age-simple",
                      }}
                    >
                      {values.map((value, index) => {
                        return <MenuItem value={value}>{value}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </section>

      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};
export default MainSection;
