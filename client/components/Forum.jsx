import React from 'react'
import { Link } from 'react-router-dom'

export default class Forum extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: false,
      user: 'Guest'
    }
  }

  render () {
    return (
      <div id='forum'>
        <div id='forum-header'>
          <div><Link to='/forum/login'>Login</Link></div>
          <div><Link to='/forum/register'>New user?</Link></div>
        </div>
        <br/>
        FORUM
      </div>
    )
  }
}
