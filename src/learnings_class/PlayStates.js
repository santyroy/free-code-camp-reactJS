import React from "react";

class PlayStates extends React.Component {
  constructor() {
    super();
    this.state = { count: 0, color: "" };

    this.addCount = this.addCount.bind(this);
    this.subCount = this.subCount.bind(this);
    this.doubleCount = this.doubleCount.bind(this);
  }

  addCount() {
    console.log("add count called!");

    // to change state use setState method
    this.setState((prevState) => {
      console.log(prevState.count);
      return { count: prevState.count + 1 };
    });
  }

  subCount() {
    console.log("sub count called!");
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  doubleCount() {
    this.setState((prevState) => {
      return { count: prevState.count * 2 };
    });
  }

  render() {
    return (
      <div>
        <h1
          style={
            this.state.count % 2 === 0 ? { color: "green" } : { color: "red" }
          }
        >
          {this.state.count}
        </h1>
        <div>
          <button onClick={this.addCount}>Add</button>
          <button onClick={this.subCount}>Sub</button>
          <button onClick={this.doubleCount}>Double</button>
        </div>
      </div>
    );
  }
}

export default PlayStates;
