import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Navbar = ({
  user,
  onLogout,
}) => (
  <nav className='navbar navbar-toggleable-md navbar-inverse bg-primary'>
    <a className='navbar-brand' href='#'>Messenger</a>
    <div className='nav-right'>
      <div className='item'>
        { user.name }
      </div>
      <div className='item'>
        <img
          src={ user.avatar }
          className='avatar' />
      </div>
      <div className='item logout'>
        <a href='#' onClick={ onLogout }>Logout</a>
      </div>
    </div>
  </nav>
)

Navbar.propTypes = {
  user: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
}

export default Navbar
