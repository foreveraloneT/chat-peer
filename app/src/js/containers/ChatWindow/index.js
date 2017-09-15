import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ChatWindow from '../../components/ChatWindow'

class ChatWindowContainer extends Component {
  static propTypes = {
    friend: PropTypes.object.isRequired,
  }

  render() {
    const { friend } = this.props
    return (
      <ChatWindow
        friend={friend} />
    )
  }
}

const MapStateToProps = state => ({
  friend: state.friendSelect,
})

export default connect(
  MapStateToProps,
  {}
)(ChatWindowContainer)
