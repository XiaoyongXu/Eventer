import React, { Component } from 'react';
import './style/App.scss';
import NavBar from './components/NavBar.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Activities from './components/Activities.jsx';
import Discussions from './components/Discussions.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';


class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <div>
            < NavBar />
          </div>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/Activities' component={Activities} />
            <Route exact path='/Discussions' component={Discussions} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Admin' component={Admin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
