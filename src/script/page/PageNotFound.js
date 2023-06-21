import React, { Component } from "react";

import "stylesheets/page/pagenotfound.scss";

import Manok from "assets/images/Manok 1.png";

import { Grid } from "@material-ui/core";

import Image from "script/components/display/Image";
import SocialIcon from "script/components/display/SocialIcon";

export default class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found-container">
        <div className="page-not-found-wrapper">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <Image image={Manok} fix_on="width" />
            </Grid>

            <Grid item xs>
              <div className="text-container">
                <span className="title-label">404</span>
                <span>We can't seem to find the page you'r looking for.</span>

                <div className="more-details-container">
                  <SocialIcon type="facebook" />
                  <SocialIcon type="instagram" />
                  <SocialIcon type="whatsapp" />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
