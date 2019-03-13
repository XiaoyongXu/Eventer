import React, { Component } from "react";
import { Card } from "react-bootstrap";

class EventDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      context: this.props.events.description.substr(0, 100),
      buttonName: "Read More",
      more: false,
      dot: "..."
    };
    this.myFunction = this.myFunction.bind(this);
  }

  myFunction() {
    if (this.state.more === false) {
      this.setState({
        context: this.props.events.description,
        more: true,
        buttonName: "Read Less",
        dot:''
      });
    } else {
      this.setState({
        context: this.props.events.description.substr(0, 100),
        more: false,
        buttonName: "Read More",
        dot: '...'
      });
    }
  }

  render() {
    return (
      <Card>
        <Card.Header>{this.props.events.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {this.state.context}
              {this.state.dot}
            </p>
            <button onClick={this.myFunction}>{this.state.buttonName}</button>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
}

export default EventDescription;
