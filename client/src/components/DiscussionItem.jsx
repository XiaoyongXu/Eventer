import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function DiscussionItem(props) {
console.log(props);
  return (
    // <Card style={{ width: '18rem' }}>
    //   <Card.Body>
    //     <span>Discussion</span>
    //     <Card.Title>{props.message.id}</Card.Title>
    //     <Card.Text>
    //       {props.message.description}
    //     </Card.Text>
    //   </Card.Body>
    //   <ListGroup className="message-group">
    //     <ListGroupItem> {props.message.contents}</ListGroupItem>
    //     <ListGroupItem> test 2</ListGroupItem>
    //     <ListGroupItem> test 3</ListGroupItem>
    //   </ListGroup>
    //   <Card.Body>
    //     <Card.Link href="#">Join</Card.Link>
    //     <Card.Link href="#">More info</Card.Link>
    //   </Card.Body>
    // </Card>

    // <Card border="dark" style={{ width: '18rem' }}>
    //   <Card.Header>Discussion</Card.Header>
    //   <Card.Body>
    //     <Card.Title>{props.message.contents}</Card.Title>
    //     <Card.Text>
    //       User details
    //   </Card.Text>
    //   </Card.Body>
    // </Card>

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
