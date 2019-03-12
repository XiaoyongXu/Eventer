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
      <div className= "ActTable">
      <div>
          <img className= "yachtImage" alt="" src="http://localhost:5000/Yachtimage.jpg"></img>
      </div>
        <div className="buttonCalendar">
        <button type="button" class="calendar-button" data-toggle="modal" data-target="#exampleModalCenter">
                  Calendar
        </button>
      </div>

        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Event Calendar</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <Calendar reloadMsg={this.reloadMsg} />
              </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="row">

        <CardColumns>


          {activities}
        </CardColumns>
      </div>
      </div>

    )
  }
}

export default Activities;