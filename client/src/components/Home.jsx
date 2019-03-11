import React, { Component } from 'react';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
require('dotenv').config();

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

class Home extends Component {

  render() {
    return (
      <div>
        <ReactWeather
          forecast="5days"
          apikey={WEATHER_API_KEY}
          type="city"
          city="Vancouver" />
      </div>
    );
  }
}

export default Home;