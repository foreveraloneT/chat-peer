import Peer from 'peerjs'
import { combineEpics } from 'redux-observable'
import {
  PEER_RECEIVE_REQUEST,
  PEER_SEND_REQUEST,
} from '../actions/actionTypes'
import { fullfillPeerReceive, fullfillPeerSend } from '../actions/chatHistory'

const requestPeerReceiveEpics = (action$, store, { peerReceive }) =>
  action$.ofType(PEER_RECEIVE_REQUEST)
    .mergeMap(action =>
      peerReceive(action.peer)
      .flatMap(data =>
        [
          fullfillPeerReceive(data),
        ]
      )
    )

const requestPeerSendEpics = action$ =>
    action$.ofType(PEER_SEND_REQUEST)
      .map((action) => {
        const receiver = action.payload.receiver
        const conn = action.peer.connect(receiver.peerId)
        conn.on('open', () => {
          console.log('send msg', action.payload)
          conn.send(action.payload)
        })
        return action.payload
      })
      .flatMap(payload => [
        fullfillPeerSend(payload),
      ])
export default combineEpics(
  requestPeerReceiveEpics,
  requestPeerSendEpics,
)
