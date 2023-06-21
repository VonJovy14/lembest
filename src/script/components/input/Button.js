import React from "react";

import "stylesheets/components/input/button.scss";

const Button = ({ text, design, onButtonClick }) => {
  return (
    <div className="button-container" onClick={() => onButtonClick()}>
      <div className={design}>
        <div className="button-mask"></div>
        {/* {design === "inline-button" ? (
          <span>{text}</span>
        ) : (
          <span>{text.toUpperCase()}</span>
        )} */}

        <span>{text.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default Button;
