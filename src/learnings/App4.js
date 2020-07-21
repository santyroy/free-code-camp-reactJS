import React from "react";
import Joke from "./Joke";
import jokeData from "./jokesData";

function App() {
  const nums = [1, 2, 3, 4, 5];
  const doubles = nums.map(function (number) {
    return number * 2;
  });
  console.log(doubles);

  // map() returns a new array

  const jokeComponents = jokeData.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
  ));

  return <div>{jokeComponents}</div>;
}

export default App;
