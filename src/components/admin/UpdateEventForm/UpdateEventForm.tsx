import React from "react";
import "./UpdateEventForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IHistoryEvent } from "../../common/interfaces";
import Alert from "react-bootstrap/Alert";

interface IUpdateEventFormState {
  title: string;
  description: string | undefined;
  country: string | undefined;
  imageUrl: string | undefined;
  price: number;
  dateInTime: string;
  date: Date;
  validated: boolean;
  done: boolean;
  showError?: boolean;
  errorMessage?: string;
}

export interface IUpdateEventFormProps {
  onEventSubmit: () => void;
  onEventUpdated?: (event: IHistoryEvent) => void;
  eventToUpdate: IHistoryEvent;
}

export class UpdateEventForm extends React.Component<
  IUpdateEventFormProps,
  IUpdateEventFormState
> {
  constructor(props: any) {
    super(props);
    const { eventToUpdate } = this.props;
    //load event data into fields
    if (eventToUpdate)
      this.state = {
        title: eventToUpdate.title,
        description: eventToUpdate.description,
        country: eventToUpdate.country,
        imageUrl: eventToUpdate.imageUrl,
        price: eventToUpdate.price,
        dateInTime: eventToUpdate.dateInTime,
        date: eventToUpdate.date,
        validated: false,
        done: false
      };
  }
  render() {
    const {
      validated,
      title,
      description,
      country,
      imageUrl,
      price,
      dateInTime,
      date,
      showError,
      errorMessage
    } = this.state;
    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={(e: React.BaseSyntheticEvent) => this.handleSubmit(e)}
      >
        {showError ? (
          <Alert variant="danger" className="error-message">
            {errorMessage}
          </Alert>
        ) : null}
        <Form.Group controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            name="fieldCountry"
            value={country}
            onChange={(e: React.BaseSyntheticEvent) =>
              this.setState({ country: e.target.value })
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            People must know where they're going you know...
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formImageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            name="fieldImageUrl"
            value={imageUrl}
            onChange={(e: React.BaseSyntheticEvent) =>
              this.setState({ imageUrl: e.target.value })
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid image url, and something appropriate!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="fieldTitle"
            value={title}
            onChange={(e: React.BaseSyntheticEvent) =>
              this.setState({ title: e.target.value })
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            Can't update an event without a title!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            name="fieldDescription"
            value={description}
            onChange={(e: React.BaseSyntheticEvent) =>
              this.setState({ description: e.target.value })
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            Please Add a description!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="fieldPrice"
            value={price.toString()}
            type="number"
            onChange={(e: React.BaseSyntheticEvent) =>
              this.setState({ price: e.target.value })
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            Don't forget to add the price!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formDateInTime">
          <Form.Label>Date in time</Form.Label>
          <Form.Control
            name="fieldDateInTime"
            value={dateInTime}
            type="text"
            onChange={(e: React.BaseSyntheticEvent) =>
              this.setState({ dateInTime: e.target.value })
            }
            required
          />
          <Form.Text className="text-muted">
            The date in history as a string (for example "50000 BC")
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Don't forget to add the date in time!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Event date</Form.Label>
          <Form.Control
            name="fieldDate"
            value={date.toString()}
            type="date"
            onChange={(e: React.BaseSyntheticEvent) =>
              this.setState({ date: e.target.value })
            }
            required
          />
          <Form.Text className="text-muted">
            The date when we would go into the machine
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Don't forget to add the departure date!
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Event
        </Button>

        <Button variant="secondary" onClick={this.handleClose}>
          Cancel
        </Button>
      </Form>
    );
  }

  handleClose: () => void = () => {
    //leave update mode
    this.props.onEventSubmit();
  };

  handleSubmit: (event: React.BaseSyntheticEvent) => void = event => {
    const form = event.currentTarget;

    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
    } else {
      const data = {
        title: this.state.title,
        description: this.state.description,
        imageUrl: this.state.imageUrl,
        country: this.state.country,
        price: this.state.price,
        dateInTime: this.state.dateInTime,
        date: this.state.date,
        typeOfEvent: 1, //default value for now
        eraName: "General" //default value for now
      };

      const URL = `http://localhost:5000/events/${
        this.props.eventToUpdate._id
      }`;
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };

      //   send request to server
      fetch(URL, options)
        .then(response => {
          if (response.status < 200 || response.status > 300) {
            return Promise.reject("something went wrong, try again later!");
          }

          return response.json();
        })
        .then(res => {
          this.setState({
            validated: true,
            done: true,
            showError: false
          });

          //create a new IHistoryEvent object before sending to store
          let updatedEvent: IHistoryEvent = {
            ...data,
            _id: this.props.eventToUpdate._id
          };
          //send new event to store
          if (this.props.onEventUpdated) {
            this.props.onEventUpdated(updatedEvent);
          } //typescript made me add this check, I probably missed something somewhere

          //leave update mode
          this.props.onEventSubmit();
        })
        .catch(reason => {
          this.showError(reason);
        });
    }
  };

  showError: (message: string) => void = message => {
    this.setState({
      errorMessage: message,
      showError: true
    });
  };
}
