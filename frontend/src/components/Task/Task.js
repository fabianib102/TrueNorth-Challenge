import React, { useState } from "react";
import { Card, Modal, Button, Badge } from "react-bootstrap";
import TaskService from "../../services/TaskService";
import "./Task.scss";

const taskService = new TaskService();

function Task({ data }) {
  const [showValue, setShowValue] = useState(false);
  const [flagComplete, setFlagClose] = useState(false);
  const [flagOpen, setFlagOpen] = useState(true);
  const handleClose = () => setShowValue(false);
  const handleShow = () => setShowValue(true);

  const handleComplete = async () => {
    try {
      await taskService.updateTask(data.UUID);
      setFlagOpen(false);
      setFlagClose(true);
      setShowValue(false);
    } catch (err) {
      console.log("The error to update component: ", err);
    }
  };
  const handleOpen = () => {
    setFlagOpen(true);
    setFlagClose(false);
    setShowValue(false);
  };

  return (
    <>
      <Card bg={"info"} onClick={handleShow} className="task-card">
        <Card.Header>
          Task #{data.UUID}
          {flagComplete && (
            <Badge bg="secondary" className="task-badge">
              Done
            </Badge>
          )}
        </Card.Header>
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
          {flagOpen ? (
            <Button variant="secondary" onClick={handleComplete}>
              Complete
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleOpen}>
              Open
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Task;
