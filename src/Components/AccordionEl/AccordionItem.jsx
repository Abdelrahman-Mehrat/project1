import React, { useState } from "react";
// material accordion import
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
// accordion style
import "./AccordionItem.scss";
// dropdown
const AccordionItem = ({ item }) => {
  const [values, setValues] = React.useState(["PDF1", "PDF2"]);
  const [selected, setSelected] = useState("");
  function handleChange(event) {
    setSelected(event.target.value);
    console.log(event.target.value);
  }
  return (
    <Accordion className="accordion-container" key={item.Id}>
      <AccordionSummary
        className="AccordionSummary"
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="accord-title">{item.Question}</Typography>
      </AccordionSummary>
      <AccordionDetails className="AccordionDetails">
        <Typography>{item.Answer}</Typography>
        {/* dropDown */}
        <div>
          <FormControl size="small">
            <InputLabel id="demo-simple-select-label">Attachment</InputLabel>
            <Select
              className="select"
              value={selected}
              label="attachment"
              onChange={handleChange}
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
};
export default AccordionItem;
