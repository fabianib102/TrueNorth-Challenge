import React from "react";
import { Row, Col } from "react-bootstrap";
import Task from "../Task/Task";

function ListTask({ listTask, setShowValueModal, setDataTask }) {

  return (
    <Row>
      {listTask.map((e, i) => {
        return (
          <Col key={i} xs={12} lg={4}>
            <Task data={e} setShowValueModal={setShowValueModal} setDataTask={setDataTask} />
          </Col>
        );
      })}
    </Row>
  );
}

export default ListTask;
