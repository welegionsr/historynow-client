import React, { Component } from "react";
import "./EventCardList.css";
import { IHistoryEvent } from "../common/interfaces";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import EventCardContainer from "../EventCard/EventCardContainer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const URL = "http://localhost:5000/events";

export interface IEventCardListProps {
  autoUpdate?: boolean;
  updateInterval?: number;
  onEventsPulled: (events: IHistoryEvent[]) => void;
  allEvents: IHistoryEvent[];
  wishlistEvents: string[];
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
    if (this.props.allEvents.length === 0) this.getEventsData();
  }

  render() {
    const { isLoading } = this.state;
    const { allEvents } = this.props;
    return (
      <Container className="event-list">
        {/* <CardColumns> */}
        <Row>
          {!isLoading ? (
            allEvents.map((event, index) => {
              return (
                <>
                  {index % 3 === 0 ? <div className="w-100" /> : null}
                  <Col sm={12} md={4} lg={4} key={"col-" + index} className="card-row">
                    <EventCardContainer
                      event={event}
                      key={"card-" + index}
                    />
                  </Col>
                </>
              );
            })
          ) : (
            <Spinner animation="border" variant="secondary" />
          )}
          {/* </CardColumns> */}
        </Row>
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

}

export default EventCardList;
