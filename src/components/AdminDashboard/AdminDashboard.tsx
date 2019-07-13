import React from "react";
import "./AdminDashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export class AdminDashboard extends React.Component {
  render() {
    return (
      <Container fluid className="register-page">
        <Row className="justify-content-center">
          <Card>
              <Card.Body>
                  this will be the admin dashboard soon enough!
              </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
