import React from "react";
import "./EventCard.css";
import { IHistoryEvent, IUserType } from "../common/interfaces";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export interface IEventCardProps {
  event: IHistoryEvent;
  onDelete: (event: IHistoryEvent) => void;
  onUpdate: (event: IHistoryEvent) => void;
  onWishlistChange?: (eventId: string) => void;
  user?: IUserType | null;
  inWishlist?: boolean;
}

export interface IEventCardState {
  //for when you'll want to sync the data
}

export class EventCard extends React.Component<
  IEventCardProps,
  IEventCardState
> {
  // render() {
  //   const { event, inWishlist } = this.props;
  //   return (
  //     <Card className="flip-card">
  //       <div className="flip-card-inner">
  //         <div className="flip-card-front">
  //           <Card
  //             className="event-card"
  //             // style={{
  //             //   background: `url(${event.imageUrl})`,
  //             //   backgroundSize: "cover",
  //             //   backgroundPosition: "center",
  //             //   overflow: "auto",
  //             //   // minHeight: "300px",
  //             //   // maxHeight: "300px"
  //             // }}
  //           >
  //             {event.imageUrl ? (
  //               <Card.Img variant="top" src={event.imageUrl} />
  //             ) : null}
  //             <Card.Body className="event-card-body">
  //               <Card.Title>{event.title}</Card.Title>
  //               <Card.Text>{event.description}</Card.Text>
  //             </Card.Body>
  //           </Card>
  //         </div>
  //         <div className="flip-card-back">
  //           <Card className="event-card">
  //             <ListGroup className="list-group-flush">
  //               <ListGroupItem>
  //                 Date in History: {event.dateInTime}
  //               </ListGroupItem>
  //               <ListGroupItem>Price: ${event.price}</ListGroupItem>
  //               {event.country ? (
  //                 <ListGroupItem>Country: {event.country}</ListGroupItem>
  //               ) : null}
  //               {event.city ? (
  //                 <ListGroupItem>City: {event.city}</ListGroupItem>
  //               ) : null}
  //               {event.description ? (
  //                 <ListGroupItem>
  //                   <Card.Text>{event.description}</Card.Text>
  //                 </ListGroupItem>
  //               ) : null}
  //             </ListGroup>
  //             <Card.Body>
  //               <Button
  //                 variant={inWishlist ? "danger" : "primary"}
  //                 onClick={() => {
  //                   this.handleWishlistChange(event._id);
  //                 }}
  //               >
  //                 {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
  //               </Button>
  //             </Card.Body>
  //           </Card>
  //         </div>
  //       </div>
  //     </Card>
  //   );
  // }

  render() {
    const { event, inWishlist, user } = this.props;
    let isAdmin: boolean = user ? user.isAdmin : false;
    return (
      <Card
        className="event-card-test"
        // style={{
        //   background: `url(${event.imageUrl})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   overflow: "auto",
        //   // minHeight: "300px",
        //   // maxHeight: "300px"
        // }}
      >
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
        </Card.Body>
        {event.imageUrl ? <img src={event.imageUrl} alt="" /> : null}
        <div className="card-body-test">
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Date in History: {event.dateInTime}</ListGroupItem>
            <ListGroupItem>Price: ${event.price}</ListGroupItem>
            {event.country ? (
              <ListGroupItem>Country: {event.country}</ListGroupItem>
            ) : null}
            {event.city ? (
              <ListGroupItem>City: {event.city}</ListGroupItem>
            ) : null}
          </ListGroup>
          <Card.Body>
            <Button
              variant={inWishlist ? "danger" : "primary"}
              className="card-body-button"
              onClick={() => {
                this.handleWishlistChange(event._id);
              }}
            >
              {inWishlist ? (
                <span>
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    className="button-icon"
                  />
                  Remove from Wishlist
                </span>
              ) : (
                <span>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    className="button-icon"
                  />
                  Add to Wishlist
                </span>
              )}
            </Button>
          </Card.Body>
          {isAdmin ? (
            <Card.Footer>
              <ButtonGroup>
                <Button variant="dark">
                  <FontAwesomeIcon icon={faEdit} className="button-icon" />
                  <span>Edit</span>
                </Button>
                <Button variant="danger">
                  <FontAwesomeIcon icon={faTrash} className="button-icon" />
                  <span>Delete</span>
                </Button>
              </ButtonGroup>
            </Card.Footer>
          ) : null}
        </div>
      </Card>
    );
  }

  handleWishlistChange: (eventId: string) => void = eventId => {
    const { onWishlistChange, inWishlist } = this.props;
    const URL = "http://localhost:5000/wishlist";
    let userId = "";

    if (!this.props.user) {
      //no user logged in, so can't do this. this shouldn't happen but who knows
      return;
    } else {
      userId = this.props.user._id;
    }

    const data = {
      eventId,
      userId
    };
    //send request to server
    fetch(URL, {
      method: inWishlist ? "DELETE" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response);
        if (response.status < 200 || response.status > 300) {
          return Promise.reject("something went wrong, try again later!");
        }

        return response.json();
      })
      .catch(reason => {
        console.log(reason);
      })
      .then(() => {
        console.log(
          `event ${eventId} ${
            inWishlist ? "removed" : "added"
          }, wishlist of user ${userId}`
        );

        //let the store know the wishlist has changed
        if (onWishlistChange) onWishlistChange(eventId); //typescript made me add this check, I probably missed something somewhere
      });
  };
}

export default EventCard;
