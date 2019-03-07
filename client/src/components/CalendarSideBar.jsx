

import React, { Component } from 'react';
import Calendar from 'react-calendar';
import moment from  'moment';

class CalendarItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }
  onChange = date => {
    const _date = moment(date).format("YYYY-MM-DD");
    // const url = `/activities/${_date}`;

    this.props.reloadMsg(_date)
  }
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default CalendarItem;
