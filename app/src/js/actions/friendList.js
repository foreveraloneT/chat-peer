import {
  FRIEND_LIST_REQUEST,
  FRIEND_LIST_SUCCESS,
} from './actionTypes'

export const requestFriendList = userId => ({
  type: FRIEND_LIST_REQUEST,
  userId,
})

export const fullfillFriendList = payload => ({
  type: FRIEND_LIST_SUCCESS,
  payload,
})
