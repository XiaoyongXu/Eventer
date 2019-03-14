import React, { Component } from "react";
import DiscussionItem from "./DiscussionItem.jsx";
import Sidebar from "./Sidebar.jsx";
// import Nav from 'react-bootstrap/Nav'
import Chatbar from "./Chatbar.jsx";
import JoinedSidebar from "./JoinedSidebar.jsx";
import EventDescription from "./EventDescription.jsx";

import axios from "axios";

class Discussions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      events: [],
      chatBar: false,
      nextMsg: "",
      current_event_id: "",
      userList: [],
      attendees: false,
      description: false,

    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(event) {
    axios
      .get(`http://localhost:5000/discussions/${event.id}`)
      .then(response => {
        this.setState({
          messages: response.data.msglist,
          chatBar: true,
          current_event_id: event.id,
          userList: response.data.userlist,
          attendees: true,
          description: true,

        });
      });
  }

  handleChange(event) {
    const nextMsg = event.target.value;
    this.setState({ nextMsg });
  }

  handleEnterPress(event) {
    const keyPressed = event.key;

    if (keyPressed === "Enter") {
      axios
        .post("/chatMessage", {
          event_id: this.state.current_event_id,
          user_id: this.props.currentUser.id,
          contents: this.state.nextMsg
        })
        .then(response => {
          console.log("response", response);
          this.setState({ messages: response.data });
        })
        .catch(function(e) {
          console.log("error", e);
        });
      event.target.value = "";
    }
  }

  componentDidMount() {
    axios
      .post("/eventsget", { currentUser: this.props.currentUser })
      .then(response => {
        if (response.data) {
          this.setState({ events: response.data });
        }
      });
  }

  render() {
    const messages = this.state.messages.map(message => {
      return (
        <DiscussionItem
          key={message.id}
          message={message}
          currentUser={this.props.currentUser}
        />
      );
    });
    let chat = <span />;
    if (this.state.chatBar) {
      chat = (
        <Chatbar
          handleEnterPress={this.handleEnterPress.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
      );
    }

    let rightside = <span />;
    if (this.state.attendees) {
      rightside = (
        <JoinedSidebar userList={this.state.userList} className="col-2" />
      );
    }

    let eventDescription = <div />;
    this.state.events.forEach(element => {
      if (element.id === this.state.current_event_id) {
        eventDescription = <EventDescription events={element} />;
      }
    });

    // if current user does not exists, render please
    if (this.props.currentUser.id) {

      return (
        <div className="row no-gutters" id="discussiondiv">
          <Sidebar
            handleItemClick={this.handleItemClick}
            events={this.state.events}
          />

          <div className="col-7">
            <div className="eventDescription">{eventDescription}</div>
            <div className="messages">{messages}</div>

          </div>


          {chat}
          <div className="rightsidebar" styles={{ height: "100vh" }}>
            {rightside}
          </div>

        </div>
      );
    }
    return <div />;
  }
}

export default Discussions;
