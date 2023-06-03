import React from "react";

import "stylesheets/components/input/button.scss";

const Button = ({ text, design }) => {
  return (
    <div className="button-container">
      <div className={design}>{text.toUpperCase()}</div>
    </div>
  );
};

export default Button;
