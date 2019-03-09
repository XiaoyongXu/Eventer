import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import axios from "axios";

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      new_firstName: '',
      new_lastName: '',
      new_email:''
    }
  }

  handleChange = (event)=> {
    this.setState({ [event.target.name]: event.target.value});
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/user/${this.props.currentUser.id}`).then(
      res => {
        this.setState({
          email: res.data.email,
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          new_email:res.data.email
        })
      }
    )
  }

  handleSubmit = (event)=>{
    console.log(this.state);
    axios.post(`http://localhost:5000/user/${this.props.currentUser.id}`,
    {
      firstName: this.state.new_firstName,
      lastName: this.state.new_lastName,
      email: this.state.new_email
    }
    ).then(
      res => {
        if(res){
          //this.history.pushState(null, '/activities')
        }

      }
    )
  }

  render() {
    return (
      <div style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="" name="new_firstName" placeholder={this.state.firstName} onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
              <Form.Control type="" name="new_lastName" placeholder={this.state.lastName} onChange={this.handleChange} />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Email</Form.Label>
            <Form.Control name="new_email" defaultValue={this.state.email} placeholder={this.state.email} onChange={this.handleChange} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={this.handleSubmit}>
          Submit
       </Button>
      </Form>
    </div>
    );
  }
}

export default ProfileEdit;