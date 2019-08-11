import React from "react";
import "./WelcomePage.css";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export class WelcomePage extends React.Component {
  render() {
    return (
      <Container fluid className="welcome-page">
        <Row className="justify-content-center">
          <div className="welcome-main">
            <h1>Hello!</h1>
            <h2>Welcome to History Now!</h2>
            <p>Ever wanted to take a trip down memory lane?</p>
            <p>You've come to the right place!</p>
            <p className="text-muted">(for the right price, of course)</p>
            <div>
              <Link to="/login">
                <Button variant="primary" className="login-button">
                  Login
                </Button>
              </Link>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Link to="/register" className="register-link">
                Or create an account for free!
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}
