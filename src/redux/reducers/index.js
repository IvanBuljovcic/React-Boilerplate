import { combineForms } from 'react-redux-form';
import { combineReducers } from 'redux';

// - Reducers
import exampleReducer from './example/exampleReducer';
import registerReducer from './forms/register/registerFormReducer';

const rootReducer = combineReducers({
  example: exampleReducer,

  forms: combineForms({
    register: registerReducer
  })
});

export default rootReducer;
