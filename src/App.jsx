import React, { Component } from 'react';
import './style/App.scss';
import NavBar from './components/NavBar.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Activities from './components/Activities.jsx';
import Discussions from './components/Discussions.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';

function withProps(Component, props) {
  return function (matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser:{name:'Tony', admin: true},
      activities: [{ id: 1, title: 'first activity', description: 'testing' }, { id: 2, title: 'second activity', description: 'testing2' }]
    }
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.addActivity = this.addActivity.bind(this);
  }
  logout() {
    this.setState({ currentUser: { 'name': '', admin: false } });
  }
  login() {
    this.setState({ currentUser: { 'name': 'Tony', admin: true } });
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
