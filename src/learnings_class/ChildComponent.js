import React from "react";

class ChildComponent extends React.Component {
  render(props) {
    console.log(this.props);
    return (
      <div>
        <p>Am I a child Component? {this.props.answer}</p>
        <p>I am the value of the counter inside child {this.props.count}</p>
      </div>
    );
  }
}

export default ChildComponent;
