import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk'
import config from 'config';

// - Redux history
import history from './history';

// - Reducers | Middleware | Enhancers
import rootReducer from './reducers';
import loggerMiddleware from './middleware/logger';
import monitorReducersEnhancer from './enhancers/monitorReducer';


function configureStore(preloadedState) {
  /**
   * Middlewares array
   */
  const middlewares = [loggerMiddleware, routerMiddleware(history), thunk];

  /**
   * Apply middlewares from array
   */
  const middlewareEnhancer = applyMiddleware(...middlewares);

  /**
   * Enhancers array
   */
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]

  /**
   * Compose enhancers
   * Use DevTools if set to `true` in config
   */
  let composedEnhancers;
  if (config.USE_DEV_TOOL_EXTENSION) {
    composedEnhancers = composeWithDevTools(...enhancers);
  } else {
    composedEnhancers = compose(...enhancers);
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers
  );

  return store;
}


export default configureStore;
