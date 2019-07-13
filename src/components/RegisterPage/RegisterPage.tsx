import React from "react";
import "./RegisterPage.css";
import Container from "react-bootstrap/Container";
import {RegisterForm} from "./RegisterForm/RegisterForm";
import Row from "react-bootstrap/Row";

export class RegisterPage extends React.Component {
  render() {
    return (
      <Container fluid className="register-page">
        <Row className="justify-content-center">
          <RegisterForm/>
        </Row>
      </Container>
    );
  }
}
