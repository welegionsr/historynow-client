import React from "react";
import "./AddEventForm.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IHistoryEvent } from "../../../common/interfaces";

interface IAddEventFormState {
  title: string;
  description: string;
  country: string;
  imageUrl: string;
  price: number;
  dateInTime: string;
  date: Date;
  validated: boolean;
  done: boolean;
}

interface IAddEventFormProps {
  onEventSubmit: () => void;
  onEventCreated?: (newEvent: IHistoryEvent) => void;
}

export class AddEventForm extends React.Component<
  IAddEventFormProps,
  IAddEventFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      description: "",
      country: "",
      imageUrl: "",
      price: 1,
      date: new Date(Date.now()),
      dateInTime: "",
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
      date
    } = this.state;
    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={(e: React.BaseSyntheticEvent) => this.handleSubmit(e)}
      >
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
            Can't add an event without a title!
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
          Add Event
        </Button>
      </Form>
    );
  }

  handleSubmit: (event: React.BaseSyntheticEvent) => void = event => {
    const form = event.currentTarget;
    const URL = "http://localhost:5000/events";

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

      //   send register request to server
      fetch(URL, {
        method: "POST",
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
        .then(res => {
          console.log("added new event: ", res.doc._id);
          this.setState({
            validated: true,
            done: true
          });

          //create a new IHistoryEvent object before sending to store
          let newEvent: IHistoryEvent = {
            ...res.doc
          };
          //send new event to store
          if (this.props.onEventCreated) {
            this.props.onEventCreated(newEvent);
          } //typescript made me add this check, I probably missed something somewhere

          //send command back to modal handler to close it after event was added
          this.props.onEventSubmit();
        });
    }
  };
}
