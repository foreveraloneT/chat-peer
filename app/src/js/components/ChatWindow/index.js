import React from 'react'
import PropTypes from 'prop-types'
import ChatBox from '../../containers/Chatbox'
import ChatDialog from '../ChatDialog'
import './index.scss'

const ChatWindow = ({
  friend,
  onSendMessage,
  chatHistory,
}) => (
  <div className='chat-window-container'>
    <div className='topic'>
      { friend.name }
    </div>
    <div className='chat-area'>
      <div className='chat-dialog'>
        <ChatDialog
          chatHistory={ chatHistory[friend.id] || [] } />
      </div>
      <div className='chat-input'>
        <ChatBox
          onSendMessage={ onSendMessage } />
      </div>
    </div>

  </div>
)

ChatWindow.propTypes = {
  friend: PropTypes.object.isRequired,
  onSendMessage: PropTypes.func.isRequired,
  chatHistory: PropTypes.object.isRequired,
}

export default ChatWindow
