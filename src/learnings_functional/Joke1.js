import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <div>
      <h3
        style={{
          display: props.question ? "block" : "none",
          color: "purple",
        }}
      >
        Question: {props.question}
      </h3>
      <h4 style={{ color: props.question ? "green" : "red" }}>
        Punchline: {props.punchline}
      </h4>
      <br />
    </div>
  );
}

export default Joke;
