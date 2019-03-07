import React,{Component} from 'react';
import { Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import axios from 'axios'
import moment from 'moment'


class ActivityItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activity_id: props.activity.id,

      join:""
    }
    this.handleJoinClick = this.handleJoinClick.bind(this);
  }
  handleJoinClick(){
    axios
    .post('http://localhost:5000/newMessage', {
      activity_id:this.state.activity_id,
      currentUser_id:this.props.currentUser.id,
      currentUser_name:this.props.currentUser.name
    }).then(response => {
      this.setState({ join: response.data })
    });
  }
  componentDidMount() {
    axios
      .post('http://localhost:5000/joinCheck',{
          event_id: this.state.activity_id,
          user_id: this.props.currentUser.id
      })
    .then(response => {
      this.setState({ join: response.data })
    })
  }
  render(){
    const start_time = moment(this.props.activity.start_date).format('lll')
    const end_time = moment(this.props.activity.end_date).format('lll')
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
