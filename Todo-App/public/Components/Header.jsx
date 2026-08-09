import React from 'react'
import { useState } from 'react';
const Header = ({handleTodo}) => {

   const [name,setName] = useState("");

   const [desc,setDesc] = useState("");

  function handleButton(){
    handleTodo(name,desc);
    setName("");
    setDesc("");
  }
   
  return (
    <>
      <div className="title">
        <p>
          {" "}
          <i class="fa-solid fa-clipboard-list"></i>
        </p>
        <h1 className="heading">Task Manager</h1>
      </div>

      <div className="input-parent">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter the task name"
        />
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          type="text"
          placeholder="Enter the task description"
        />

        <button onClick={handleButton}>Add Todo</button>
      </div>
    </>
  );
}

export default Header
