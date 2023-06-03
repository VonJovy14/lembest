import React from "react";

import "stylesheets/components/display/title.scss";

const Title = ({ text, color, size }) => {
  return (
    <div className="title-container">
      <div className={"title-wrapper " + color + " " + size}>
        {text.toUpperCase()}
      </div>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
