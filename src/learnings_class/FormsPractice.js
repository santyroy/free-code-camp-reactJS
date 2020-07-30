import React from "react";

class FormPractice extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      country: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState((prevState) => {
        return {
          dietaryRestrictions: {
            ...prevState.dietaryRestrictions,
            [name]: checked,
          },
        };
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="age"
            value={this.state.age > 0 ? this.state.age : ""}
            placeholder="Age"
            onChange={this.handleChange}
          />
          <br />
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
            Choose you location:
            <select
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            >
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="Russia">Russia</option>
              <option value="Japan">Japan</option>
            </select>
          </label>
          <br />
          <p>Dietary Restrictions: </p>
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.dietaryRestrictions.isVegan}
              onChange={this.handleChange}
            />
            Vegan{" "}
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.dietaryRestrictions.isKosher}
              onChange={this.handleChange}
            />
            Kosher{" "}
          </label>
          <label>
            <input
              type="checkbox"
              name="isLactoseFree"
              checked={this.state.dietaryRestrictions.isLactoseFree}
              onChange={this.handleChange}
            />
            Lactose Free
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <hr />
        <h1>Your Entered Information:</h1>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>You are a {this.state.gender}</p>
        <p>You are from {this.state.country}</p>
        <p>
          Your dietary restrictions are:{" "}
          {this.state.dietaryRestrictions.isVegan && "Vegan "}
          {this.state.dietaryRestrictions.isKosher && "Kosher "}
          {this.state.dietaryRestrictions.isLactoseFree && "Lactose Not Free"}
        </p>
      </main>
    );
  }
}

export default FormPractice;
