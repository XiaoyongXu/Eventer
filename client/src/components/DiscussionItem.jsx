import React from 'react';
import { Card } from 'react-bootstrap'

export default function DiscussionItem(props) {
  return (
    <Card>
      <Card.Header>Discussion</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            {props.message.contents}
            {' '}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">User details</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}
