import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// - Reducers
import exampleReducer from '../../components/REDUX_EXAMPLE_COMP/redux/reducer';

const rootReducer = combineReducers({
  example: exampleReducer,

  routing: routerReducer,
});

export default rootReducer;
