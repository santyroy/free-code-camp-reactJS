import React from "react";

class App4 extends React.Component {
  render() {
    return (
      <div>
        <img
          src="https://www.fillmurray.com/200/100"
          alt="random_image"
          onMouseOver={() => console.log("I was moved over!!")}
        />
        <br />
        <br />
        <button onClick={() => console.log("I was clicked !!!")}>
          Click Me
        </button>
      </div>
    );
  }
}

export default App4;
