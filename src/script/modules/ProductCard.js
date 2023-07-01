import React from "react";

import "stylesheets/modules/productcard.scss";

import Image from "script/components/display/Image";
import Title from "script/components/display/Title";

function ProductCard({ data }) {
  return (
    <div className="product-card-container">
      <Image image={data.image} fix_on="width" />
      <Title text={data.name.toUpperCase()} variant="blocked" />
      <span>{data.description}</span>
    </div>
  );
}

export default ProductCard;
