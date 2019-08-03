import React from "react";
import "./LoginForm.css";
import {connect} from 'react-redux';
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IUserType } from "../../common/interfaces";
import { Link, Redirect } from "react-router-dom";
import { changeLoggedUser, getUserWishlist } from "../../../actions/actions";

interface ILoginFormState {
  userNameValue: string;
  passwordValue: string;
  validated: boolean;
  done: boolean;
}

class LoginForm extends React.Component<any, ILoginFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      userNameValue: "",
      passwordValue: "",
      validated: false,
      done: false
    };
  }
  render() {
    const { validated, done } = this.state;
    return (
      <Card className="login-form">
        <Card.Body>
          <Card.Title className="text-align-center">Hello.</Card.Title>
          <Card.Subtitle>Please login to continue!</Card.Subtitle>
          <hr />
          <Form
            noValidate
            validated={validated}
            onSubmit={(e: React.BaseSyntheticEvent) => this.handleSubmit(e)}
          >
            <Form.Group controlId="formUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="fieldUserName"
                value={this.state.userNameValue}
                onChange={this.handleUserNameChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Can't login without a username!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="fieldPassword"
                value={this.state.passwordValue}
                onChange={this.handlePasswordChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please put in your password!
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <hr/>
          <Link to="/register">Never signed up before? Lets go!</Link>
        </Card.Body>
        {done ? <Redirect to="/" /> : null}
      </Card>
    );
  }

  handleUserNameChange: (event: React.BaseSyntheticEvent) => void = event => {
    this.setState({
      userNameValue: event.target.value
    });
  };

  handlePasswordChange: (event: React.BaseSyntheticEvent) => void = event => {
    this.setState({
      passwordValue: event.target.value
    });
  };

  handleSubmit: (event: React.BaseSyntheticEvent) => void = event => {
    const form = event.currentTarget;
    const URL = "http://localhost:5000/login";

    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
    } else {
      const credentials = {
        username: this.state.userNameValue,
        password: this.state.passwordValue
      };
      //send login request to server
      fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
      })
        .then(response => {
          console.log(response);
          if (response.status < 200 || response.status > 300) {
            return Promise.reject("Wrong username or password!");
          }

          return response.json();
        })
        .then(
          (user: IUserType) => {
            console.log("Welcome ", user.firstName, user.lastName);
            console.log("User details: ", user);
            //send user details to global state
            this.props.dispatch(changeLoggedUser(user));
            //send wishlist to global state
            console.log("user wishlist: " + user.savedEvents);
            if (user.savedEvents && user.savedEvents.length > 0) this.props.dispatch(getUserWishlist(user.savedEvents));
            this.setState({
              validated: true,
              done: true
            });
          },
          reason => {
            console.log(reason);
          }
        );
    }


  };
}

export default connect()(LoginForm);