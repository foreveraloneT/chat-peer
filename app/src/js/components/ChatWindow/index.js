import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ChatWindow = ({
  friend,
}) => (
  <div className='chat-window-container'>
    <div className='topic'>
      { friend.name }
    </div>
  </div>
)

ChatWindow.propTypes = {
  friend: PropTypes.object.isRequired,
}

export default ChatWindow
