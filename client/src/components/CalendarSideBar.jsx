
import Nav from 'react-bootstrap/Nav'
import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import moment from  'moment';

let events = [
  {
    id: 1,
    name: "Stanley Park",
    date: "Mon Mar 04 2019"
  },
  {
    id: 2,
    name: "Richmond Center",
    date: "Wed Mar 06 2019"
  },
  {
    id: 3,
    name: "Granville Island",
    date: "Wed Mar 06 2019"
  },
  {
    id: 4,
    name: "Burnaby",
    date: "Sun Mar 10 2019"
  }
]

class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      events: events,
      term: '',

    }
  }

  onChange = date => {
    console.log("this is the date", date, typeof (date));

    const _date = moment(date).format("YYYY-MM-DD");
    // const _date = `${date.getFullYear()}/${}`
    // let dateOnly = date.toDateString();
    // console.log("This is the date without time", dateOnly);
    const url = `/activities?date=${_date}`;
    axios.get(url).then(response => {
      console.log('whoa momma', response);
      // console.log(response.data)
      // this.setState({ messages: response.data })
    })
    // this.setState({ dateOnly })

  }
  render() {
    const x = events.filter(element => {
      return element.date === this.state.dateOnly;
    });
    console.log("This is the YELL value", x)
    return (
      <div>
        {
          x.map(activity =>
            <div key={activity.id}>
              <h1>{activity.name}</h1>
              <h1>{activity.date}</h1>
            </div>

          )
        }
        <h1>{this.state.test}</h1>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default MyApp;
