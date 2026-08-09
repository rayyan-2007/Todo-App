import React, { useState } from 'react'
import Header from './Header';
import TodoCard from './TodoCard';
const Main = ({ Todos, UpdateStatus, Filter ,setFilter,DeleteTodo,EditTodo }) => {
  return (
    <>
      <div className="main-text">
        <h3>My Todo List</h3>
        <div className="filter">
          <label>Status Filter: </label>
          <select value={Filter} onChange={(e) => setFilter(e.target.value)}>
            <option className="op1" value="All">
              All
            </option>
            <option className="op2" value="Completed">
              Completed
            </option>
            <option className="op3" value="Not Completed">
              Not Completed
            </option>
          </select>
        </div>
      </div>
      {Todos.length === 0 ? (
        <h1 className="welcome">Welcome to task manager app!</h1>
      ) : (
        <div className="Todo-card-parent">
          {Todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              UpdateStatus={UpdateStatus}
              DeleteTodo={DeleteTodo}
              EditTodo={EditTodo}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Main
