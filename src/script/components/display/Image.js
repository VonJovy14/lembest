import React from "react";

import "stylesheets/components/display/image.scss";

const Image = ({ image, fix_on }) => {
  return <img src={image} className={"fix-on-" + fix_on} alt="" />;
};

export default Image;
