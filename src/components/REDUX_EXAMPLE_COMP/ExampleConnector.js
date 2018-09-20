import { connect } from 'react-redux';

// - Redux | Actions
import { exampleActionOne } from '../../redux/actionCreators/exampleActions';

// - Connected Component
import Example from './Example';


const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  handleClick: items => dispatch(exampleActionOne(items))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
