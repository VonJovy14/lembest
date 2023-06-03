import React from "react";

import "stylesheets/modules/whychooseus.scss";

import { WhyChooseUSData } from "script/constant/Franchise";

import Title from "script/components/display/Title";
import Bullet from "script/components/display/Bullet";

function WhyChooseUs() {
  return (
    <div className="why-choose-us-container">
      <Title text="WHY CHOOSE US?" color="red" size="extra-large" />

      <div className="why-choose-us-wrapper">
        {WhyChooseUSData.map((data, index) => (
          <div className="item-wrapper" key={index}>
            <Bullet text={data.text} type="check" size={40} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
