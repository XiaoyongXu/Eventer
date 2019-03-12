import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {first_name:'',last_name:'',email: '', password: '',confirm_password:''};
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFirstNameChange(event) {
    this.setState({ first_name: event.target.value });
  }
  handleLastNameChange(event) {
    this.setState({ last_name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleConfirmPasswordChange(event) {
    this.setState({ confirm_password: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    if (this.state.password === this.state.confirm_password){
      axios.post('http://localhost:5000/register', {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      })//response type
        .then(
          res => {
            if (res.data) {
              this.props.login(this.state.first_name, false, res.data)
            } else {

            }
          }
        );
    }else{

    }
  }
  render() {
    return (
      <div style={{ width: '50%', marginLeft: "25%", marginTop: "10%" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" onChange={this.handleFirstNameChange}/>
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" onChange={this.handleLastNameChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" onChange={this.handleConfirmPasswordChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Form.Group style={{ marginTop: '1em' }}>
            <i>Already have an account? <Link to={'/Login'}> login</Link></i>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
export default Register;