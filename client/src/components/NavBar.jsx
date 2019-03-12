import React from 'react';
import { Navbar, Nav,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default function NavBar(props) {
  let checkLogin = (<Link to={'/Login'} className="nav-link">Login</Link>)
  if (props.currentUser.name){
    checkLogin = (<Button onClick={props.logout} className="nav-link">Logout</Button>)
  }
  let checkAdmin = (<Link to={'/home'} className="nav-link">guest</Link>)
  if (props.currentUser.name) {
    if (props.currentUser.admin) {
      checkAdmin = (<Link to={'/admin'} className="nav-link">New</Link>)
    } else {
      checkAdmin = (<Link to={'/profile'} className="nav-link">profile</Link>)
    }
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >Dream Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to={'/home'} className="nav-link"> Home </Link>
            <Link to={'/activities'} className="nav-link">Activities</Link>
            <Link to={'/discussions'} className="nav-link">Discussions</Link>

          </Nav>
          <Nav>
            <Navbar.Brand>{props.currentUser.name}</Navbar.Brand>
            {checkLogin}
            {checkAdmin}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}