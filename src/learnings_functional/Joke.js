import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <div>
      <h3
        style={{
          display: props.joke.question ? "block" : "none",
          color: "purple",
        }}
      >
        Question: {props.joke.question}
      </h3>
      <h4 style={{ color: props.joke.question ? "green" : "red" }}>
        Punchline: {props.joke.punchline}
      </h4>
      <br />
    </div>
  );
}

export default Joke;
