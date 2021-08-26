import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListTask from "./components/ListTask/ListTask";
import TaskService from "./services/TaskService";
// import React, { useState, useEffect } from "react";

const taskService = new TaskService();

function App() {

  const test = [
    {
      "UUID": "1234",
      "title": "The Title",
      "state": false
    },
    {
      "UUID": "1235",
      "title": "The Title 2",
      "state": true
    },
    {
      "UUID": "1236",
      "title": "The Title 3",
      "state": false
    }
  ]

  //const [ listTask, setListTask ] = useState([]);

  // useEffect(() => {
  //   getTasks();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const getTasks = async () => {
  //   try {
  //     const res = await taskService.getTasks();
  //     if (res.data) {
  //       console.log(res.data);
  //       setListTask(res.data);
  //     }
  //   } catch (err) {
  //     console.log("The error in fetch component: ", err);
  //   }
  //   console.log(listTask);
  // };

  return (
    <Container>
      <ListTask listTask={test}/>
    </Container>
  );
}

export default App;
