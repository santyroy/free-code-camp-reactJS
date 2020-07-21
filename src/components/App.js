import React from "react";
import ToDoItem from "./ToDoItem";
import "../todo-style.css";
import todoData from "./todoData";

function App() {
  const todoItems = todoData.map((item) => (
    <ToDoItem key={item.id} ToDoItem={item} />
  ));

  return <div className="todo-list">{todoItems}</div>;
}

export default App;
