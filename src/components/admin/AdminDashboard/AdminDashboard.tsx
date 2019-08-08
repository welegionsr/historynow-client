import React from "react";
import "./AdminDashboard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { AddEventModal } from "../AddEventModal/AddEventModal";

export class AdminDashboard extends React.Component {
  render() {
    return (
      <Container fluid className="admin-page">
        <Row className="justify-content-center">
          <Card>
              <Card.Body>
                  <Card.Title>Add an Event</Card.Title>
                  <AddEventModal/>
              </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
