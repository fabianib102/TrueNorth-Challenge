import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import './Task.scss';

function Task({ data }) {
  const [showValue, setShowValue] = useState(false);
  const handleClose = () => setShowValue(false);
  const handleShow = () => setShowValue(true);

  return (
    <>
      <Card bg={"info"} onClick={handleShow} className="task-card">
        <Card.Header>Task #{data.UUID} <small>11 mins ago</small></Card.Header>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={showValue}>
        <Modal.Header>
          <Modal.Title>
            Task #{data.UUID} - {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Complete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Task;
