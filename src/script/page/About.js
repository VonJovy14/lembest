import React, { Component } from "react";

import "stylesheets/page/about.scss";

import Logo from "../../assets/images/Logo2.PNG";

import { Grid } from "@material-ui/core";
import {
  AboutDetails,
  VisionDetails,
  MissionDetails,
  GoalDetails,
} from "script/constant/About";

import Image from "script/components/display/Image";
import Title from "script/components/display/Title";
import Bullet from "script/components/display/Bullet";
import News from "script/modules/News";

export default class About extends Component {
  _renderAboutModule = (text, description) => (
    <div className="render-about-module-container">
      <Title
        text={text.toUpperCase()}
        variant="underline"
        color="red"
        size="large"
      />
      <div className="description-container">{description}</div>
    </div>
  );

  _renderAboutGoalModule = (text, description) => (
    <div className="render-about-module-container">
      <Title
        text={text.toUpperCase()}
        variant="underline"
        color="red"
        size="large"
      />

      {description.map((data, index) => (
        <div className="description-container" key={index}>
          <Bullet
            text={data.text}
            type="check"
            size={30}
            key={index}
            spacing={1}
          />
        </div>
      ))}
    </div>
  );

  render() {
    return (
      <div className="about-container">
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8} md={7}>
            {this._renderAboutModule("ABOUT", AboutDetails)}
          </Grid>

          <Grid item xs={6} md={5}>
            <Image image={Logo} fix_on="width" />
          </Grid>
        </Grid>

        <div className="about-content-container">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <div className="about-content-wrapper">
                {this._renderAboutModule("vision", VisionDetails)}
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div className="about-content-wrapper">
                {this._renderAboutModule("mission", MissionDetails)}
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div className="about-content-wrapper">
                {this._renderAboutGoalModule("goal", GoalDetails)}
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="about-news-container">
          <News />
        </div>
      </div>
    );
  }
}
