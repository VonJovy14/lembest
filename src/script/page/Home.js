import React, { Component } from "react";

import "stylesheets/page/home.scss";

import { Items } from "script/constant/Product";
import { Grid } from "@material-ui/core";

import FranchiseNow from "script/modules/FranchiseNow";
import ProductCard from "script/modules/ProductCard";
import Container from "script/components/display/Container";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <FranchiseNow />

        <div className="home-product-card-container">
          <Container variant="background" color="yellow">
            <Grid container spacing={2} justifyContent="center">
              {Items.map((data, index) => (
                <Grid item xs={4} sm={3} md={2} key={index}>
                  <ProductCard data={data} variant="circle" />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}
