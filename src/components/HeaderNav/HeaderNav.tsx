import React from 'react';
import './HeaderNav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class HeaderNav extends React.Component {
  render (){
    return (
      <Navbar bg="light" className="header" expand="lg">
          <Navbar.Brand href="/">HistoryNow</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse id="header-navbar">
              <Nav className="mr-auto">
                  <Nav.Link href="wishlist">Wishlist</Nav.Link>
                  <Nav.Link href="admin">Admin Dashboard</Nav.Link>
                  <Nav.Link href="login">Login</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default HeaderNav;
