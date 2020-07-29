import React from "react";

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1

class LifeCycleMethods extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // 1. render()
  render() {
    return <div>Code goes here.</div>;
  }

  // 2. The very first time the component mount
  // React would call this method - runs only once
  // Use case - to get data from API once component loads
  componentDidMount() {}

  // 3. When ever you receive props from parents component
  // React runs this method
  // Parameter is nextProps -> new incomming props from parent
  // DEPRECATED from React 16.3
  // componentWillReceiveProps(nextProps) {}

  // 6. DEPRECATED
  // componentWillMount() {}

  // 7. DEPRECATED
  // componentWillUpdate() {}

  // 4. Helps optimize the code
  // Tells React whether to re-render the component
  shouldComponentUpdate(nextProps, nextState) {
    // return true if want to update
    // return false if don't want to update
  }

  // 5. used during cleanUp or teardown before component disappears
  // can be used to remove event listener
  componentWillUnmount() {}

  // 8. used to update state using props coming from other components
  // Used very rarely. recommended not to use
  static getDerivedStateFromProps(props, state) {
    // return new/update state based on props
  }

  // 9. create backup of current component
  // take backup of object (snapshots)
  getSnapshotBeforeUpdate() {}
}

export default LifeCycleMethods;
