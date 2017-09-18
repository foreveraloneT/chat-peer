import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ChatBox from '../../components/ChatBox'

class ChatBoxContainer extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired,
  }

  state = {
    message: '',
  }

  onSendMessageHandler = () => {
    const message = this.state.message
    if (message !== '') {
      this.props.onSendMessage(this.state.message)
    }
  }

  onClickSendMessageHandler = () => {
    this.onSendMessageHandler(this.state.message)
    this.setState({ message: '' })
  }

  onTypingHandler = (event) => {
    if (event.which === 13 || event.keyCode === 13) {
      this.onSendMessageHandler(this.state.message)
      this.setState({ message: '' })
      event.target.value = ''
    } else {
      const message = event.target.value
      this.setState({ message })
    }
  }

  render() {
    return (
      <ChatBox
        message={ this.state.message }
        onTyping={ this.onTypingHandler }
        onSendMessage={ this.onClickSendMessageHandler } />
    )
  }
}

export default ChatBoxContainer
