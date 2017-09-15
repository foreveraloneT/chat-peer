import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from './actionTypes'

export const requestUserList = () => ({
  type: USER_LIST_REQUEST,
})

export const fullfillUserList = payload => ({
  type: USER_LIST_SUCCESS,
  payload,
})
