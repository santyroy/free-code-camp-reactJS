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

  handleChange = (id) => {
    console.log("Changed ", id);
    // add the setState() method to change the state of todos items
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          // change the todo to the opposite of it's completed value
          // true -> false OR false -> true
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  };

  render() {
    const todoItems = this.state.todos.map((item) => (
      <ToDoItem
        key={item.id}
        ToDoItem={item}
        handleChange={this.handleChange}
      />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
