import React, { Component } from "react";
import { Card, CardGroup, ListGroup, Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from "axios";




class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      url:''
    }
    this.handleUserInfo();
    //check if props.currentUser.ID  is set if not redirect
  }
  handleUserInfo = () => {

    axios.get(`${this.props.apiUrl}/user/${this.props.currentUser.id}`).then(response => {
      this.setState({email: response.data.email,
        firstName: response.data.first_name,
        lastName: response.data.last_name})
    })
  }
  componentDidMount(){
    axios.get(`http://localhost:5000/user/${this.props.currentUser.id}`).then(
      res=>{

        this.setState({
          email: res.data.email,
          firstName: res.data.first_name,
          lastName: res.data.last_name,
          url: res.data.url
        })
      }
    )
  }

  render() {

    return (
      <div style={{ width: "50%", marginLeft: "25%", marginTop: "10%" }}>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src={this.state.url} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
      </Card.Text>
            </Card.Body>

          </Card>
          <Card style={{ width: '18rem' }}>
              <ListGroup variant="flush">
              <ListGroup.Item>Email: {this.state.email}


              </ListGroup.Item>

              <ListGroup.Item>First Name: {this.state.firstName}

              </ListGroup.Item>

              <ListGroup.Item>Last Name: {this.state.lastName}

              </ListGroup.Item>
              <Card.Footer>
                <Link to={{pathname:"/profileedit", state:{user:this.props.currentUser}}}>
                  <Button variant="primary">Edit</Button>
                </Link>
              </Card.Footer>
            </ListGroup>
          </Card>

        </CardGroup>

      </div>
    );
  }
}

export default Profile;
