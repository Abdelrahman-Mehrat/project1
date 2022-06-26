import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import "./Filter.scss";
const Filters = () => {
  //Vairables =>

  //main services
  const [mainServices, setMainServices] = useState();
  const [mainService, setMainService] = useState();
  //sub services
  const [subService, setSubService] = useState();
  const [subServices, setSubServices] = useState();

  //Use effect hook
  useEffect(() => {
    fetch(`http://localhost:9080/api/mainservices`)
      .then((response) => response.json())
      .then((actualData) => {
        setMainServices(actualData);
        console.log(mainServices);
      });
  }, []);

  //Methods =>
  const handleMainServiceChange = (event) => {
    let mainServiceId = event.target.value;
    getSubServices(mainServiceId);
  };

  const getSubServices = (mainServiceId) => {
    fetch(
      `http://localhost:9080/api/subservices?mainserviceid=${mainServiceId}`
    )
      .then((response) => response.json())
      .then((actualData) => {
        setSubServices(actualData);
        console.log(subServices);
      });
  };

  return (
    <div className="sidebar-filter">
      <h2 className="filter-title">تصفية</h2>
      <div className="sidebar-filter__container">
        <FormControl className="side-filterForm" variant="standard">
          <InputLabel
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
          >
            الخدمة الرئيسية
          </InputLabel>
          <Select
            value={mainService}
            defaultValue=""
            onChange={handleMainServiceChange}
          >
            <MenuItem value="">اختر</MenuItem>
            {mainServices?.map((option) => {
              return (
                <MenuItem
                  className="selector-item"
                  key={option.Id}
                  value={option.Id}
                >
                  {option.NameAr ?? option.NameAr}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl className="side-filterForm" variant="standard">
          <InputLabel
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
          >
            الخدمة الفرعية
          </InputLabel>
          <Select value={subService} defaultValue="">
            <MenuItem value="">اختر</MenuItem>
            {subServices?.map((option) => {
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
export default Filters;
