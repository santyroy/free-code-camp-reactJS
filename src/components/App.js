import React from "react";
import ToDoItem from "./ToDoItem";
import "../todo-style.css";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      <ToDoItem key={item.id} ToDoItem={item} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
