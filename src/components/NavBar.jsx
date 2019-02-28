import React from 'react';
import { Navbar, Nav, NavDropdown,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function NavBar(props) {
  let checkLogin = (<Link to={'/Login'} className="nav-link">Login</Link>)
  if (props.currentUser.name){
    checkLogin = (<Button onClick={props.logout} className="nav-link">Logout</Button>)
  }
  let checkAdmin = (<Link to={'/Admin'} className="nav-link">Guest</Link>)
  if (props.currentUser.admin){
    checkAdmin = (<Link to={'/Admin'} className="nav-link">Admin</Link>)
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
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">E-commerce</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Others</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">More Sections</NavDropdown.Item>
            </NavDropdown>
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