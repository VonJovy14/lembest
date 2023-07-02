import React, { Component } from "react";

import { Grid } from "@material-ui/core";

import WelcomeApplicant from "script/modules/WelcomeApplicant";
import Container from "script/components/display/Container";
import ApplicantDetails from "script/modules/ApplicantDetails";
import HiringProcess from "script/modules/HiringProcess";

export default class Career extends Component {
  render() {
    return (
      <div className="career-container">
        <WelcomeApplicant />

        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Container variant="outlined" color="orange">
              <HiringProcess />
            </Container>
          </Grid>

          <Grid item xs={12} md>
            <Container variant="outlined" color="orange">
              <ApplicantDetails />
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
}
