import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar'
import { Auth } from '../../lib/services/auth'

export default class NavbarContainer extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  }

  state = {
    user: {},
  }

  componentDidMount() {
    const user = Auth.getToken().data
    this.setState({ user })
  }

  render() {
    const { onLogout } = this.props
    const { user } = this.state

    return (
      <Navbar
        user={ user }
        onLogout={ onLogout } />
    )
  }
}
