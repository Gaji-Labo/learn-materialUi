// src/components/counter.js
import React, { Component } from 'react';

class Counter extends Component {
  render() {
   let { counter, dispatch_increment, dispatch_decrement } = this.props;
   console.log(counter.note)
   return (
     <div>
       <div>{counter.count}</div>
       <button onClick={dispatch_increment}>+</button>
       <button onClick={dispatch_decrement}>-</button>
     </div>
   );
  }
}

export default Counter;
