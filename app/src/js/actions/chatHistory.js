import {
  PEER_RECEIVE_REQUEST,
  PEER_RECIEVE_SUCCESS,
  PEER_SEND_REQUEST,
  PEER_SEND_SUCCESS,
  SAVE_CHAT_REQUEST,
  SAVE_CHAT_SUCCESS,
} from './actionTypes'

export const requestPeerReceive = peer => ({
  type: PEER_RECEIVE_REQUEST,
  peer,
})

export const fullfillPeerReceive = payload => ({
  type: PEER_RECIEVE_SUCCESS,
  payload,
})

export const requestPeerSend = (peer, sender, receiver, message) => ({
  type: PEER_SEND_REQUEST,
  peer,
  payload: {
    sender,
    message,
    receiver,
  }
})

export const fullfillPeerSend = payload => ({
  type: PEER_SEND_SUCCESS,
  payload,
})
