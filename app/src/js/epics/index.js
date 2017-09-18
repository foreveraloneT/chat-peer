import 'rxjs'
import { combineEpics } from 'redux-observable'
import userListEpic from './userListEpic'
import friendListRequest from './friendListEpic'
import chatHistoryEpics from './chatHistoryEpics'

export default combineEpics(
  userListEpic,
  friendListRequest,
  chatHistoryEpics,
)
