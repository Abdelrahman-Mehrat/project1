import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import "./Filter.scss";
import { FilterContext } from "../Container/Container";

const Filters = ({ Translated }) => {
    //Hooks
    const { filters, setFilters } = useContext(FilterContext);
    const [mainServices, setMainServices] = useState();
    const [mainService, setMainService] = useState();
    const [subService, setSubService] = useState();
    const [subServices, setSubServices] = useState();

    useEffect(() => {
        fetch(`http://localhost:9080/api/mainservices`)
            .then((response) => response.json())
            .then((actualData) => {
                setMainServices(actualData);
            });
    }, []);

    //Methods =>
    const handleMainServiceChange = (event) => {
        let mainServiceId = event.target.value;
        getSubServices(mainServiceId);
        filters.mainService = mainServiceId;
        setFilters(filters);
    };

    const handleSubServiceChange = (event) => {
        let subServiceId = event.target.value;
        filters.subService = subServiceId;
        setFilters(filters);
    };

    const getSubServices = (mainServiceId) => {
        fetch(`http://localhost:9080/api/subservices?mainserviceid=${mainServiceId}`)
            .then((response) => response.json())
            .then((actualData) => {
                setSubServices(actualData);
            });
    };

    return (
        <div className="sidebar-filter">
            <h2 className="filter-title">{Translated.title1}</h2>
            <div className="sidebar-filter__container">
                <FormControl className="side-filterForm" variant="standard">
                    <InputLabel
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                    >
                        {Translated.mainFilter}
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
                        {Translated.secondFilter}
                    </InputLabel>
                    <Select
                        value={subService}
                        defaultValue=""
                        onChange={handleSubServiceChange}
                    >
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
