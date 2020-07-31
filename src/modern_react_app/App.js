import React from "react";

class App extends React.Component {
  // states can also be created outside constructor
  state = {
    lastName: "",
  };

  constructor() {
    super();
    this.state = {
      firstName: "",
    };
  }

  // use arrow function to replace the bind(this) call inside constructor for methods
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
        </form>
        <h1>{this.state.firstName}</h1>
      </main>
    );
  }
}

export default App;

/**
 * Other modern/advanced React features/topics to learn:
 *
 * React Context API -> can replace REDUX API
 * Error Boundaries
 * render props
 * higher order components
 * React Router
 * React Hooks - modify states in a functional component
 * React lazy, memo and Suspense (asynchronous calls)
 */
