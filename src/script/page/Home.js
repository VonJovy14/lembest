import React, { Component } from "react";

import "stylesheets/page/home.scss";

import { Items } from "script/constant/Product";
import { Grid } from "@material-ui/core";
import { NewsData } from "script/constant/News";
import Carousel from "react-bootstrap/Carousel";

import FranchiseNow from "script/modules/FranchiseNow";
import ProductCard from "script/modules/ProductCard";
import Container from "script/components/display/Container";
import Image from "script/components/display/Image";

export default class Home extends Component {
  state = {
    carouselData: [],
  };

  componentDidMount = () => {
    this.handleCarouselData();
  };

  handleCarouselData = () => {
    const newCarouselData = NewsData.filter((item) => item.home_display);
    this.setState({ carouselData: newCarouselData });
  };

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

        <div className="home-carousel-container">
          <Container variant="background" color="red">
            <div className="home-carousel-wrapper">
              <Carousel interval={2000}>
                {this.state.carouselData.map((data, index) => (
                  <Carousel.Item key={index}>
                    <div className="home-carousel-item-image-container">
                      <div className="home-carousel-item-image-wrapper-large position-center">
                        <Image image={data.image} fix_on="width" />
                      </div>

                      <div className="home-carousel-item-image-wrapper-small">
                        <Image image={data.image} fix_on="width" />
                      </div>
                    </div>

                    <Carousel.Caption>
                      <div className="home-carousel-item-caption-container">
                        <span>{data.title.toUpperCase()}</span>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
