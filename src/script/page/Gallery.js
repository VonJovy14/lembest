import React, { Component } from "react";

import "stylesheets/page/gallery.scss";

import { Grid } from "@material-ui/core";
import { GalleryButtons } from "script/constant/Buttons";
import { Images, Testimonial, Promotion } from "script/constant/Gallery";

import Title from "script/components/display/Title";
import GalleryCard from "script/modules/GalleryCard";

export default class Gallery extends Component {
  state = {
    activeButton: 1,
    items: Images,
    isRenderImage: true,
  };

  handleGalleryItemChange = (buttonId) => {
    this.setState({ activeButton: buttonId });

    if (buttonId === 1) {
      this.setState({ items: Images });
      this.setState({ isRenderImage: true });
    } else if (buttonId === 2) {
      this.setState({ items: Testimonial });
      this.setState({ isRenderImage: false });
    } else if (buttonId === 3) {
      this.setState({ items: Promotion });
      this.setState({ isRenderImage: false });
    }
  };

  render() {
    return (
      <div className="gallery-container page-container">
        <div className="content-container">
          <div className="gallery-nav-container">
            <Grid container>
              {GalleryButtons.map((data, index) => (
                <Grid item xs={12 / GalleryButtons.length} key={index}>
                  <div
                    onClick={() => this.handleGalleryItemChange(data.id)}
                    className={
                      this.state.activeButton === data.id
                        ? "active-button"
                        : "inactive-button"
                    }
                  >
                    <Title text={data.text} color="blue" size="medium" />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>

          <div className="item-container">
            <Grid container>
              {this.state.items.map((data, index) => (
                <Grid item xs={this.state.isRenderImage ? 3 : 4} key={index}>
                  <GalleryCard isImage={this.state.isRenderImage} data={data} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
