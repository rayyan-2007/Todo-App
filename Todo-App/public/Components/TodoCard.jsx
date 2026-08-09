import React, { useState } from 'react'

const TodoCard = ({ todo, UpdateStatus, DeleteTodo, EditTodo }) => {

  const [isEdit, setEdit]  = useState(false) 
  
   const [Newname,setName] = useState(todo.name);
  
    const [Newdesc,setDesc] = useState(todo.desc);
  
  function handleUpdate(){
   setEdit(false)
   EditTodo(Newname,Newdesc,todo.id)
  }
  return (
    <>
      <div className="card-parent">
        <div className="card-input">
          {isEdit ? (
            <>
              <p>Name:</p>
              <input
                value={Newname}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
             
              <p>Description:</p>
              <input
                value={Newdesc}
                onChange={(e) => setDesc(e.target.value)}
                type="text" required
              />
            </>
          ) : (
            <>
              <p>Name: {todo.name}</p>
              <p>Description: {todo.desc}</p>
            </>
          )}

          <div className="option-parent">
            <label>Status:</label>
            <select
              onChange={(e) => UpdateStatus(e.target.value, todo.id)}
              value={todo.status}
            >
              <option className='op2' value="Completed">Completed</option>
              <option className='op2' value="Not Completed">Not Completed</option>
            </select>
            {isEdit && <button  className="update" onClick={handleUpdate}>Update</button>}
          </div>
        </div>

        <div className="btn-parent">
          <button className='edit' onClick={() => setEdit(true)}>Edit</button>
          <button  className="delete" onClick={() => DeleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default TodoCard
