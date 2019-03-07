import React, { Component } from 'react';
import DiscussionItem from './DiscussionItem.jsx';
import Sidebar from './Sidebar.jsx';
// import Nav from 'react-bootstrap/Nav'
import Chatbar from './Chatbar.jsx';

import axios from 'axios';

class Discussions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      events: [],
      chatBar:false,
      nextMsg: '',
      current_event_id:""
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event) {
    axios.get(`/discussions/${event.id}`).then(response => {
      // console.log(response.data)
      this.setState({ messages: response.data, chatBar: true, current_event_id: event.id})
    })
  }

  handleChange(event) {
    const nextMsg = event.target.value;
    this.setState({ nextMsg });
  }

  handleEnterPress(event) {
    const keyPressed = event.key;

    if (keyPressed === 'Enter') {
      axios.post("/chatMessage", {
        event_id: this.state.current_event_id,
        user_id: this.props.currentUser.id,
        contents: this.state.nextMsg
      }).then(response => {
        console.log("we are in the response");
        console.log(response);
        this.setState({ messages: response.data })
      }).catch(function(e){
        console.log("we are are in the error");
        console.log(e);
      })
      event.target.value = '';
    }
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
    let chat = (<span></span>)
    if (this.state.chatBar){
      chat = (< Chatbar handleEnterPress={this.handleEnterPress.bind(this)} handleChange={this.handleChange.bind(this)}/>)
    }

    return (
    <div className="row no-gutters">
      <Sidebar handleItemClick={this.handleItemClick} events={this.state.events}></Sidebar>
      <div className="col-10">
        {messages}
        {chat}
      </div>

    </div>
    );
  }
}

export default Discussions;


