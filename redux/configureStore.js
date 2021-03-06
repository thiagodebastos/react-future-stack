import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import counterApp from './modules/counterApp';
import todoApp from './modules/todoApp';

/* const loggerMiddleware = createLogger(); */

const createStoreWithMiddleware = applyMiddleware(/* loggerMiddleware */)(
  createStore
);

const reducer = combineReducers({
  counterApp,
  todoApp
});

const configureStore = initialState =>
  createStoreWithMiddleware(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
export default configureStore;
