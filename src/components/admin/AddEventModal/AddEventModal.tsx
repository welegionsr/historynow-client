import React from "react";
import "./AddEventModal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddEventFormContainer from "./AddEventForm/AddEventFormContainer";

interface IAddEventModalState {
  show: boolean;
}

interface IAddEventModalProps {}

export class AddEventModal extends React.Component<
  IAddEventModalProps,
  IAddEventModalState
> {
  state = {
    show: false
  };

  render() {
    const { show } = this.state;
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          New Event
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a new event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddEventFormContainer
              onEventSubmit={() => {
                this.handleClose();
              }}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
}
