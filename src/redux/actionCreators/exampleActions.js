import exampleActions from '../actionTypes/exampleTypes';

function exampleActionOne(items) {
  return {
    type: exampleActions.FIRST,
    payload: items
  }
}

function exampleActionTwo() {
  return {
    type: exampleActions.SECOND,
    payload: ['a', 'b', 'c']
  }
}

export {
  exampleActionOne,
  exampleActionTwo
};
