import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'
import './index.scss'

const FriendList = ({
  friendList,
  selectedFriend,
  onSelectFriend,
}) => (
  <div className='friend-list-container'>
    <div className='topic'>
      Messenger
    </div>
    <div className='friend-list'>
      {
        friendList.map(user => (
          <FriendListItem
            key={ user.id }
            user={ user }
            active={ selectedFriend ? user.id === selectedFriend.id : false }
            onSelect={ () => onSelectFriend(user) } />
        ))
      }
    </div>
  </div>
)

FriendList.propTypes = {
  friendList: PropTypes.array.isRequired,
  selectedFriend: PropTypes.object.isRequired,
  onSelectFriend: PropTypes.func.isRequired,
}

export default FriendList
