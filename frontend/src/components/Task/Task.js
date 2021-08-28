import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./Task.scss";

function Task({ data, setShowValueModal, setDataTask }) {

  const handleShow = () => {
    setDataTask(data);
    setShowValueModal(true);
  };

  return (
    <>
      <Card bg={"info"} onClick={handleShow} className="task-card">
        <Card.Header>
          Task #{data.UUID}
          {data.state && (
            <Badge bg="secondary" className="task-badge">
              Done
            </Badge>
          )}
        </Card.Header>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default Task;
