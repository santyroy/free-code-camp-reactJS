import React from "react";

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      // Rather than calling the direct event value we must kept it
      // separately in a const before setting
      //   [event.target.name]: event.target.value,
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName" // match the key of the state
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName" // match the key of the state
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
        </form>
      </div>
    );
  }
}

export default Forms;
