import React, { Component } from "react";
import { connect } from "react-redux";
import counterReducer from "./../redux/reducers/counterReducer";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // mapStateToProps is a function that maps state from Redux store to props
  // Here you can define which parts of the state should be mapped to props of Counter
  return {
    // Example: counterValue is a prop in Counter component that holds the counter value from Redux store
    counter: state.counterReducer, // Assuming you have a reducer called 'counter' in your Redux store
  };
};
export default connect(mapStateToProps)(Counter);
