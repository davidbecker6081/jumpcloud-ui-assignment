import { combineReducers } from 'redux'
import userReducer from './userReducer'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'

export const history = createBrowserHistory()

export default combineReducers({
  userReducer,
  router: connectRouter(history)
})
