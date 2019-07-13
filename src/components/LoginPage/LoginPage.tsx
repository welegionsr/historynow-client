import React from "react";
import "./LoginPage.css";
import { LoginForm } from "../LoginForm/LoginForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export class LoginPage extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <LoginForm />
        </Row>
      </Container>
    );
  }
}
