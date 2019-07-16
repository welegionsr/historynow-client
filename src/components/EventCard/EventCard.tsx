import React from "react";
import "./EventCard.css";
import { IHistoryEvent } from "../common/interfaces";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';


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
      <Card className="event-card">
        <Card.Body>
          <Card.Title>{event.eventTitle}</Card.Title>
          <Card.Text>{event.eventDesc}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Date in History: [DATE]</ListGroupItem>
          <ListGroupItem>Price: [PRICE]</ListGroupItem>
          <ListGroupItem>Any other detail</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Add to Wishlist</Button>
        </Card.Body>
      </Card>
    );
  }
}
