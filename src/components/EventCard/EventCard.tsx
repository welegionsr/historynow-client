import React from "react";
import "./EventCard.css";
import { IHistoryEvent } from "../common/interfaces";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

export interface IEventCardProps {
  event: IHistoryEvent;
  onDelete: (event: IHistoryEvent) => void;
  onUpdate: (event: IHistoryEvent) => void;
}

export interface IEventCardState {
  //for when you'll want to sync the data
}

export class EventCard extends React.Component<
  IEventCardProps,
  IEventCardState
> {
  render() {
    const { event } = this.props;
    return (
      <Card className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Card className="event-card">
              {event.eventImageUrl ? (
                <Card.Img variant="top" src={event.eventImageUrl} />
              ) : null}
              <Card.Body>
                <Card.Title>{event.eventTitle}</Card.Title>
                <Card.Text>{event.eventDesc}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="flip-card-back">
            <Card className="event-card">
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Date in History: {event.eventDate}
                </ListGroupItem>
                <ListGroupItem>Price: ${event.price}</ListGroupItem>
                {event.country ? (
                  <ListGroupItem>Country: {event.country}</ListGroupItem>
                ) : null}
                {event.city ? (
                  <ListGroupItem>City: {event.city}</ListGroupItem>
                ) : null}
                {event.eventDesc ? (
                  <ListGroupItem>
                    <Card.Text>{event.eventDesc}</Card.Text>
                  </ListGroupItem>
                ) : null}
              </ListGroup>
              <Card.Body>
                <Button variant="primary">Add to Wishlist</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Card>
    );
  }
}
