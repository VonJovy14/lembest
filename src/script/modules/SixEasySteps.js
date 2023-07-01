import React from "react";

import "stylesheets/modules/sixeasysteps.scss";

import { SixStepsData } from "script/constant/Franchise";
import { Grid } from "@material-ui/core";

import Title from "script/components/display/Title";
import Icon from "script/components/display/Icon";

function SixEasySteps() {
  return (
    <div className="six-easy-steps-container">
      <Title text="6 easy steps" variant="underline" color="red" size="large" />

      <div className="six-easy-steps-wrapper">
        <Grid container spacing={5}>
          {SixStepsData.map((data, index) => (
            <Grid item xs={6} sm={4} md={6} key={index}>
              <div className="item-container">
                <Title
                  text={"STEP " + (index + 1)}
                  variant="underline"
                  color="blue"
                  size="medium"
                />

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

export default SixEasySteps;
