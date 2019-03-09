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
import Profile from './components/Profile.jsx'
import ProfileEdit from './components/ProfileEdit.jsx'

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
        name: '', admin: false,id:'',
         response: '',
        post: '',
        responseToPost: ''},
        apiUrl: 'http://localhost:5000'
    }
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
    this.addActivity = this.addActivity.bind(this);
  }
  componentDidMount() {

  }

  logout() {
    this.setState({ currentUser: { 'name': '', admin: false, id:'' } });
  }
  login(name,admin,id) {

    this.setState({ currentUser: { 'name': name, admin: admin, id: id, } });
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
            <Route exact path='/Activities' component={withProps(Activities, { activities: this.state.activities, currentUser:this.state.currentUser})} />
            <Route exact path='/Discussions' component={withProps(Discussions, { messages: this.state.messages,currentUser:this.state.currentUser})} />
            <Route exact path='/Login' component={withProps(Login, { login: this.login, currentUser:this.state.currentUser})} />
            <Route exact path='/Admin' component={withProps(Admin,{addActivity: this.addActivity})} />
            <Route exact path='/register' component={withProps(Register, {login: this.login})} />
            <Route exact path='/Profile' component={withProps(Profile, { apiUrl: this.state.apiUrl, currentUser: this.state.currentUser})} />
            <Route exact path='/ProfileEdit' component={withProps(ProfileEdit, { apiUrl: this.state.apiUrl, currentUser: this.state.currentUser })} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
