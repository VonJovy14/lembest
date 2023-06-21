import React from "react";

import "stylesheets/modules/sixsteps.scss";

import { SixStepsData } from "script/constant/Franchise";
import { Grid } from "@material-ui/core";

import Title from "script/components/display/Title";
import Icon from "script/components/display/Icon";

function SixSteps() {
  return (
    <div className="six-steps-container">
      <Title text="6 EASY STEPS" color="red" size="extra-large" />

      <div className="six-steps-wrapper">
        <Grid container spacing={5}>
          {SixStepsData.map((data, index) => (
            <Grid item xs={6} key={index}>
              <div className="item-container">
                <Title text={"STEP " + (index + 1)} color="blue" size="small" />

                <div className="item-wrapper">
                  <div className="icon-container">
                    <Icon type={data.type} size={100} />
                  </div>

                  <span>{data.text}</span>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default SixSteps;
