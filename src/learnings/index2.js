import React from "react";
import ReactDOM from "react-dom";

// functional components - components are created in React so that we can reuse them.

function MyApp() {
  return (
    <div>
      <ul>
        <li>Red</li>
        <li>Green</li>
        <li>Blue</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
