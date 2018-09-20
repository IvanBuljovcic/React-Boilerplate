import exampleFormTypes from '../../../actionTypes/exampleFormTypes';
import utils from '../../../utils';

const initialState = {
  email: '',
  firstName: '',
  lastName: ''
}

function registerMe(state, action) {
  if (action.type === exampleFormTypes.SEND_INVITATION) {
    return utils.updateObject(state, action.payload);
  }

  return state;
}

const registerFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case exampleFormTypes.SEND_INVITATION:
      return registerMe(state, action)
    default:
      return state;
  }
}

export default registerFormReducer;
