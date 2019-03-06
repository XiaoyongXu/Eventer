import React, { Component } from 'react';
import DiscussionItem from './DiscussionItem.jsx';
import Sidebar from './Sidebar.jsx';
// import Nav from 'react-bootstrap/Nav'

import axios from 'axios';

class Discussions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      events: []
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event) {
    axios.get(`/discussions/${event.id}`).then(response => {
      // console.log(response.data)
      this.setState({ messages: response.data})
    })
  }

  componentDidMount() {
    axios.get('/events').then(response => {
      this.setState({ events: response.data })
    })
  }

  render() {

    const messages = this.state.messages.map(message => {
      return (
        <DiscussionItem key={message.id} message={message} />
        )

    });
    return (
    <div className="row no-gutters">
        <Sidebar handleItemClick={this.handleItemClick} events={this.state.events}></Sidebar>
        <div className="col-10">
          {messages}
      </div>

    </div>
    );
  }
}

export default Discussions;


