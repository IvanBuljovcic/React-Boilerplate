import EXAMPLE_ACTIONS from './actionTypes';

const initialState = {
  error: false,
  errorData: null,
  loading: false,
  data: null
}

function exampleLoading(state, action) {
  if (action.type === EXAMPLE_ACTIONS.EXAMPLE_IS_LOADING) {
    return {
      ...state,
      loading: action.payload
    }
  }

  return state;
}

function exampleError(state, action) {
  if (action.type === EXAMPLE_ACTIONS.EXAMPLE_ERROR) {
    return {
      ...state,
      error: action.payload
    }
  }

  return state;
}

function exampleErrorData(state, action) {
  if (action.type === EXAMPLE_ACTIONS.EXAMPLE_ERROR_DATA) {
    return {
      ...state,
      errorData: action.payload
    }
  }

  return state;
}

function exampleSuccess(state, action) {
  if (action.type === EXAMPLE_ACTIONS.EXAMPLE_SUCCESS) {
    return {
      ...state,
      data: action.payload
    }
  }

  return state;
}

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTIONS.EXAMPLE_ERROR:
      return exampleError(state, action);

    case EXAMPLE_ACTIONS.EXAMPLE_ERROR_DATA:
      return exampleErrorData(state, action);

    case EXAMPLE_ACTIONS.EXAMPLE_IS_LOADING:
      return exampleLoading(state, action);

    case EXAMPLE_ACTIONS.EXAMPLE_SUCCESS:
      return exampleSuccess(state, action);

    default:
      return state;
  }
}

export default exampleReducer;
