import React, { useState } from "react";
import styled from "styled-components";

function AddTask(props) {
  const curentData = new Date().toISOString().slice(0, 10);

  const [text, setText] = useState("");
  const [date, setDate] = useState(curentData);

  const handleChangeText = (evnet) => {
    setText(evnet.target.value);
  };

  const handleChangeDate = (evnet) => {
    setDate(evnet.target.value);
    console.log(date);
  };

  const handleAdd = () => {
    const add = props.add(text, date);
    if (add == true) {
      setText("");
      setDate(curentData);
    }
  };

  const min = new Date().toISOString().slice(0, 10);
  const Button = styled.button`
    height: 20px;
    width: 100px;
  `;

  return (
    <div>
      <input type="text" value={text} onChange={handleChangeText} />
      <p>
        Do kiedy zrobić:
        <input type="date" value={date} onChange={handleChangeDate} min={min} />
      </p>
      <Button onClick={handleAdd}>Dodaj!</Button>
    </div>
  );
}
export default AddTask;
