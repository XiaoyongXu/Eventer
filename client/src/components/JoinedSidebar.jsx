import React from 'react';
import { Card } from 'react-bootstrap'

export default function UsersJoined(props) {
  console.log("this is the stuff ", props.userList)
  return (
    <Card >
      <Card.Header>Attendees</Card.Header>
      <Card.Body>
        {props.userList.map(user => {
           return <ul>{user}</ul>
        })}
      </Card.Body>
    </Card>
  )
}