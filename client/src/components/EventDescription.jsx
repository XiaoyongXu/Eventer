import React from 'react';
import { Card } from 'react-bootstrap'

export default function EventDescription(props) {

  return (
    <Card>
      <Card.Header>{props.events.description}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
            {props.events.description}
        </blockquote>
      </Card.Body>
    </Card>
  )
}
