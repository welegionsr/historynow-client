import React from "react";
import "./WishListPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export class WishListPage extends React.Component {
  render() {
    return (
      <Container fluid className="register-page">
        <Row className="justify-content-center">
          <Card>
              <Card.Body>
                  This will be the wishlist page soon enough!
              </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
