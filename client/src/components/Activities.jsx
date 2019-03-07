import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import ActivityItem from './ActivityItem.jsx';
import axios from 'axios';
import Calendar from './CalendarSideBar.jsx';

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
    //console.log("test ",this.state.activities);
    const temp = this.state.activities.map(element => {
      return element.start_date
    });
    const temp1= temp.map((element)=>{
      return element.substring(0,10);
    });

    const filteredActivities = this.state.activities.filter(element => {
      return element.start_date.substring(0,10) === temp1;
    })

    const activities = filteredActivities.map(activity => {
      return (<ActivityItem key={activity.id} activity={activity} currentUser={this.props.currentUser} />)
    });
    // const activities = this.state.activities.map(activity => {
    //   return (<ActivityItem key={activity.id} activity={activity} currentUser={this.props.currentUser}/>)
    // });
    return (
      <div className="row">
        <div className="col-4">
        <Calendar/>
        </div>
        <CardColumns className="col-7">


          {activities}
        </CardColumns>
      </div>

    );
  }
}

export default Activities;