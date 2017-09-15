import { SELECT_FRIEND } from './actionTypes'

export const selectFriend = user => ({
  type: SELECT_FRIEND,
  user,
})

export default selectFriend
