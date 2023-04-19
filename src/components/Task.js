import React from "react";

function Task(props) {
  const { id, name, deadline, data_finish, important, visable, done } =
    props.data;

  const important_style = {
    color: "red",
  };

  const finish = new Date(data_finish).toLocaleString();

  if (done == true) {
    return (
      <>
        <p>
          <strong>{name}</strong> do {deadline}
          &nbsp;&nbsp;
          <button onClick={() => props.delete(id)}>X</button>
        </p>
        <p>Zrobione {finish}</p>
      </>
    );
  } else {
    return (
      <>
        <p>
          <strong>{name}</strong> do {deadline}
          &nbsp;&nbsp;
          <button onClick={() => props.change(id)}>Done!</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </>
    );
  }
}
export default Task;
