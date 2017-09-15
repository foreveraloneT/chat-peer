import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Auth } from '../../lib/services/auth'
import FriendList from '../../components/FriendList'
import { requestFriendList } from '../../actions/friendList'
import { selectFriend } from '../../actions/friendSelect'

class FriendListContainer extends Component {
  static propTypes = {
    friendList: PropTypes.array.isRequired,
    onRequestFriendList: PropTypes.func.isRequired,
    selectedFriend: PropTypes.object.isRequired,
    selectFriendHandler: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.onRequestFriendList(Auth.getToken().data.id)
  }

  render() {
    const { friendList, selectedFriend, selectFriendHandler } = this.props
    return (
      <FriendList
        friendList={ friendList }
        selectedFriend={ selectedFriend }
        onSelectFriend={ selectFriendHandler } />
    )
  }
}

const mapStateToProps = state => ({
  friendList: state.friendList,
  selectedFriend: state.friendSelect,
})

export default connect(
  mapStateToProps,
  {
    onRequestFriendList: requestFriendList,
    selectFriendHandler: selectFriend,
  }
)(FriendListContainer)
