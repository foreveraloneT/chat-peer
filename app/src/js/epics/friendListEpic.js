import { combineEpics } from 'redux-observable'
import {
  FRIEND_LIST_REQUEST,
  FRIEND_LIST_SUCCESS,
} from '../actions/actionTypes'
import { fullfillFriendList } from '../actions/friendList'
import { selectFriend } from '../actions/friendSelect'
import { USER_LIST_END_POIN } from '../lib/constants/endpoints'

const friendListRequestEpic = (action$, store, { callStaticAPI }) =>
  action$.ofType(FRIEND_LIST_REQUEST)
    .mergeMap((action) => {
      const body = {
        id_ne: action.userId,
      }
      return callStaticAPI({ url: USER_LIST_END_POIN, body, method: 'GET' })
        .map(ajaxResponse => fullfillFriendList(ajaxResponse.response))
    })

const friendListSuccessEpic = (action$, store) =>
    action$.ofType(FRIEND_LIST_SUCCESS)
      .map(() => {
        const firstFriend = store.getState().friendList[0]
        return selectFriend(firstFriend)
      })

export default combineEpics(
  friendListRequestEpic,
  friendListSuccessEpic,
)
