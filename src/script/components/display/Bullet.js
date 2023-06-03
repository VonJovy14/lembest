import React from "react";

import "stylesheets/components/display/bullet.scss";

import { Grid } from "@material-ui/core";

import Icon from "./Icon";

const Bullet = ({ text, type, size }) => {
  return (
    <div className="bullet-container">
      <Grid container alignItems="center" spacing={5}>
        <Grid item xs={1}>
          <Icon type={type} size={size} />
        </Grid>

        <Grid item xs={11}>
          <span>{text.toUpperCase()}</span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bullet;
