import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

const FriendListItem = ({
  user,
  active = false,
  onSelect,
}) => (
  <div
    className={ClassNames('friend-item-container', { active })}
    onClick={ onSelect } >
    <div className='avatar-side'>
      <img
        src={ user.avatar }
        className='avatar' />
    </div>
    <div className='detail-side'>
      { user.name }
    </div>
  </div>
)

FriendListItem.propTypes = {
  user: PropTypes.object.isRequired,
  active: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
}

export default FriendListItem
