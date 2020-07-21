import React from "react";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.ToDoItem.completed} />
      <p>{props.ToDoItem.text}</p>
      <br />
    </div>
  );
}

export default ToDoItem;
