import React, { Component } from "react";

import { HomeCarousel } from "script/constant/Carousel";
import { Grid } from "@material-ui/core";

import FranchiseNow from "script/modules/FranchiseNow";
import ImageCarousel from "script/components/display/ImageCarousel";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container page-container">
        <div className="content-container">
          <Grid container spacing={2}>
            <Grid item xs>
              <div className="content-background">
                <FranchiseNow />
              </div>
            </Grid>

            <Grid item>
              <ImageCarousel data={HomeCarousel} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
