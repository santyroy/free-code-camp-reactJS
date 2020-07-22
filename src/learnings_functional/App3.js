import React from "react";
import Joke from "./Joke";

function App() {
  return (
    <div>
      <Joke joke={{ question: "Hello1", punchline: "Hi1" }} />
      <Joke joke={{ question: "Hello2", punchline: "Hi2" }} />
      <Joke joke={{ punchline: "Hi3" }} />
      <Joke joke={{ question: "Hello4", punchline: "Hi4" }} />
      <Joke joke={{ question: "Hello5", punchline: "Hi5" }} />
    </div>
  );
}

export default App;
