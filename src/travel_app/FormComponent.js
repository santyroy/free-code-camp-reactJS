import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={props.data.firstName}
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={props.data.lastName}
          placeholder="Last Name"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="age"
          value={props.data.age > 0 ? props.data.age : ""}
          placeholder="Age"
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
        <br />
        <label>
          Choose you location:
          <select
            name="country"
            value={props.data.country}
            onChange={props.handleChange}
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
            checked={props.data.dietaryRestrictions.isVegan}
            onChange={props.handleChange}
          />
          Vegan{" "}
        </label>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={props.data.dietaryRestrictions.isKosher}
            onChange={props.handleChange}
          />
          Kosher{" "}
        </label>
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={props.data.dietaryRestrictions.isLactoseFree}
            onChange={props.handleChange}
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
        Your name: {props.data.firstName} {props.data.lastName}
      </p>
      <p>Your age: {props.data.age}</p>
      <p>You are a {props.data.gender}</p>
      <p>You are from {props.data.country}</p>
      <p>
        Your dietary restrictions are:{" "}
        {props.data.dietaryRestrictions.isVegan && "Vegan "}
        {props.data.dietaryRestrictions.isKosher && "Kosher "}
        {props.data.dietaryRestrictions.isLactoseFree && "Lactose Not Free"}
      </p>
    </main>
  );
}

export default FormComponent;
