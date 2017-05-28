import React from 'react'

import * as api from '../api'

import Code from './Code'


export default class Topic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.match.params.topic,
      topic: {}
    }
  }

  componentDidMount () {
    api.getTopic(this.state.name, (error, topic) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({topic})
      }
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.topic.description}</h3>
      </div>
    )
  }

}