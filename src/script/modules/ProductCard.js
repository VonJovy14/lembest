import React from "react";

import "stylesheets/modules/productcard.scss";

import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

// import Tooltip from "@mui/material/Tooltip";
import Image from "script/components/display/Image";
import Title from "script/components/display/Title";

function ProductCard({ data, variant }) {
  return (
    <div className={"product-card-container" + (variant ? "-" + variant : "")}>
      <div className="product-image-container">
        <Link to="product" className="link">
          <Tooltip title={data.name.toUpperCase()}>
            <div>
              <Image image={data.image} fix_on="width" />
            </div>
          </Tooltip>
        </Link>
      </div>

      <div className="product-details-container">
        <Title text={data.name.toUpperCase()} variant="blocked" />
        <span>{data.description}</span>
      </div>
    </div>
  );
}

export default ProductCard;
