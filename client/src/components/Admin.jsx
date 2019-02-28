import React,{Component} from 'react';
import { Form, Button } from 'react-bootstrap';


class Admin extends Component {
  constructor(props){
    super(props);
  }
  DemoShow(e) {
    e.preventDefault();
    //call the fetch function
    fetch('http://localhost:5000/demo')
      .then(res => res.json())//response type
      .then
      (
        data => console.log(data)
      ); //log the data;
  }
  render() {
    return (
      <div style={{ width: '50%', marginLeft: "25%", marginTop: "10%" }}>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Activity name</Form.Label>
            <Form.Control type="text" placeholder="title" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={this.DemoShow}>Demo</Button>
        </Form>
      </div>
    )
  }
}

export default Admin;
