import React, { Component } from 'react';

import DiscussionItem from './DiscussionItem.jsx';
import Nav from 'react-bootstrap/Nav'

import axios from 'axios';

class Discussions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      event_id: ""
    }
  }

  componentDidMount() {
    axios.get('/discussions').then(response => {
      this.setState({ messages: response.data })
    })
  }

  render() {
    const messages = this.state.messages.map(message => {
      return (<DiscussionItem key={message.id} message={message} />)
    });
    return (
    <div className="row no-gutters">
        <div className="col-2">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1" >Event 2</Nav.Link>
        <Nav.Link eventKey="link-2">Event 3</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
        </div>
        <div className="col-10">
          {messages}
      </div>

    </div>
    );
  }
}

export default Discussions;


