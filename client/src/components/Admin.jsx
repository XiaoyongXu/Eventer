import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import DateInput from './DateInput.jsx'


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", start_date: new Date(), end_date: new Date(),location:"",weather:"sunny"};

    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescripChange = this.handleDescripChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleStartDate(event) {
    this.setState({ start_date: event.target.value});
  }

  handleEndDate(event) {
    this.setState({ end_date: event.target.value});
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
    axios
      .post("http://localhost:5000/admin", {
        title: this.state.title,
        description: this.state.description,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        location: this.state.location,
        weather: this.state.weather
      }) //response type
      .then(res => console.log(res));
  }

  render() {
    return (
      <div style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>

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
            <div onChange={this.handleStartDate}>< DateInput /></div>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>End Date</Form.Label>
            <div onChange={this.handleEndDate}>< DateInput /></div>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput4">
            <Form.Label>Location</Form.Label>
            <Form.Control as="select" onChange={this.handleLocation}>
              <option>Defalut empty</option>
              <option>Vancouver</option>
              <option>Victoria</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Admin;
