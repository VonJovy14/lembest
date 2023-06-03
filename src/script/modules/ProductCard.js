import React from "react";

import "stylesheets/modules/productcard.scss";

import Image from "script/components/display/Image";

function ProductCard({ data }) {
  return (
    <div className="product-card-container">
      <Image image={data.image} fix_on="width" />
      <span className="product-name">{data.name.toUpperCase()}</span>
      <span>{data.description}</span>
    </div>
  );
}

export default ProductCard;
