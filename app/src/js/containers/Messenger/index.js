import React, { Component } from 'react'
import Navbar from '../Navbar'
import FriendList from '../Friendlist'

export default class MessengerContainer extends Component {
  doLogout = () => {
    this.props.history.replace('/logout')
  }

  render() {
    return (
      <div>
        <Navbar
          onLogout = { this.doLogout } />
        <div className='row'>
          <div className='col-md-3'>
            <FriendList />
          </div>
        </div>
      </div>
    )
  }
}
