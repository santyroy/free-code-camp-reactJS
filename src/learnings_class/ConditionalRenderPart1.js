import React from "react";
import Conditional from "./Conditional";

class ConditionalRender extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  // This is run just after the component is mounted for the first time
  // here we are faking an API call where the function will be called after 1500ms or 1.5secs
  // after 1.5secs the state is changed to false which mimics we got an API response
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  // Initially the Conditional Component was receiving state as true
  // After 1.5 secs it is receiving state as false
  // So as the state change after 1.5 secs our render method is run again by React
  // The actual condional rendering should be taken care by the App Component rather than
  // Conditional Component
  render() {
    return (
      <div>{this.state.isLoading ? <h3>Loading...</h3> : <Conditional />}</div>
    );
  }
}

export default ConditionalRender;
