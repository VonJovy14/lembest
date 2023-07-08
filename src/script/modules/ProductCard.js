import React from "react";

import "stylesheets/modules/productcard.scss";

import Image from "script/components/display/Image";
import Title from "script/components/display/Title";

function ProductCard({ data, variant }) {
  return (
    <div className={"product-card-container" + (variant ? "-" + variant : "")}>
      <div className="product-image-container">
        <Image image={data.image} fix_on="width" />
      </div>

      <div className="product-details-container">
        <Title text={data.name.toUpperCase()} variant="blocked" />
        <span>{data.description}</span>
      </div>
    </div>
  );
}

export default ProductCard;
