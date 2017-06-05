import React from 'react'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: this.props.status,
      user: this.props.user
    }
  }

  render () {
    return (
      <div id='login'>
        LOGIN
        <form>
          Username:<br/>
        <input type="text" name="username"/><br/>
          Password:<br/>
        <input type="text" name="password"/><br/>
        </form>
      </div>
    )
  }
}
