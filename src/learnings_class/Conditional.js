import React from "react";

class Conditional extends React.Component {
  render() {
    // When the page loads for the first time it shows true
    // After 1.5secs it shows false
    // console.log(this.props.isLoading);

    // // Conditional Rendering means we might want to render something
    // // based on a given condition

    // if (this.props.isLoading) {
    //   return (
    //     <div>
    //       <h1>Loading...</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Some cool stuff about conditional rendering</h1>
    //     </div>
    //   );
    // }

    // // OR
    // // Ternary operator
    // return this.props.isLoading ? <h3>If true</h3> : <h3>Else false</h3>;

    // // OR
    // // Ternary operator
    // return (
    //   <div>
    //     <h2>Header</h2>
    //     {this.props.isLoading ? <h3>If true</h3> : <h3>Else false</h3>}
    //     <h5>Footer</h5>
    //   </div>
    // );
    return (
      <div>
        <h3>Some Cool stuffs about conditional rendering</h3>
      </div>
    );
  }
}

export default Conditional;
