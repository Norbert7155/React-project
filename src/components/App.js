import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [task, setTask] = useState([
    {
      id: 0,
      name: "Iść do fryziera",
      deadline: "2022-07-19",
      data_finish: "",
      visable: true,
      done: false,
    },
    {
      id: 1,
      name: "Zrobić zakupy",
      deadline: "2022-07-08",
      data_finish: "",
      visable: true,
      done: false,
    },
    {
      id: 2,
      name: "Ukończyć kurs",
      deadline: "2022-07-10",
      data_finish: "",
      visable: true,
      done: false,
    },
  ]);
  const [idCouter, setidCouter] = useState(3);

  const deleteTask = (id) => {
    console.log("delet" + id);
    const tab = [...task];
    const index = tab.findIndex((task) => task.id === id);
    tab.splice(index, 1);
    setTask(tab);
  };
  const changestatus = (id) => {
    console.log("change" + id);
    let tab = [...task];
    tab.map((task) => {
      if (task.id === id) {
        task.visable = false;
        task.done = true;
        task.data_finish = new Date().getTime();
      }
    });
    setTask(tab);
  };

  const handleAdd = (text, date) => {
    console.log("handleAdd");

    const Newtask = {
      id: idCouter,
      name: text,
      deadline: date,
      data_finish: "",
      visable: true,
      done: false,
    };

    const tab = [...task];
    tab.push(Newtask);
    setTask(tab);
    setidCouter(idCouter + 1);
    return true;
  };

  const MainComponent = styled.div`
    margin-top: 70px;
    text-align: center;
  `;

  return (
    <MainComponent>
      <AddTask add={handleAdd} />
      <TaskList tasks={task} delete={deleteTask} change={changestatus} />
    </MainComponent>
  );
}

export default App;
