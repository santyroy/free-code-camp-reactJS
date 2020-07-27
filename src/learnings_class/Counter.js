import React from "react";
import "./counter.css";
import ChildComponent from "./ChildComponent";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };

    // the below bind is neccessary because the 'this' keyword
    // inside the method called would be undefined to react
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Clicked");
    // 1. use setState method of Component Class to change state value
    // setState provides a new version of state {count: 1} -> object

    // this.setState({ count: 1 });

    // 2. the second option is to send a funtion as an argument to setState method
    this.setState((prevState) => {
      console.log(prevState.count);
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Add</button>
        <ChildComponent count={this.state.count} />
      </div>
    );
  }
}

export default Counter;
