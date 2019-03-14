import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

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
            <Button onClick={this.myFunction} variant="secondary" size="sm">{this.state.buttonName}</Button>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
}

export default EventDescription;
