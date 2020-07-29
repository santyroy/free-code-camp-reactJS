import React from "react";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.ToDoItem.completed}
        onChange={(event) => props.handleChange(props.ToDoItem.id)}
      />
      <p>{props.ToDoItem.text}</p>
      <br />
    </div>
  );
}

export default ToDoItem;
