import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";


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
                setMainServices(actualData)
                console.log(mainServices);
            });
    }, []);

    //Methods =>
    const handleMainServiceChange = (event) => {
        let mainServiceId = event.target.value;
        getSubServices(mainServiceId);
    }

    const getSubServices = (mainServiceId) => {
        fetch(`http://localhost:9080/api/subservices?mainserviceid=${mainServiceId}`)
            .then((response) => response.json())
            .then((actualData) => {
                setSubServices(actualData)
                console.log(subServices);
            });
    }

    return (
        <div>
            <h2>تصفية</h2>
            <hr />
            <div>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">الخدمة الرئيسية</InputLabel>
                    <Select value={mainService} defaultValue="" onChange={handleMainServiceChange}>
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

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">الخدمة الفرعية</InputLabel>
                    <Select value={subService} defaultValue="">
                        <MenuItem value="">اختر</MenuItem>
                        {subServices?.map(option => {
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
