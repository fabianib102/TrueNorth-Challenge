import React, { useState, useEffect } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListTask from "./components/ListTask/ListTask";
import TaskService from "./services/TaskService";
import ModalTask from "./components/ModalTask/ModalTask";

const taskService = new TaskService();

function App() {
  const [listTask, setListTask] = useState([]);
  const [showValue, setShowValueModal] = useState(false);
  const [dataTask, setDataTask] = useState({});

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTasks = async () => {
    try {
      const res = await taskService.getTasks();
      if (res.data) {
        setListTask(res.data);
      }
    } catch (err) {
      console.log("The error in fetch component: ", err);
    }
  };

  return (
    <Container>
      <ListTask listTask={listTask} setShowValueModal={setShowValueModal} setDataTask={setDataTask} />
      <ModalTask
        showValue={showValue}
        dataTask={dataTask}
        setShowValueModal={setShowValueModal}
        listTask={listTask}
      />
    </Container>
  );
}

export default App;
