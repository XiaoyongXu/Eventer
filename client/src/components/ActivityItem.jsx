import React,{Component} from 'react';
import { Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import axios from 'axios'




class ActivityItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activity_id: props.activity.id,
      currentUser: props.currentUser,
      join:""
    }
    this.handleJoinClick = this.handleJoinClick.bind(this);
  }
  handleJoinClick(){
    axios
    .post('http://localhost:5000/newMessage', {
      activity_id:this.state.activity_id,
      currentUser_id:this.state.currentUser.id,
      currentUser_name:this.state.currentUser.name
    }).then(response => {
      this.setState({ join: response.data })
    });
  }
  componentDidMount() {
    axios
      .post('http://localhost:5000/joinCheck',{
          event_id: this.state.activity_id,
          user_id: this.state.currentUser.id
      })
    .then(response => {
      this.setState({ join: response.data })
    })
  }
  render(){
    const start_time = (new Date(this.props.activity.start_date)).toGMTString()
    const end_time = (new Date(this.props.activity.end_date)).toGMTString()
    let weather = '☀️';
    if (this.props.activity.weather === 'rain') {
      weather = '🌧️';
    }
    let checkJoin = (<Button onClick={this.handleJoinClick}>Join</Button>)
    if (this.state.join) {
      checkJoin = (<Button>Joined</Button>)
    }
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <span>{weather}</span>
          <Card.Title>{this.props.activity.title}</Card.Title>
          <Card.Text>
            {this.props.activity.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{start_time}</ListGroupItem>
          <ListGroupItem>{end_time}</ListGroupItem>
          <ListGroupItem>{this.props.activity.location}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          {checkJoin}
          <Card.Link href="#">More info</Card.Link>
        </Card.Body>
      </Card>
    )
  }
}
export default ActivityItem;
