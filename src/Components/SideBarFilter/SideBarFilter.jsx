import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import "./SideBarFilter.scss";

const SideBarFilter = () => {
  const [mainServices, setMainServices] = useState();
  const [mainService, setMainService] = useState();

  useEffect(() => {
    fetch(`http://localhost:9080/api/mainservices`)
      .then((response) => response.json())
      .then((actualData) => {
        setMainServices(actualData)
        console.log(mainServices);
      });
  }, []);

  return (
    <div className="sideBar">
      <h2>تصفية</h2>
      <hr />
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">الخدمة الرئيسية</InputLabel>
          <Select value={mainService} defaultValue="">
            <MenuItem value="">اختر</MenuItem>
            {mainServices?.map(option => {
              return (
                <MenuItem key={option.Id} value={option.Id}>
                  {option.NameAr ?? option.NameAr}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
export default SideBarFilter;
