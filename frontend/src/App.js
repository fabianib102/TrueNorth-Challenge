import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListTask from "./components/ListTask/ListTask";
import TaskService from "./services/TaskService";
import React, { useState, useEffect } from "react";

const taskService = new TaskService();

function App() {

  const [ listTask, setListTask ] = useState([]);

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
      <ListTask listTask={listTask}/>
    </Container>
  );
}

export default App;
