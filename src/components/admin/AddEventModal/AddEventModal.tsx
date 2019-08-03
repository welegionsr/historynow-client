import React from "react";
import "./AddEventModal.css";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

interface IAddEventModalState {
    show: boolean;
}

interface IAddEventModalProps {

}

export class AddEventModal extends React.Component<IAddEventModalProps, IAddEventModalState> {
  
  state = {
      show: false
  }

  render() {
    const {show} = this.state;
    return (
        <>
        <Button variant="primary" onClick={this.handleShow}>
          New Event
        </Button>
  
        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  handleClose = () => this.setState({show: false});
  handleShow = () => this.setState({show: true});

  handleSubmit = () => {
      //add event to db and to store
  }
}
