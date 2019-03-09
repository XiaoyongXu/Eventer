import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import axios from 'axios';
import moment from 'moment';

class DiscussionItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      timePosted: ''
    }

  }

  componentDidMount() {
    axios.get(`http://localhost:5000/user/${this.props.currentUser.id}`)
    .then(res => {
      this.setState({

        firstName: res.data.first_name,
        lastName: res.data.last_name,
        timePosted: this.props.message.created_at
      })
    })
  }

  render (){
    const time = moment(this.state.timePosted).fromNow();
    return (
      <Card>
        <Card.Header>{this.state.firstName}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              {this.props.message.contents}
              {' '}
            </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{time}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    )
  }
}
export default DiscussionItem;