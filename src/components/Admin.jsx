import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Admin(props){

  return (
    <div style={{ width: '50%', marginLeft: "25%", marginTop: "10%" }}>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Activity name</Form.Label>
              <Form.Control type="email" placeholder="title" />
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
