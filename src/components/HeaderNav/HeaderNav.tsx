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
    const isAdmin = user && user.isAdmin;
    return (
      <Navbar className="header" variant="dark" expand="lg">
        <Navbar.Brand>
          <span className="logo-icon">H</span>
          <Link className="logo-link" to="/">
            HistoryNow
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="header-navbar">
          <Nav className="mr-auto" style={{ flexGrow: 1 }}>
            {user ? (
              <LinkContainer to="/wishlist">
                <Nav.Link>Wishlist</Nav.Link>
              </LinkContainer>
            ) : null}
            {isAdmin ? (
              <LinkContainer to="/admin">
                <Nav.Link>Admin Dashboard</Nav.Link>
              </LinkContainer>
            ) : null}
            <div style={{ flex: 1 }} />
            {user ? (
              <div className="header-user-area">
                <span className="header-greeting">
                  Hello {user.firstName}!{" "}
                </span>
                <Button
                  variant="secondary"
                  className="header-logout-btn"
                  onClick={() => {
                    this.props.onLogout();
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link className="header-link">Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNav;
