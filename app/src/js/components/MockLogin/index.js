import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const MockLogin = ({
  userList,
  selectedUser,
  onSelectUser,
  onLogin,
}) => (
  <div className='container'>
    <form className='login-form'>
      <div className='form-group'>
        {
          userList.length !== 0 ?
            <img
              src={ userList[selectedUser].avatar }
              className='img-thumbnail avatar' /> :
            null
        }
      </div>
      <div className='form-group'>
        <select
          className='form-control'
          onChange={ event => onSelectUser(event) } >
          {
            userList.map((user, index) => (
              <option
                key={ user.id }
                value={ index } >
                { user.name }
              </option>
            ))
          }
        </select>
      </div>
      <button
        type='button' className='btn btn-primary'
        onClick={ onLogin } >
        Login
      </button>
    </form>
  </div>
)

MockLogin.propTypes = {
  userList: PropTypes.array.isRequired,
  selectedUser: PropTypes.number.isRequired,
  onSelectUser: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
}

export default MockLogin
