import React from "react";
import FormComponent from "./FormComponent";

class FormContainer extends React.Component {
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
      <FormComponent
        handleChange={this.handleChange}
        data={this.state}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default FormContainer;
