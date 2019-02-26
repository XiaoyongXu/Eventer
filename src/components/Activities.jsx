import React, { Component } from 'react';
import { Card,Button,CardColumns } from 'react-bootstrap'

class Activities extends Component {
  render() {
    return (
      <div style={{ width: '80%',backgroundColor:"grey", marginLeft:"10%" } }>
        <CardColumns style={{ width: '80%', marginLeft: "10%" }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Activity 1</Card.Title>
              <Card.Text>
                This is an draft activity
              </Card.Text>
              <Button variant="primary">Join</Button>
              <Button variant="secondary">More info</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Activity 2</Card.Title>
              <Card.Text>
                This is an draft activity
              </Card.Text>
              <Button variant="primary">Join</Button>
              <Button variant="secondary">More info</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Activity 3</Card.Title>
              <Card.Text>
                This is an draft activity
              </Card.Text>
              <Button variant="primary">Join</Button>
              <Button variant="secondary">More info</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Activity 4</Card.Title>
              <Card.Text>
                This is an draft activity
              </Card.Text>
              <Button variant="primary">Join</Button>
              <Button variant="secondary">More info</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Activity 5</Card.Title>
              <Card.Text>
                This is an draft activity
              </Card.Text>
              <Button variant="primary">Join</Button>
              <Button variant="secondary">More info</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Activity 6</Card.Title>
              <Card.Text>
                This is an draft activity
              </Card.Text>
              <Button variant="primary">Join</Button>
              <Button variant="secondary">More info</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Activity 7</Card.Title>
              <Card.Text>
                This is an draft activity
              </Card.Text>
              <Button variant="primary">Join</Button>
              <Button variant="secondary">More info</Button>
            </Card.Body>
          </Card>
        </CardColumns>


      </div>

    );
  }
}

export default Activities;