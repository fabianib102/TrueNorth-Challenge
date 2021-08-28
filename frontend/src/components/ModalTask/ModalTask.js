import React from "react";
import { Modal, Button } from "react-bootstrap";
import TaskService from "../../services/TaskService";

const taskService = new TaskService();

function ModalTask({ showValue, dataTask, setShowValueModal, listTask }) {
  const handleClose = () => {
    setShowValueModal(false);
  };

  const handleComplete = async () => {
    try {
      dataTask.state = true;
      const indexTask = listTask.findIndex((e) => e.UUID === dataTask.UUID);
      listTask[indexTask] = dataTask;
      await taskService.updateTask(dataTask.UUID);
      setShowValueModal(false);
    } catch (err) {
      console.log("The error to update component: ", err);
    }
  };

  return (
    <Modal show={showValue}>
      <Modal.Header>
        <Modal.Title>
          Task #{dataTask.UUID} - {dataTask.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" className="btnComplete" onClick={handleComplete}>
          Complete
        </Button>
        <Button variant="secondary" className="btnClose" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalTask;
