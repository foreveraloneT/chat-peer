import React, { Component } from 'react'
import Navbar from '../Navbar'
import FriendList from '../Friendlist'
import ChatWindow from '../ChatWindow'
import './index.scss'

export default class MessengerContainer extends Component {
  doLogout = () => {
    this.props.history.replace('/logout')
  }

  render() {
    return (
      <div>
        <Navbar
          onLogout = { this.doLogout } />
        <div className='messenger-container'>
          <div className='friend-list-box'>
            <FriendList />
          </div>
          <div className='chat-window-box'>
            <ChatWindow />
          </div>
        </div>
      </div>
    )
  }
}
