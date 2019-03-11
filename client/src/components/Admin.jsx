import React, { Component } from "react";
import { Form, Button, Col} from "react-bootstrap";
import axios from "axios";
import DateInput from './DateInput.jsx';
import moment from 'moment';
import { GoogleComponent } from 'react-google-location';
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      start_date: moment().format('YYYY-MM-DDTHH:mm'),
      end_date: moment().format('YYYY-MM-DDTHH:mm'),
      location:null,
      lat:null,
      lng:null,
      weather:"pending",
      file: null,
      imagePreviewUrl: ''
    };

    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescripChange = this.handleDescripChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleWeatherChange=this.handleWeatherChange.bind(this);
  }



  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handleStartDate(event) {
    const date = moment(event.target.value).format('YYYY-MM-DDTHH:mm')

    this.setState({ start_date: date});
  }

  handleEndDate(event) {
    const date = moment(event.target.value).format('YYYY-MM-DDTHH:mm')
    this.setState({ end_date: date});
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDescripChange(event) {
    this.setState({ description: event.target.value });
  }

  handleWeatherChange(event) {
    this.setState({ weather: event.target.value });
  }

  handleLocation(event) {
    this.setState({ location: event.place, lat: event.coordinates.lat, lng: event.coordinates.lng});
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData()
    formData.append('file', this.state.file)
    formData.append('title', this.state.title)
    formData.append('description', this.state.description)
    formData.append('start_date', this.state.start_date)
    formData.append('end_date', this.state.end_date)
    formData.append('location', this.state.location)
    formData.append('weather', this.state.weather)
    formData.append('lat', this.state.lat)
    formData.append('lng', this.state.lng)
    axios
      .post("http://localhost:5000/files", formData) //response type
  }


  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img alt="" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    let weather = <div></div>
    if (this.state.lat){
      weather = (<ReactWeather
        forecast="5days"
        apikey={WEATHER_API_KEY}
        type="geo"
        lat={this.state.lat.toString()}
        lon={this.state.lng.toString()} />)
    }

    return (
      <div style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
              <Form.Label>Activity name</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                onChange={this.handleTitleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                onChange={this.handleDescripChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlInput6">
              <Form.Label>Location</Form.Label>
              <GoogleComponent
                apiKey={API_KEY}
                language={'en'}
                country={'country:in|country:ca'}
                coordinates={true}
                locationBoxStyle={'form-control'}
                locationListStyle={'list-group-item'}
                onChange={this.handleLocation} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlInput5">
              {weather}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlInput2" >
              <Form.Label>Start Date:</Form.Label>
              <div>< DateInput handleDate={this.handleStartDate} /></div>
            </Form.Group>
            <Form.Group as={Col} controlId="exampleForm.ControlInput3">
              <Form.Label>End Date:</Form.Label>
              <div>< DateInput handleDate={this.handleEndDate} /></div>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="weather">
              <Form.Label>Weather</Form.Label>
              <Form.Control as="select" onChange={this.handleWeatherChange}>
                <option>choose one</option>
                <option>sunny</option>
                <option>snow</option>
                <option>rain</option>
                <option>cloudy</option>
                <option>pending</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>


          <Form.Row>
            <Form.Group as={Col} controlId="exampleForm.ControlInput0" onSubmit={(e) => this._handleSubmit(e)}>
              <Form.Label>Poster</Form.Label>
              <div>
                <input className="fileInput"
                  type="file"
                  onChange={(e) => this._handleImageChange(e)} />
              </div>
              {$imagePreview}
            </Form.Group>
          </Form.Row>



          <Form.Group>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>

      </div>
    );
  }
}

export default Admin;
