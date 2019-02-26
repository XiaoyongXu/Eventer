import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class Admin extends Component {
  render() {
    return (
      <div style={{ width: '50%', marginLeft: "25%", marginTop: "10%" }}>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Activity name</Form.Label>
                <Form.Control type="email" placeholder="title" />
          </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Date select</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Number of people</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form >
      </div>
    );
  }
}

export default Admin;