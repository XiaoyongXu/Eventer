import React, { Component } from 'react';
import ReactWeather from 'react-open-weather';
import { Carousel, DropdownButton, Dropdown} from "react-bootstrap";
import 'react-open-weather/lib/css/ReactWeather.css';
require('dotenv').config();


const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

class Home extends Component {

  render() {
    return (
    <div className= "homeLayOut">
      <div className = "weatherForHomePage">
          <DropdownButton className = "weatherButtonHomepage" id="dropdown-basic-button" title="Weather">
            <Dropdown.Item><ReactWeather
              forecast="5days"
              apikey={WEATHER_API_KEY}
              type="city"
              city="Vancouver" /></Dropdown.Item>

          </DropdownButton>

      </div>
      <div className = "imageGallery">
          <Carousel>
            <Carousel.Item>
              <img
                className="imageHomepage"
                src="http://localhost:5000/Yachtimage.jpg"
                alt="First slide"

              />
              <Carousel.Caption>


              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imageHomepage"
                src="http://localhost:5000/BBQ.jpg"
                alt="Third slide"

              />

              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="imageHomepage"
                src="http://localhost:5000/Coffee.jpg"
                alt="Third slide"

              />

              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
      </div>
    </div>
    );
  }
}

export default Home;