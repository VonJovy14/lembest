import React, { Component } from "react";

import "stylesheets/page/about.scss";

import Logo from "../../assets/images/Logo 2.PNG";

import { Grid } from "@material-ui/core";
import {
  AboutDetails,
  VisionDetails,
  MissionDetails,
  GoalDetails,
} from "script/constant/About";

import Image from "script/components/display/Image";
import Title from "script/components/display/Title";
import Icon from "script/components/display/Icon";

export default class About extends Component {
  _renderAboutModule = (text, size, description) => (
    <div className="render-about-module-container">
      <Title text={text} color="red" size={size} />
      <div className="description-container">{description}</div>
    </div>
  );

  _renderAboutGoalModule = (description) => (
    <div className="render-about-module-container">
      <Title text="goal" color="red" size="medium" />

      {description.map((data, index) => (
        <div className="description-container" key={index}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Icon type="check" />
            </Grid>
            <Grid item xs>
              {data.text}
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );

  render() {
    return (
      <div className="about-container page-container">
        <div className="content-container">
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={7}>
              {this._renderAboutModule("ABOUT", "extra-large", AboutDetails)}
            </Grid>

            <Grid item xs={5}>
              <Image image={Logo} fix_on="width" />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs>
              <div className="about-content-wrapper">
                {this._renderAboutModule("vision", "medium", VisionDetails)}
              </div>
            </Grid>

            <Grid item xs>
              <div className="about-content-wrapper">
                {this._renderAboutModule("mission", "medium", MissionDetails)}
              </div>
            </Grid>

            <Grid item xs>
              <div className="about-content-wrapper">
                {this._renderAboutGoalModule(GoalDetails)}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
