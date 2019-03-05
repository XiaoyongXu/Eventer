import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import DiscussionItem from './DiscussionItem.jsx';
import axios from 'axios';

class Discussions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
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
      <div style={{ width: '80%', backgroundColor: "grey", marginLeft: "10%" }}>
        <CardColumns style={{ width: '80%', marginLeft: "10%" }}>
        {messages}
        </CardColumns>
      </div>
    );
  }
}

export default Discussions;


