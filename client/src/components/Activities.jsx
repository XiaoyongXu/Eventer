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
  }
  componentDidMount() {
    axios.get('/events').then(response => {
      // returning the data here allows the caller to get it through another .then(...)
      console.log(response.data);
      this.setState({activities:response.data})
    })
    // this.setState({ activities: activities});
  }

  render() {
    const activities = this.state.activities.map(activity => {
      return (<ActivityItem key={activity.id} activity={activity} />)
    });
    return (
      <div style={{ width: '80%',backgroundColor:"grey", marginLeft:"10%" } }>
        <CardColumns style={{ width: '80%', marginLeft: "10%" }}>
          {activities}
        </CardColumns>
      </div>

    );
  }
}

export default Activities;