import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Peer from 'peerjs'
import { Auth } from '../../lib/services/auth'
import ChatWindow from '../../components/ChatWindow'
import { PEER_API_KEY } from '../../lib/constants/global'
import { requestPeerReceive, requestPeerSend } from '../../actions/chatHistory'

class ChatWindowContainer extends Component {
  static propTypes = {
    friend: PropTypes.object.isRequired,
    chatHistory: PropTypes.object.isRequired,
    requestPeerReceive: PropTypes.func.isRequired,
    requestPeerSend: PropTypes.func.isRequired,
  }

  state = {
    user: {},
    peer: null,
  }

  componentWillMount() {
    const user = Auth.getToken().data
    const peer = Peer(user.peerId, { key: PEER_API_KEY })
    this.setState({ user, peer })
  }

  componentDidMount() {
    this.props.requestPeerReceive(this.state.peer)
  }

  componentDidUpdate() {
    const chatDialog = document.getElementById('chatDialog')
    chatDialog.scrollTop = chatDialog.scrollHeight;
  }

  sendMessage = (message) => {
    const { user, peer } = this.state
    const { friend } = this.props

    this.props.requestPeerSend(peer, user, friend, message)
  }

  render() {
    const { friend, chatHistory } = this.props
    return (
      <ChatWindow
        friend={friend}
        onSendMessage={ message => this.sendMessage(message) }
        chatHistory={ chatHistory } />
    )
  }
}

const MapStateToProps = state => ({
  friend: state.friendSelect,
  chatHistory: state.chatHistory,
})

export default connect(
  MapStateToProps,
  {
    requestPeerReceive,
    requestPeerSend,
  }
)(ChatWindowContainer)
