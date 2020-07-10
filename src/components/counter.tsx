// container
// initial
import React from "react";
import "../App.css";
import PropTypes from "prop-types";

function Counter({ counter, dispatch_increment, dispatch_decrement }) {
  return (
    <div>
      <div>{counter.count}</div>
      <button onClick={dispatch_increment}>+</button>
      <button onClick={dispatch_decrement}>-</button>
    </div>
  );
}

// proptypes
Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  dispatch_increment: PropTypes.func.isRequired,
  dispatch_decrement: PropTypes.func.isRequired,
};

export default Counter;
