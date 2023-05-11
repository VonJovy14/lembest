import React from "react";

import "stylesheets/modules/header.scss";

import { Grid } from "@material-ui/core";

function Header() {
  return (
    <div className="header-container">
      <Grid container>
        <Grid item xs>
          a
        </Grid>

        <Grid item>a</Grid>

        <Grid item>a</Grid>

        <Grid item>a</Grid>
      </Grid>
    </div>
  );
}

export default Header;
