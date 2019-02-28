import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap'
import ActivityItem from './ActivityItem.jsx'
class Activities extends Component {

  render() {
    const activities = this.props.activities.map(activity => {
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