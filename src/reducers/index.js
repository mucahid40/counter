import { combineReducers } from 'redux'
import counter from './counter'
import name from './names'

export default combineReducers({
  counter,
  name
})