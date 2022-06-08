import { Drawer, Box, IconButton } from "@mui/material";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import { useState } from "react";
import "./SideBarFilter.scss";
const SideBarFilter = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="sideBar">
      <h2>Filter</h2>
      <IconButton
        onClick={() => {
          setIsDrawerOpen(true);
        }}
      >
        <DensityMediumOutlinedIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <typography variant="h6" component="div">
            Side Panel
          </typography>
          <br />
          <p className="filterStyle">Filter1</p>
          <p className="filterStyle">Filter2</p>
          <p className="filterStyle">Filter3</p>
        </Box>
      </Drawer>
    </div>
  );
};
export default SideBarFilter;
