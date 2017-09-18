import React from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from 'react-autosize-textarea'
import './index.scss'

const ChatBox = ({
  message,
  onSendMessage,
  onTyping,
}) => (
  <div className='chatbox-container'>
    <div className='message-box-area'>
      <TextareaAutosize
        id='textChat'
        className='message-box'
        placeholder='Type a message...'
        maxRows={ 3 }
        onKeyUp={ e => onTyping(e) } />
    </div>
    <div
      className='send-button-area'
      onClick={ () => {
        document.getElementById('textChat').value = ''
        onSendMessage()
      } } >
      <i className='ion-android-send send-button'></i>
    </div>
  </div>
)

ChatBox.propTypes = {
  message: PropTypes.string.isRequired,
  onSendMessage: PropTypes.func.isRequired,
  onTyping: PropTypes.func.isRequired,
}

export default ChatBox
