import React from "react";

import "stylesheets/modules/whychooseus.scss";

import { WhyChooseUSData } from "script/constant/Franchise";

import Title from "script/components/display/Title";
import Bullet from "script/components/display/Bullet";

function WhyChoseUs() {
  return (
    <div className="why-choose-us-container">
      <Title
        text="why choose us"
        variant="underline"
        color="red"
        size="large"
      />

      {WhyChooseUSData.map((data, index) => (
        <div className="why-choose-us-item-container" key={index}>
          <Bullet
            text={data.text.toUpperCase()}
            type="check"
            size={40}
            spacing={1}
          />
        </div>
      ))}
    </div>
  );
}

export default WhyChoseUs;
