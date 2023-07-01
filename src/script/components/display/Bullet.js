import React from "react";

import { Grid } from "@material-ui/core";

import Icon from "./Icon";

const Bullet = ({ text, type, size, spacing }) => {
  return (
    <div className="bullet-container">
      <Grid container alignItems="center" spacing={spacing}>
        <Grid item xs={2}>
          <Icon type={type} size={size} />
        </Grid>

        <Grid item xs={10}>
          <span>{text}</span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Bullet;
