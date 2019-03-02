import React,{Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description:'' };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescripChange = this.handleDescripChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDescripChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/admin', {
      Title: this.state.title,
      Description: this.state.description
    })//response type
      .then(
        res => console.log(res.data)
      );
  }

  render() {
    return (
      <div style={{ width: '50%', marginLeft: "25%", marginTop: "10%" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Activity name</Form.Label>
            <Form.Control type="text" placeholder="title" onChange={this.handleTitleChange}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" onChange={this.handleDescripChange}/>
          </Form.Group>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
        </Form>
      </div>
    )
  }
}

export default Admin;
