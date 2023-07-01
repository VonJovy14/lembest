import React from "react";

import "stylesheets/modules/navigationpanel.scss";

import { Navigation } from "script/constant/Buttons";
import { Link } from "react-router-dom";

function NavigationPanel({ onButtonClick }) {
  return (
    <div className="navigation-panel-container">
      {Navigation.map((data, index) => (
        <Link
          to={data.link}
          className="link"
          key={index}
          onClick={() => onButtonClick()}
        >
          <div className="navigation-button">{data.text.toUpperCase()}</div>
        </Link>
      ))}
    </div>
  );
}

export default NavigationPanel;
