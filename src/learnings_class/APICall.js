import React from "react";

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://swapi.dev/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

class APICall extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      people: {},
    };
  }

  componentDidMount() {
    // Here we can fetch any data that component needs to diplay when mounted.
    // Tools used:
    // 1. 'Fetch' -> built-in javascript global function, fetch is a way to perform HTTP request.
    // 2. 'StarWars API' -> this is CORS enabled - DUMMY API for practice.
    // 3. 'Promise Object' -> A promise object is used for Asynchronous computation.
    console.log("Hi!");
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json()) // promise calls
      .then((data) => {
        this.setState({ people: data, loading: false });
      });
  }

  render() {
    const text = this.state.loading ? "Loading..." : this.state.people.name;
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}

export default APICall;
