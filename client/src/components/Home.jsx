import React, { Component } from 'react';

import { Carousel} from "react-bootstrap";
import 'react-open-weather/lib/css/ReactWeather.css';
require('dotenv').config();



class Home extends Component {

  render() {
    return (
    <div className= "homeLayOut" >

        <div className="imageGallery" >
          <Carousel>
            <Carousel.Item>
              <img
                className="imageHomepage"
                src="http://localhost:5000/logo.png"
                alt="Zero Slide"
              />

            </Carousel.Item>

          </Carousel>
      </div>
    </div>
    );
  }
}

export default Home;