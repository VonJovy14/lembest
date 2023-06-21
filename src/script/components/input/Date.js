import React from "react";

import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Date = ({ value, onDateChange }) => {
  return (
    <div className="date-picker-container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
              margin: "dense",
              color: "warning",
            },
          }}
          label="Date"
          value={value}
          onChange={(newValue) => onDateChange(dayjs(newValue).$d)}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Date;
