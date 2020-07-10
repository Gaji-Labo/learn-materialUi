// initial
import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { increment, decrement } from './actions/counter';

// components
import Counter from './components/counter';
import Tabs from './containers/Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs />
        <Counter {...this.props} />
      </div>
    );
  }
}

// proptypes
App.propTypes = {
  counter: PropTypes.object.isRequired,
  dispatch_increment: PropTypes.func.isRequired,
  dispatch_decrement: PropTypes.func.isRequired
}

// redux settings
// state => props
function mapStateToProps(state) {
  return {
    counter: state.counterReducer,
  }
}

// dispatch => props
function mapDispatchToProps(dispatch) {
  return {
    dispatch_increment: () => dispatch(increment()),
    dispatch_decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
