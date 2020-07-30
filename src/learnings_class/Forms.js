import React from "react";

// A 3rd Party library named *Formik* can be used to create forms in an wasier way
// Below is the manual stuff

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      isFriendly: true,
      gender: "",
      favColor: "",
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      this.setState({
        // This block only checks if the target type is a checkbox
        // If it is then we need to assign value as "checked"
        [name]: checked,
      });
    } else {
      this.setState({
        // Rather than calling the direct event value we must kept it
        // separately in a const before setting
        // [event.target.name]: event.target.value,
        [name]: value,
      });
    }
  };

  handleSubmit = (event) => {
    console.log("Submitting form...");
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
          {/*
           * Other useful form elements:
           *
           * <textarea /> element
           * <input type="checkbox" /> element
           * <input type="radio" />
           * <select> and <option> elements
           */}
          <br />
          {/* In React the textarea is a self closing tag
              And we can use all the value properties similar to input tag */}
          <textarea
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br />
          {/* For checkbox we do not have value property
            Instead we have 'checked' property with either true/false
          */}
          <label>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />
            Check Me
          </label>
          <br />
          {/* Radio buttons are kind of combinations of input type=text and checkbox 
          which means they are going to use both value property and checked property */}
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />
          <label>
            Favourite Color:
            <select
              value={this.state.favColor}
              onChange={this.handleChange}
              name="favColor"
            >
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </label>
          <h1>
            {this.state.firstName} {this.state.lastName} {this.state.address}{" "}
            {this.state.isFriendly ? "true" : "false"} {this.state.gender}{" "}
            {this.state.favColor}
          </h1>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Forms;
