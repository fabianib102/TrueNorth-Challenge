import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListTask from "./components/ListTask/ListTask";
import TaskService from "./services/TaskService";
import { useState, useEffect } from "react";
import axios from "axios";

const taskService = new TaskService();

function App() {

  const [ listTask, setListTask ] = useState([]);

  useEffect(() => {
    //getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    axios
      .get('https://lorem-faker.vercel.app/api?quantity=3')
      .then( res => {
        console.log(res)
      })
      .catch( err => {
        console.log(err)
      })

  }, []);

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
      <ListTask listTask={listTask}/>
    </Container>
  );
}

export default App;
