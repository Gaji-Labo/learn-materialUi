// container component

// redux
import { connect } from "react-redux";
import { increment, decrement } from "../actions/counter";
import Counter from "../components/Counter";

// redux settings
// state => props
function mapStateToProps(state) {
  return {
    counter: state.counterReducer,
  };
}

// dispatch => props
function mapDispatchToProps(dispatch) {
  return {
    dispatch_increment: () => dispatch(increment()),
    dispatch_decrement: () => dispatch(decrement()),
  };
}

// connect
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
