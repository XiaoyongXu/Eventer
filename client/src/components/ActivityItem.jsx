import React from 'react';
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap'

export default function ActivityItem(props) {
  const start_time = (new Date(props.activity.start_date)).toGMTString()
  const end_time = (new Date(props.activity.end_date)).toGMTString()
  let weather = '☀️';
  if (props.activity.weather === 'rain'){
    weather = '🌧️';
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <span>{weather}</span>
        <Card.Title>{props.activity.title}</Card.Title>
        <Card.Text>
          {props.activity.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{start_time}</ListGroupItem>
        <ListGroupItem>{end_time}</ListGroupItem>
        <ListGroupItem>{props.activity.location}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Join</Card.Link>
        <Card.Link href="#">More info</Card.Link>
      </Card.Body>
    </Card>
  )
}
