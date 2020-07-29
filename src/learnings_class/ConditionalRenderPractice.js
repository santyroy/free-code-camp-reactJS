import React from "react";

class ConditionalRenderPractice extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
  };

  render() {
    let loginStatus = this.state.isLoggedIn ? "logged in" : "logged out";
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";

    return (
      <div>
        <div>
          <h3>User is {loginStatus}</h3>
        </div>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default ConditionalRenderPractice;
