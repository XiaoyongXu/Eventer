import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", start_date: "", end_date: "" };

    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescripChange = this.handleDescripChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStartDate(event) {
    this.setState({ start_date: event.target.value });
  }

  handleEndDate(event) {
    this.setState({ end_date: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDescripChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/admin", {
        title: this.state.title,
        description: this.state.description,
        start_date: this.state.start_date,
        end_date: this.state.end_date
      }) //response type
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <div style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="YYYY-MM-DD"
              onChange={this.handleStartDate}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="YYYY-MM-DD"
              onChange={this.handleEndDate}
            />
          </Form.Group>

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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Admin;
