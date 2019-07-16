import React from "react";
import "./LoginPage.css";
import LoginForm from "./LoginForm/LoginForm";
import Row from "react-bootstrap/Row";

export class LoginPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <Row className="justify-content-center">
          <LoginForm />
        </Row>
      </div>
    );
  }
}
