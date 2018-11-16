import axios from 'axios';

// - Action Types
import EXAMPLE_ACTIONS from './actionTypes';

/** Loading
 * 
 * @param {boolean} bool 
 */
function exampleIsLoading(bool) {
  return {
    type: EXAMPLE_ACTIONS.EXAMPLE_IS_LOADING,
    payload: bool
  }
}

/** Errored
 * 
 * @param {boolean} bool 
 */
function exampleError(bool) {
  return {
    type: EXAMPLE_ACTIONS.EXAMPLE_ERROR,
    payload: bool
  }
}

/** Error Data
 * 
 * @param {Object} data 
 */
function exampleErrorData(data) {
  return {
    type: EXAMPLE_ACTIONS.EXAMPLE_ERROR_DATA,
    payload: data
  }
}

/** Success
 * 
 * @param {Object} data 
 */
function exampleSuccess(data) {
  return {
    type: EXAMPLE_ACTIONS.EXAMPLE_SUCCESS,
    payload: data
  }
}

function exampleMainAction(axiosURL) {
  return dispatch => {
    dispatch(exampleIsLoading(true));

    axios.get(axiosURL)
      .then(response => {
        dispatch(exampleIsLoading(false));
        dispatch(exampleSuccess(response.data));
      })
      .catch(error => {
        dispatch(exampleIsLoading(false));
        dispatch(exampleError(true));
        dispatch(exampleErrorData(error));
      })
  }
}

export default exampleMainAction;
