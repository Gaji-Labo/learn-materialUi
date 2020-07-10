// container component

// redux
import { connect } from "react-redux";
import { multiply } from "../actions/multiply";
import MultiplyButtons from "../components/MultiplyButtons";

// redux settings
// state => props
function mapStateToProps(state) {
  return {
    multiply: state.multiplyReducer,
  };
}

// dispatch => props
function mapDispatchToProps(dispatch) {
  return {
    dispatch_multiply: () => dispatch(multiply())
  };
}

// connect
export default connect(mapStateToProps, mapDispatchToProps)(MultiplyButtons);
