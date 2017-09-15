import { SELECT_FRIEND } from '../actions/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_FRIEND:
      return action.user

    default:
      return state
  }
}
