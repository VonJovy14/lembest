import React from "react";

import { Carousel } from "react-bootstrap";

const ImageCarousel = ({ data }) => {
  return (
    <Carousel fade>
      {data.map((data, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={data.image} alt={data.title} />
          <Carousel.Caption>
            <h3>{data.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
