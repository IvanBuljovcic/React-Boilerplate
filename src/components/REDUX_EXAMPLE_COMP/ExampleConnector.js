import { connect } from 'react-redux';

// - Redux | Actions
import exampleMainAction from '../../redux/actionCreators/exampleActions';

// - Connected Component
import Example from './Example';

const mapStateToProps = state => ({
  exampleError: state.example.error,
  exampleErrorData: state.example.errorData,
  exampleData: state.example.data,
  exampleLoading: state.example.loading
});

const mapDispatchToProps = dispatch => ({
  handleClick: items => dispatch(exampleMainAction(items))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
