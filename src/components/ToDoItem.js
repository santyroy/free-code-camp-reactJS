import React from "react";

function ToDoItem(props) {
  const styleCompleted = {
    color: "grey",
    textDecoration: "line-through",
    fontStyle: "italic",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.ToDoItem.completed}
        onChange={(event) => props.handleChange(props.ToDoItem.id)}
      />
      <p style={props.ToDoItem.completed ? styleCompleted : null}>
        {props.ToDoItem.text}
      </p>
      <br />
    </div>
  );
}

export default ToDoItem;
