import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../actions/actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return []

    case USER_LIST_SUCCESS:
      return action.payload

    default:
      return state
  }
}
