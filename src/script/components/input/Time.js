import React from "react";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const Time = ({ value, onTimeChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        slotProps={{
          textField: {
            size: "small",
            fullWidth: true,
            margin: "dense",
            color: "warning",
          },
        }}
        label="Time"
        value={value}
        onChange={(newValue) => onTimeChange(dayjs(newValue).$d)}
      />
    </LocalizationProvider>
  );
};

export default Time;
