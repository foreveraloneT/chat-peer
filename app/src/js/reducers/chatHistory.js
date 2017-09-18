import {
  PEER_RECIEVE_SUCCESS,
  PEER_SEND_SUCCESS,
  SAVE_CHAT_SUCCESS,
} from '../actions/actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case PEER_RECIEVE_SUCCESS: {
      const senderId = action.payload.sender.id
      const updatedChat = state[senderId] ?
      [
        ...state[senderId],
        action.payload,
      ] :
      [
        action.payload,
      ]
      return {
        ...state,
        [senderId]: updatedChat
      }
    }
    case PEER_SEND_SUCCESS: {
      const receiverId = action.payload.receiver.id
      const updatedChat = state[receiverId] ?
      [
        ...state[receiverId],
        action.payload,
      ] :
      [
        action.payload,
      ]

      return {
        ...state,
        [receiverId]: updatedChat
      }
    }
    default: {
      return state
    }
  }
}
