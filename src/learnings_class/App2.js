import React from "react";
import ChildComponent from "./ChildComponent";

// States - data which is maintained by the component.
// state can be/get changed as well.

// ** Props are the ONLY way to pass data from one component to another **

// Props - on the other does hold data but it is immutable/cannot be changed
// this.props.something = "new something"  => CANNOT BE DONE

// 1. In order to use state a component must be class based
// 2. To use/create a state create constructor
// 3. Call a global funtion super() => constructor of the parent class
// 4. setState is the method used to change the value of state.
//    setState is method inside Component class of React.
// 5. State will always be an object

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes",
      name: "Sougata",
      age: 27,
    };
  }
  render() {
    return (
      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
        <ChildComponent answer={this.state.answer} />
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
      </div>
    );
  }
}

export default App2;
