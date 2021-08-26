import React from "react";
import { Row, Col } from "react-bootstrap";
import Task from "../Task/Task";

function ListTask({ listTask }) {
  return (
    <Row>
      {listTask.map((e, i) => {
        return (
          <Col key={i}>
            <Task />
          </Col>
        );
      })}
    </Row>
  );
}

export default ListTask;
