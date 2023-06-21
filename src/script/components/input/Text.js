import React from "react";

import TextField from "@mui/material/TextField";

const Text = ({ value, label, disable, type, onTextChange }) => {
  return (
    <TextField
      fullWidth
      type={type}
      disabled={disable}
      id="outlined-basic"
      size="small"
      label={label}
      value={value}
      variant="outlined"
      color="warning"
      margin="dense"
      onChange={(e) => onTextChange(e.target.value)}
    />
  );
};

export default Text;
