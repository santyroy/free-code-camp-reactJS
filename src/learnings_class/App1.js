import React from "react";

// ------------------------------------------------------------------------------------
// #1 - function based
function App() {
  return (
    <div>
      <Header username="Sougata" />
      <Greeting />
    </div>
  );
}

// #1 - Class based
class App1 extends React.Component {
  render() {
    return (
      <div>
        <Header1 username="Sougata" />
        <Greeting1 />
      </div>
    );
  }
}

// ------------------------------------------------------------------------------------

// #2 - function based
function Header(props) {
  return (
    <header>
      <p>Welcome, {props.username}!</p>
    </header>
  );
}

// #2 - Class based
class Header1 extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    );
  }
}

// ------------------------------------------------------------------------------------
// #3 - Function based
function Greeting() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning";
  } else if (hours >= 12 && hours <= 16) {
    timeOfDay = "Afternoon";
  } else if (hours > 15 && hours <= 20) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Night";
  }

  return (
    <div>
      <h3>Good {timeOfDay} to you, sir or madam!</h3>
    </div>
  );
}

// #3 - Class Based
class Greeting1 extends React.Component {
  render() {
    const date = new Date(2020, 7, 22, 21);
    const hours = date.getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "Morning";
    } else if (hours >= 12 && hours <= 16) {
      timeOfDay = "Afternoon";
    } else if (hours > 16 && hours <= 20) {
      timeOfDay = "Evening";
    } else {
      timeOfDay = "Night";
    }

    return (
      <div>
        <h3>Good {timeOfDay} to you, sir or madam!</h3>
      </div>
    );
  }
}

// ------------------------------------------------------------------------------------

export default App1;
