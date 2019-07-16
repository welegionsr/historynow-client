import React from "react";
import "./HeaderNav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { IUserType } from "../common/interfaces";
import Button from "react-bootstrap/Button";

interface IHeaderNavProps {
  user: IUserType;
  onLogout: () => void;
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
              <div>
                <span>Hello {user.firstName}!</span>
                <Button
                  variant="secondary"
                  onClick={() => {
                    this.props.onLogout();
                  }}
                >
                  Logout
                </Button>
              </div>
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
