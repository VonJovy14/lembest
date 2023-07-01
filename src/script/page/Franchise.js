import React, { Component } from "react";

import { Grid } from "@material-ui/core";

import WhyChoseUs from "script/modules/WhyChoseUs";
import SixEasySteps from "script/modules/SixEasySteps";
import FranchiseeDetails from "script/modules/FranchiseeDetails";

export default class Franchise extends Component {
  render() {
    return (
      <div className="franchise-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <WhyChoseUs />
            <SixEasySteps />
          </Grid>

          <Grid item xs={12} md={6}>
            <FranchiseeDetails />
          </Grid>
        </Grid>
      </div>
    );
  }
}
