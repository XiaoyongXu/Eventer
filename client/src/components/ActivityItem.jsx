import React, { Component } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Popover,
  OverlayTrigger
} from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import GMap from "./GMap.jsx";

class ActivityItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activity_id: props.activity.id,
      join: ""
    };
    this.handleJoinClick = this.handleJoinClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  handleJoinClick() {
    console.log(this.props.currentUser.id);
    axios
      .post("http://localhost:5000/newMessage", {
        activity_id: this.state.activity_id,
        currentUser_id: this.props.currentUser.id,
        currentUser_name: this.props.currentUser.name,
        join_message: true
      })
      .then(response => {
        this.setState({ join: response.data });
      });
  }
  handleDeleteClick() {
    axios
      .post("http://localhost:5000/deleteEvent", {
        activity_id: this.state.activity_id
      })
      .then(response => {
        if (response) {
          this.props.reload();
        }
      });
  }
  componentDidMount() {
    axios
      .post("http://localhost:5000/joinCheck", {
        event_id: this.state.activity_id,
        user_id: this.props.currentUser.id
      })
      .then(response => {
        this.setState({ join: response.data });
      });
  }
  render() {
    const start_time = moment(this.props.activity.start_date).format("lll");
    const end_time = moment(this.props.activity.end_date).format("lll");
    let weather = <i className="far fa-question-circle" />;
    if (this.props.activity.weather === "rain") {
      weather = <i className="fas fa-cloud-rain" />;
    } else if (this.props.activity.weather === "sunny") {
      weather = <i className="fas fa-sun" />;
    } else if (this.props.activity.weather === "snow") {
      weather = <i className="far fa-snowflake" />;
    } else if (this.props.activity.weather === "cloudy") {
      weather = <i className="fas fa-cloud" />;
    }
    let checkJoin = <Button onClick={this.handleJoinClick}>Join</Button>;
    if (this.state.join) {
      checkJoin = <Button variant="secondary">Joined</Button>;
    }
    let checkAdmin = <span />;
    if (this.props.currentUser.admin) {
      checkAdmin = (
        <Button
          variant="danger"
          onClick={this.handleDeleteClick}
          style={{ float: "right" }}
        >
          Delete
        </Button>
      );
    }

    const center = {
      lat: parseFloat(this.props.activity.lat),
      lng: parseFloat(this.props.activity.lng)
    };
    const popover = (
      <Popover
        id="popover-basic"
        title="location"
        style={{ width: "25rem", height: "18rem" }}
      >
        <GMap
          location={this.props.activity.location}
          center={center}
          lat={parseFloat(this.props.activity.lat)}
          lng={parseFloat(this.props.activity.lng)}
          zoom={11}
        />
      </Popover>
    );
    const Example = () => (
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <Button variant="info" style={{ float: "right" }}>
          map
        </Button>
      </OverlayTrigger>
    );
    return (
      <div className = "activityClass">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.activity.url} />
        <Card.Body>
          <span>{weather}</span>
          <Card.Title>{this.props.activity.title}</Card.Title>
          <Card.Text>{this.props.activity.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{start_time}</ListGroupItem>
          <ListGroupItem>{end_time}</ListGroupItem>
          <ListGroupItem>
            {this.props.activity.location}
            <Example />
          </ListGroupItem>
        </ListGroup>

        <Card.Body>
          {checkJoin}
          {checkAdmin}
        </Card.Body>
      </Card>
      </div>
    )
  }
}
export default ActivityItem;
