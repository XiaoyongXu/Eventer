import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import DateInput from './DateInput.jsx';
import moment from 'moment';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      start_date: moment().format('YYYY-MM-DDTHH:mm'),
      end_date: moment().format('YYYY-MM-DDTHH:mm'),
      location:"",
      weather:"sunny",
      file: '',
      imagePreviewUrl: ''
    };

    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescripChange = this.handleDescripChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
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
    console.log(date)
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

  handleLocation(event) {
    this.setState({ location: event.target.value });
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
    axios
      .post("http://localhost:5000/files", formData) //response type
  }

  // _handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData()
  //   formData.append('file', this.state.file)
  //   console.log(this.state.file)
  //   axios.post("http://localhost:5000/files", formData
  //   ).then(res => {
  //     console.log(res.data)
  //   })
  // }

  render() {

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img alt="" src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
    return (
      <div style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>
        <div className="previewComponent">
          <form onSubmit={(e) => this._handleSubmit(e)}>
            <input className="fileInput"
              type="file"
              onChange={(e) => this._handleImageChange(e)} />
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Activity name</Form.Label>
            <Form.Control
              type="text"
              placeholder="title"
              onChange={this.handleTitleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              onChange={this.handleDescripChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2" >
            <Form.Label>Start Date</Form.Label>
            <div>< DateInput handleDate={this.handleStartDate}/></div>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>End Date</Form.Label>
            <div>< DateInput handleDate={this.handleEndDate}/></div>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Location</Form.Label>
            <Form.Control as="select" onChange={this.handleLocation}>
              <option>Select One</option>
              <option>Vancouver</option>
              <option>Victoria</option>
            </Form.Control>
          </Form.Group>
          <Button variant="outline-success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Admin;
