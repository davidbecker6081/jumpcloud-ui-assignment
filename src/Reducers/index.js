import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'

export const history = createBrowserHistory()

export default combineReducers({
  todoReducer,
  router: connectRouter(history)
})
