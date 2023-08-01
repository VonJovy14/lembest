import React from "react";

import "stylesheets/modules/newscard.scss";

import { Grid } from "@material-ui/core";

import Image from "script/components/display/Image";
import Title from "script/components/display/Title";

function NewsCard({ data }) {
  return (
    <div className="news-card-container">
      <Grid container alignItems="center">
        <Grid item>
          <div
            className={"news-card-image-" + (data.image ? "display" : "hide")}
          >
            <div className="news-card-image-container">
              <Image image={data.image} fix_on="width" />
            </div>
          </div>
        </Grid>

        <Grid item xs>
          <Title
            text={data.title}
            variant="inline"
            size="medium"
            color="blue"
          />

          <span className="two-lines">{data.details}</span>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewsCard;
