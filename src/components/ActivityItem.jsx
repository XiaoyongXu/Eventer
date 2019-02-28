import React from 'react';
import { Card, Button} from 'react-bootstrap'
export default function ActivityItem(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.activity.title}</Card.Title>
          <Card.Text>
            {props.activity.description}
          </Card.Text>
          <Button variant="primary">Join</Button>
          <Button variant="secondary">More info</Button>
        </Card.Body>
      </Card>
    )
}
