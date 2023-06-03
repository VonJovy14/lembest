import React, { Component } from "react";

import "stylesheets/page/franchise.scss";

import { Grid } from "@material-ui/core";

import WhyChooseUs from "script/modules/WhyChooseUs";
import SixSteps from "script/modules/SixSteps";
import BookaMeeting from "script/modules/BookaMeeting";

export default class Franchise extends Component {
  render() {
    return (
      <div className="franchise-container page-container">
        <div className="content-container">
          <Grid container spacing={2} justifyContent="center">
            <Grid item md={12} lg>
              <WhyChooseUs />
              <br />
              <br />
              <br />
              <SixSteps />
            </Grid>

            <Grid item>
              <BookaMeeting />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
