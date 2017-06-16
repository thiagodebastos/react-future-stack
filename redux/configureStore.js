import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import counterApp from './modules/counterApp'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore)

const reducer = combineReducers({
  counterApp
})

const configureStore = initialState => createStoreWithMiddleware(reducer, initialState)
export default configureStore
