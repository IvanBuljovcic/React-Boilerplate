import exampleTypes from '../../actionTypes/exampleTypes';
import utils from '../../utils';

const initialState = {
  items: []
}

function firstExampleReducer(state, action) {
  if (action.type === exampleTypes.FIRST) {
    return utils.updateObject(state, action.payload);
  }

  return state;
}

function secondExampleReducer(state, action) {
  return utils.updateObject(state, {
    items: action.payload
  })
}

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case exampleTypes.FIRST:
      return firstExampleReducer(state, action)
    case exampleTypes.SECOND:
      return secondExampleReducer(state, action)
    default:
      return state;
  }
}

export default exampleReducer;
