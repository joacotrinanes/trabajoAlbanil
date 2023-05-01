import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img_construction from '../../img/img_construccion_350_px.jpg';
import '../../styles/carousel.css';

function DarkCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="carousel_item">
        <img
          className="carousel_img"
          src={img_construction}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item">
        <img
          className="carousel_img"
          src={img_construction}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_item">
        <img
          className="carousel_img"
          src={img_construction}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkCarousel;