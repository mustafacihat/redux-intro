import React, { Component } from 'react';
import { increaseByTwoCounter } from '../redux/actions/counterActions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class IncreaseByTwCounter extends Component {
    render() {
        return (
          <div>
            <button
              onClick={(e) => {
                this.props.dispatch(increaseByTwoCounter());
              }}
            >
              + 2
            </button>
          </div>
        );
      }
    }
    function mapDispatchToProps(dispatch) {
      return {
        actions: bindActionCreators(increaseByTwoCounter, dispatch),
      };
    }
    export default connect(mapDispatchToProps)(IncreaseByTwCounter);