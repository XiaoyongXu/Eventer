import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }
  componentDidMount() {
    axios.get(URL)
      .then(res => {
        this.setState({
          data: res.data
        });
      });
    }
  render() {
    return (
      <div>
        Home
        <img src='http://localhost:5000/test.jpg' alt='test'/>
      </div>
    )
  }
}

export default Home;
