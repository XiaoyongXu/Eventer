import React, { Component } from 'react';


import 'react-open-weather/lib/css/ReactWeather.css';
require('dotenv').config();



class Home extends Component {

  render() {
    return (
    <div className= "homeLayOut" >

        <div className="imageGallery" >

              <img
                className="imageHomepage"
                src="http://localhost:5000/logo.png"
                alt="Zero Slide"
              />


      </div>
    </div>
    );
  }
}

export default Home;