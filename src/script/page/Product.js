import React, { Component } from "react";

import { Grid } from "@material-ui/core";
import { Items } from "script/constant/Product";

import Container from "script/components/display/Container";
import ProductCard from "script/modules/ProductCard";

export default class Product extends Component {
  render() {
    return (
      <div className="product-container">
        <Container variant="background" color="orange">
          <Grid container spacing={1}>
            {Items.map((data, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProductCard data={data} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}
