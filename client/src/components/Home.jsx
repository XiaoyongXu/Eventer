import React, { Component } from 'react';

import { Carousel} from "react-bootstrap";
import 'react-open-weather/lib/css/ReactWeather.css';
require('dotenv').config();



class Home extends Component {

  render() {
    return (
    <div className= "homeLayOut">

      <div className = "imageGallery">
          <Carousel>
            <Carousel.Item>
              <img
                className="imageHomepage"
                src="http://localhost:5000/welcome.jpg"
                alt="Zero Slide"

              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imageHomepage"
                src="http://localhost:5000/Yachtimage.jpg"
                alt="First slide"

              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imageHomepage"
                src="http://localhost:5000/BBQ.jpg"
                alt="Third slide"

              />


            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imageHomepage"
                src="http://localhost:5000/Coffee.jpg"
                alt="Third slide"

              />


            </Carousel.Item>
          </Carousel>
      </div>
    </div>
    );
  }
}

export default Home;