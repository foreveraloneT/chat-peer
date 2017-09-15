import { USER_LIST_REQUEST } from '../actions/actionTypes'
import { fullfillUserList } from '../actions/userList'
import { USER_LIST_END_POIN } from '../lib/constants/endpoints'

export default (action$, store, { callStaticAPI }) =>
  action$.ofType(USER_LIST_REQUEST)
    .mergeMap(() => {
      return callStaticAPI({ url: USER_LIST_END_POIN, body: {}, method: 'GET' })
        .map(ajaxResponse => fullfillUserList(ajaxResponse.response))
    })
