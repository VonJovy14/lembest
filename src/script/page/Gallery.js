import React, { Component } from "react";

import { Grid } from "@material-ui/core";
import { GalleryButtons } from "script/constant/Buttons";
import { Images, Testimonial, Promotion } from "script/constant/Gallery";

import GroupButton from "script/components/input/GroupButton";
import GalleryCard from "script/modules/GalleryCard";

export default class Gallery extends Component {
  state = { activeId: 1, items: Images, isRenderImage: true };

  handleItemChange = (buttonId) => {
    this.setState({ activeId: buttonId });

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
      <div className="gallery-container">
        <GroupButton
          data={GalleryButtons}
          activeId={this.state.activeId}
          color="orange"
          onButtonClick={(data) => this.handleItemChange(data)}
        />

        <div className="item-container">
          <Grid container spacing={this.state.isRenderImage ? 0 : 1}>
            {this.state.items.map((data, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={this.state.isRenderImage ? 3 : 4}
                key={index}
              >
                <GalleryCard isImage={this.state.isRenderImage} data={data} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
