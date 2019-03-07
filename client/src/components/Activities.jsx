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
      date:""
    }
    this.reload = this.reload.bind(this);
    this.reloadMsg = this.reloadMsg.bind(this);

  }
  reload(){
    axios.post('/events',{date:this.state.date}).then(response => {
      this.setState({ activities: response.data })
    })
  }
  reloadMsg(date){
    axios.post('/events', { date: date }).then(response => {
      this.setState({ activities: response.data })
    })
  }

  componentDidMount() {
    axios.post(`/events`, { date: this.state.date }).then(response => {
      this.setState({activities:response.data})
    })
  }

  render() {

    const activities = this.state.activities.map(activity => {
      return (<ActivityItem key={activity.id} activity={activity} currentUser={this.props.currentUser} reload={this.reload}/>)
    });
    return (
      <div className="row">
        <div className="col-4">
          <Calendar reloadMsg={this.reloadMsg}/>
        </div>
        <CardColumns className="col-7">


          {activities}
        </CardColumns>
      </div>

    );
  }
}

export default Activities;