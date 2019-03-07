import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import ActivityItem from './ActivityItem.jsx';
import axios from 'axios';

class Activities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities:[],
    }
    this.reload = this.reload.bind(this);
  }
  reload(){
    axios.get('/events').then(response => {
      this.setState({ activities: response.data })
    })
  }
  componentDidMount() {
    axios.get('/events').then(response => {
      this.setState({activities:response.data})
    })
  }

  render() {
    const activities = this.state.activities.map(activity => {
      return (<ActivityItem key={activity.id} activity={activity} reload={this.reload} currentUser={this.props.currentUser}/>)
    });
    return (
      <div>
        <CardColumns style={{ width: '90%', marginLeft: "5%" }}>
          {activities}
        </CardColumns>
      </div>

    );
  }
}

export default Activities;