import React from "react";
import "./RegisterForm.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

interface IRegisterFormState {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  validated: boolean;
  done: boolean;
  showError?: boolean;
  errorMessage?: string;
}


export class RegisterForm extends React.Component<{}, IRegisterFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      validated: false,
      done: false
    };
  }
  render() {
    const {
      validated,
      userName,
      password,
      firstName,
      lastName,
      email,
      done,
      showError,
      errorMessage
    } = this.state;
    return (
      <Card className="register-form">
        <Card.Body>
          <Card.Title className="text-align-center register-form-title">
            Join us!
          </Card.Title>
          <Card.Subtitle className="register-form-subtitle">
            And go to places you've never been before!
          </Card.Subtitle>
          <hr />
          {showError ? <Alert variant="danger" className="error-message">{errorMessage}</Alert> : null}
          <Form
            noValidate
            validated={validated}
            onSubmit={(e: React.BaseSyntheticEvent) => this.handleSubmit(e)}
          >
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="fieldFirstName"
                value={firstName}
                onChange={(e: React.BaseSyntheticEvent) =>
                  this.setState({ firstName: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type="invalid">
                We need to know your name, this is serious business.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="fieldLastName"
                value={lastName}
                onChange={(e: React.BaseSyntheticEvent) =>
                  this.setState({ lastName: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type="invalid">
                We need to know your name, this is serious business.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="fieldUserName"
                value={userName}
                onChange={(e: React.BaseSyntheticEvent) =>
                  this.setState({ userName: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type="invalid">
                Can't register without a username!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="fieldPassword"
                value={password}
                onChange={(e: React.BaseSyntheticEvent) =>
                  this.setState({ password: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose your password!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="fieldEmail"
                value={email}
                type="email"
                onChange={(e: React.BaseSyntheticEvent) =>
                  this.setState({ email: e.target.value })
                }
                required
              />
              <Form.Control.Feedback type="invalid">
                Email is required for sending you receipts after purchase.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" className="register-button" type="submit">
              Join
            </Button>
          </Form>
        </Card.Body>
        {done ? <Redirect to="/login" /> : null}
      </Card>
    );
  }

  handleSubmit: (event: React.BaseSyntheticEvent) => void = event => {
    const form = event.currentTarget;
    const URL = "http://localhost:5000/users";

    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
    } else {
      const data = {
        username: this.state.userName,
        userPassword: this.state.password,
        lastName: this.state.lastName,
        firstName: this.state.firstName,
        email: this.state.email,
        isAdmin: false
      };
      //send register request to server
      fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.status === 401){
            return Promise.reject("username already taken!");
          }
          if (response.status < 200 || response.status > 300) {
            return Promise.reject("something went wrong, try again later!");
          }
          return response.json();
        })
        .then(res => {
          this.setState({
            validated: true,
            done: true,
            showError: false
          });
        })
        .catch(reason => {
          this.showError(reason);
        });
    }
  };

  showError: (message: string) => void = message => {
    this.setState({
      errorMessage: message,
      showError: true
    })
  }
}
