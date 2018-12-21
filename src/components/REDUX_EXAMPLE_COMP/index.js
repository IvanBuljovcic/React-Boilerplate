import { connect } from 'react-redux';

// - Redux | Actions
import exampleMainAction from './redux/actionCreators';

// - Connected Component
import Example from './ExampleController';

const mapStateToProps = state => ({
  exampleData: state.example.data,
  exampleError: state.example.error,
  exampleErrorData: state.example.errorData,
  exampleLoading: state.example.loading
});

const mapDispatchToProps = dispatch => ({
  handleClick: items => dispatch(exampleMainAction(items))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
