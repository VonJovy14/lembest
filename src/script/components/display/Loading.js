import React from "react";

import "stylesheets/components/display/loading.scss";

import CircularProgress from "@mui/material/CircularProgress";

const Loading = ({ text }) => {
  return (
    <div className="loading-container">
      <div className="circular-progress-bar-container">
        <CircularProgress />
      </div>

      <span>{text}</span>
    </div>
  );
};

export default Loading;
