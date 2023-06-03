import React from "react";

import "stylesheets/modules/franchisenow.scss";

import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Store from "../../assets/images/store.jpg";

import Image from "script/components/display/Image";

function FranchiseNow() {
  return (
    <div className="franchise-now-container">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={8}>
          <div className="image-container">
            <div className="image-wrapper">
              <Image image={Store} fix_on="width" />
            </div>
          </div>
        </Grid>

        <Grid item xs>
          <div className="franchise-now-wrapper">
            <span className="franchise-now-text">
              Looking for profitable business, with proven system and best
              support team??? LEMBEST IS THE ANSWER!!
            </span>

            <Link to="franchise" className="link">
              <div className="franchise-button-container">
                <span>FRANCHISE NOW</span>
              </div>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FranchiseNow;
