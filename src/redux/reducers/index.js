import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// - Reducers
import exampleReducer from './example/exampleReducer';

const rootReducer = combineReducers({
  example: exampleReducer,

  routing: routerReducer
});

export default rootReducer;
