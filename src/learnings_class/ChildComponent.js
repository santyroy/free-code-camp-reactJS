import React from "react";

class ChildComponent extends React.Component {
  render(props) {
    console.log(this.props);
    return (
      <div>
        <p>Am I a child Component? {this.props.answer}</p>
      </div>
    );
  }
}

export default ChildComponent;
