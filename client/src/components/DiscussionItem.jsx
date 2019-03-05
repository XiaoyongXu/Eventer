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
    //   <Card.Header>Header</Card.Header>
    //   <Card.Body>
    //     <Card.Title>Post subject</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the bulk
    //       of the card's content.
    //   </Card.Text>
    //   </Card.Body>
    // </Card>
    // <br />

    <div className="meetup-record-holder">
      <div className="container full_row">
        {this.state.users.map(function (single_user1, i) {
          var single_user = single_user1._source;
          return (
            <User
              key={i}
              index={i}
              first_name={props.users.first_name}
              last_name={props.users.last_name}
              message={props}
              event_url={single_user.event.event_url}
            ></User>
          );
        })}
      </div>
    </div>

  )
}
