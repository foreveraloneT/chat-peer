import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Auth } from '../../lib/services/auth'
import MockLogin from '../../components/MockLogin'
import { requestUserList } from '../../actions/userList'

class MockLoginContainer extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    onRequestUserList: PropTypes.func.isRequired,
  }

  state = {
    selectedUser: 0,
  }

  redirectToLocation = () => {
    const { location, history } = this.props
    if (location.state && location.state.nextPathname) {
      history.replace(location.state.nextPathname)
    } else {
      history.replace('/')
    }
  }

  onSelectUserHandler = (event) => {
    this.setState({ selectedUser: Number(event.target.value) })
  }

  doLogin = () => {
    const { selectedUser } = this.state
    const { userList } = this.props
    const data = userList[selectedUser]
    Auth.setToken({ data })
    this.redirectToLocation()
  }

  componentWillMount() {
    const { onRequestUserList } = this.props
    onRequestUserList()
  }

  componentDidMount() {
    if (Auth.isLoggedIn()) {
      this.redirectToLocation()
    }
  }

  render() {
    const { userList } = this.props
    const { selectedUser } = this.state

    return (
      <MockLogin
        userList={ userList }
        selectedUser={ selectedUser }
        onSelectUser={ this.onSelectUserHandler }
        onLogin={ this.doLogin } />
    )
  }
}

const mapStateToProps = state => ({
  userList: state.userList,
})

export default connect(
  mapStateToProps,
  {
    onRequestUserList: requestUserList,
  }
)(MockLoginContainer)
