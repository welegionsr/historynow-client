import React, { Component } from "react";
import "./EventCardList.css";
import { IHistoryEvent } from "../common/interfaces";
import { EventCard } from "../EventCard/EventCard";
import CardColumns from "react-bootstrap/CardColumns";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

const URL = "http://localhost:5000/events";

export interface IEventCardListProps {
  autoUpdate?: boolean;
  updateInterval?: number;
  onEventsPulled: (events: IHistoryEvent[]) => void;
  events: IHistoryEvent[];
}

export interface IEventCardListState {
  isLoading: boolean;
}

export class EventCardList extends Component<
  IEventCardListProps,
  IEventCardListState
> {
  constructor(props: IEventCardListProps) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props.events.length === 0) this.getEventsData();
  }

  render() {
    const { isLoading } = this.state;
    const { events } = this.props;
    return (
      <Container className="event-list">
        <CardColumns>
          {!isLoading ? (
            events.map((event, index) => {
              return (
                //<Col sm={12} md={4} lg={3}>
                <EventCard
                  event={event}
                  key={index}
                  onDelete={this.handleDelete}
                  onUpdate={this.handleUpdate}
                />
                //</Col>
              );
            })
          ) : (
            <Spinner animation="border" variant="secondary" />
          )}
        </CardColumns>
      </Container>
    );
  }

  getEventsData = async () => {
    //change state to loading mode
    this.setState({
      isLoading: true
    });
    //go fetch data from db
    await fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log("events pulled:");
        console.log(data);
        //send the data to store
        this.props.onEventsPulled(data);
        
        this.setState({
          isLoading: false
        });
      });
  };

  handleDelete = (eventToDelete: IHistoryEvent) => {
    // const { events } = this.state;
    // const dataAfterDelete = eventsData.filter(
    //   event => event.id !== eventToDelete.id
    // );
    // this.setState({
    //   eventsData: dataAfterDelete
    // });
  };

  handleUpdate = (eventToUpdate: IHistoryEvent) => {
    //   const { eventsData } = this.state;
    //   const newEventsData = eventsData;
    //   const eventBeforeUpdate = eventsData.filter(
    //     event => event.id === eventToUpdate.id
    //   )[0];
    //   let index = eventsData.indexOf(eventBeforeUpdate);
    //   eventBeforeUpdate.eventTitle = eventToUpdate.eventTitle;
    //   eventBeforeUpdate.eventDesc = eventToUpdate.eventDesc;
    //   newEventsData[index] = eventBeforeUpdate;
    //   this.setState({
    //     eventsData: newEventsData
    //   });
    // };
  };
}

export default EventCardList;
