import 'rxjs'
import { combineEpics } from 'redux-observable'
import userListEpic from './userListEpic'
import friendListRequest from './friendListEpic'

export default combineEpics(
  userListEpic,
  friendListRequest,
)
