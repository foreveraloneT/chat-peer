import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ChatDialog = ({
  chatHistory,
}) => (
  <div className='chat-dialog-container' id='chatDialog'>
    {
      chatHistory.map((chatItem, index) => (
        <div key={index}>
          {
            `${chatItem.sender.name}: ${chatItem.message}`
          }
        </div>
      ))
    }
  </div>
)

ChatDialog.propTypes = {
  chatHistory: PropTypes.array.isRequired,
}

export default ChatDialog
