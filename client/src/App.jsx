import React, { Component } from 'react';
import './style/App.scss';
import NavBar from './components/NavBar.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Activities from './components/Activities.jsx';
import Discussions from './components/Discussions.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import Register from './components/Register.jsx'


function withProps(Component, props) {
  return function (matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: {
        name: '', admin: false, response: '',
        post: '',
        responseToPost: ''},
      activities: [{ id: 1, title: 'first activity', description: 'testing' }, { id: 2, title: 'second activity', description: 'testing2' }]
    }
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.addActivity = this.addActivity.bind(this);
  }
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  logout() {
    this.setState({ currentUser: { 'name': '', admin: false } });
  }
  login(name,admin) {
    this.setState({ currentUser: { 'name': name, admin: admin } });
  }
  addActivity(title,description){
    this.state.activities.push({title:title,description:description})
    const actList=this.state.activities
    this.setState({activities:actList})
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            < NavBar currentUser={this.state.currentUser} logout={this.logout}/>
          </div>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/Activities' component={withProps(Activities, { activities: this.state.activities })} />
            <Route exact path='/Discussions' component={Discussions} />
            <Route exact path='/Login' component={withProps(Login, { login:this.login})} />
            <Route exact path='/Admin' component={withProps(Admin,{addActivity: this.addActivity})} />
            <Route exact path='/register' component={withProps(Register, {login: this.login})} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
