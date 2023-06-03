import React, { Component } from "react";

import "stylesheets/page/products.scss";

import { Items } from "script/constant/Items";
import { Grid } from "@material-ui/core";

import ProductCard from "script/modules/ProductCard";

export default class Products extends Component {
  render() {
    return (
      <div className="product-container page-container">
        <div className="content-container content-background">
          <Grid container spacing={2}>
            {Items.map((data, index) => (
              <Grid item md={4} xs={6} key={index}>
                <ProductCard data={data} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
