import React,{Component} from 'react';
import { Form,Button} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/login', {
      email: this.state.email,
      password: this.state.password
    })//response type
      .then(
        res => {
          if (res.data){
            this.props.login(res.data.first_name,res.data.isAdmin)
          }
        },
      );
  }

  render(){
    return (
      <div style={{ width: '50%', marginLeft: "25%", marginTop: "10%" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Form.Group style={{marginTop:'1em'}}>
            <i>Does not have an account? <Link to={'/register'}> register now </Link></i>
          </Form.Group>

        </Form>
      </div>
    );
  }
}
export default Login;