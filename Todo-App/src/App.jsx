import React, { useState } from 'react'
import "./App.css";
import Header from './../public/Components/Header';
import Main from "./../public/Components/Main";

const App = () => {
  const [Todos , setTodos]  = useState([]);
  const [Filter , setFilter] = useState("All")
  // console.log(Filter)
  const handleTodo = (name,desc) =>{
 setTodos([...Todos,{ id: Date.now(), name: name, desc: desc, status: "Not Completed" },]);
  }

  function UpdateStatus(TodoStatus,TodoId){
     const arr =  Todos.map( (todo) =>(todo.id === TodoId ) ? {...todo, status: TodoStatus} : todo)
    //  console.log(arr);
     setTodos(arr);
  }
    
 function DeleteTodo(id){
   const NewFilter =  Todos.filter( (todo) => (todo.id !== id))
   setTodos(NewFilter)

 }

 function EditTodo(NewName,NewDesc,id){
  setTodos(
    Todos.map((todo) =>
      todo.id === id ? { ...todo, name: NewName, desc: NewDesc } : todo,
    ),
  );
 }

   const Filtered = Todos.filter((filterTodo) => {
     if (Filter === "All") return true; //{},{},{},{}
     return filterTodo.status === Filter; //{},{}
   });


  return (
    <>
      <div>
        <Header handleTodo={handleTodo} />
        <Main Todos={Filtered} UpdateStatus={UpdateStatus} Filter={Filter} setFilter={setFilter} DeleteTodo={DeleteTodo} EditTodo={EditTodo} />
      </div>
    </>
  );
}

export default App
