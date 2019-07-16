import React from "react";
import "./HeaderNav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { IUserType } from "../common/interfaces";

interface IHeaderNavProps {
  user: IUserType;
}

class HeaderNav extends React.Component<IHeaderNavProps> {
  render() {
    const { user } = this.props;
    return (
      <Navbar bg="light" className="header" expand="lg">
        <Navbar.Brand>
          <Link to="/">HistoryNow</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="header-navbar">
          <Nav className="mr-auto">
            <LinkContainer to="/wishlist">
              <Nav.Link>Wishlist</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin">
              <Nav.Link>Admin Dashboard</Nav.Link>
            </LinkContainer>
            {user ? (
              <span>Hello {user.firstName}!</span>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNav;
