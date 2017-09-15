import React from 'react'
import styles from './dashboard.scss'
import { Auth } from '../../lib/services/auth'

export default class Dashboard extends React.Component {

  doLogout() {
    this.props.history.replace('/logout')
  }

  componentDidMount() {
    console.log(Auth.getToken().data)
  }

  render() {
    return (
      <div id="dashboard" className={styles.container}>
        <div className={styles.inner_container}>
          Dashboard
          <button onClick={this.doLogout.bind(this)}>
            Log out
          </button>
        </div>
      </div>
    )
  }
}
