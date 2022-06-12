import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import "./MainSection.scss";
const MainSection = () => {
  const [values, setValues] = React.useState(["PDF1", "PDF2"]);
  const [selected, setSelected] = useState("Bam");

  function handleChange(event) {
    setSelected(event.target.value);
  }
  return (
    <div className="mainSection">
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accord-title">Question 1</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>

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
      {/* 2 */}
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accord-title">Question 2</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>

          <div></div>
        </AccordionDetails>
      </Accordion>
      {/* 3 */}
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accord-title">Question 3</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <div></div>
        </AccordionDetails>
      </Accordion>
      {/* 4 */}
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accord-title">Question 4</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <div></div>{" "}
        </AccordionDetails>
      </Accordion>
      {/* 4 */}
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accord-title">Question 5</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <div></div>
        </AccordionDetails>
      </Accordion>{" "}
      {/* 4 */}
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accord-title">Question 6</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <div></div>{" "}
        </AccordionDetails>
      </Accordion>{" "}
      {/* 7 */}
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accord-title">Question 7</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <div></div>
        </AccordionDetails>
      </Accordion>{" "}
      {/* 8 */}
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accord-title">Question 8</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <div></div>{" "}
        </AccordionDetails>
      </Accordion>{" "}
      {/* 9 */}
      <Accordion className="accordion-container">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accord-title">Question 9</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <div></div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default MainSection;
