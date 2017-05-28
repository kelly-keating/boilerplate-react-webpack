import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import * as api from '../api'

import Code from './Code'


export default class Topic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: props.match.params.topic,
      topic: {},
      code: []
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
    api.listCode(this.state.name, (error, code) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({code})
      }
    })
  }

  renderCode() {
    return (
      <p>List</p>
    )
  }

  render () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.topic.description}</h3>
        {this.renderCode()}
      </div>
    )
  }

}