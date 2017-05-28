import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

import * as api from '../api'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      topics: []
    }
  }

  componentDidMount () {
    api.getTopics((error, topics) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({topics})
        console.log(this.state)
      }
    })
  }

  renderButtons () {
    return this.state.topics.map(this.renderButton)
  }

  renderButton (topic) {
    return (
      <div className='navButt' key={topic.id} ><Link to={`/topic/${topic.name}`} >{topic.name}</Link></div>
    )
  }

  render () {
    return (
      <div id='nav'>
        {this.renderButtons()}
      </div>
    )
  }

}
