import { combineReducers } from 'redux'
import entities from './entities'
import error from './error'
import loading from './loading'
import userList from './userList'
import friendSelect from './friendSelect'
import friendList from './friendList'
import chatHistory from './chatHistory'

const rootReducer = combineReducers({
  entities,
  error,
  loading,
  userList,
  friendSelect,
  friendList,
  chatHistory,
})

export default rootReducer
