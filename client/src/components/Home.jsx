import React, { Component } from 'react';
import Calendar from 'react-calendar';


class MyApp extends Component {
  constructor(props){
    super(props){
      this.state = {
        date: new Date(),
        events:events
      }

    }
  }


  onChange = date => this.setState({ date })

  render() {
    let events = [
      {
        id: 1,
        name: "Stanley Park",
        date: 20190304
      },
      {
        id: 2,
        name: "Richmond Center",
        date: 20190306
      },
      {
        id: 3,
        name: "Granville Island",
        date: 20190306
      },
      {
        id: 4,
        name: "Burnaby",
        date: 20190310
      }
    ]
    return (
      <div>
      {
        events.map(activity =>
            <div key={activity.id}>
            <h1>{activity.name}</h1>
            <h1>{activity.date}</h1>
            </div>

        )
      }
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

// class Home extends Component {
//   render() {
//     return (
//      <div>Home</div>
//     );
//   }
// }

export default MyApp;