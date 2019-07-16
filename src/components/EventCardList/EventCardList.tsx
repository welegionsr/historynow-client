import React, { Component } from "react";
import "./EventCardList.css";
import { IHistoryEvent } from "../common/interfaces";
import { EventCard } from "../EventCard/EventCard";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";

const URL = "http://localhost:5000/events";

export interface IEventCardListProps {
  autoUpdate?: boolean;
  updateInterval?: number;
}

export interface IEventCardListState {
  eventsData: IHistoryEvent[];
  isLoading: boolean;
}

export class EventCardList extends Component<
  IEventCardListProps,
  IEventCardListState
> {
  constructor(props: IEventCardListProps) {
    super(props);
    this.state = {
      eventsData: [],
      isLoading: true
    };

    this.getEventsData();
  }

  render() {
    const { eventsData, isLoading } = this.state;
    return (
      <Container className="event-list">
        <CardColumns>
          {!isLoading
            ? eventsData.map((event, index) => {
                return (
                  // <Col sm={12} md={4} lg={3}>
                    <EventCard
                      event={event}
                      key={index}
                      onDelete={this.handleDelete}
                      onUpdate={this.handleUpdate}
                    />
                  // </Col>
                );
              })
            : "Loading..."}
        </CardColumns>
      </Container>
    );
  }

  getEventsData = async () => {
    await fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState(
          {
            eventsData: data
          },
          () => {
            this.setState({
              isLoading: false
            });
          }
        );
      });
  };

  handleDelete = (eventToDelete: IHistoryEvent) => {
    const { eventsData } = this.state;
    const dataAfterDelete = eventsData.filter(
      event => event.id !== eventToDelete.id
    );
    this.setState({
      eventsData: dataAfterDelete
    });
  };

  handleUpdate = (eventToUpdate: IHistoryEvent) => {
    const { eventsData } = this.state;
    const newEventsData = eventsData;
    const eventBeforeUpdate = eventsData.filter(
      event => event.id === eventToUpdate.id
    )[0];
    let index = eventsData.indexOf(eventBeforeUpdate);
    eventBeforeUpdate.eventTitle = eventToUpdate.eventTitle;
    eventBeforeUpdate.eventDesc = eventToUpdate.eventDesc;

    newEventsData[index] = eventBeforeUpdate;

    this.setState({
      eventsData: newEventsData
    });
  };
}

export default EventCardList;
