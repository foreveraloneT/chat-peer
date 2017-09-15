import {
  FRIEND_LIST_REQUEST,
  FRIEND_LIST_SUCCESS,
} from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case FRIEND_LIST_REQUEST:
      return []

    case FRIEND_LIST_SUCCESS:
      return action.payload

    default:
      return state
  }
}
