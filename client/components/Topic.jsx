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
      code: [],
      active: []
    }
  }

  componentDidMount () {
    console.log(this.state.name);
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

  toggleActive (id) {
    var index = this.state.active.indexOf(id)
    if ( index === -1) {
      this.state.active.push(id);
      console.log(this.state.active);
    } else {
      this.state.active.pop(index)
      console.log(this.state.active);
    }
  }

  listCode() {
    return (
      this.state.code.map((code) => {
         return <Code key={code.code_id} topic={this.state.topic.name} id={code.code_id} toggle={this.toggleActive.bind(this)} />
      })
    )
  }

  renderList() {
    return (
      <div>
        {this.listCode()}
      </div>
    )
  }

  render () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.topic.description}</h3>
        {this.renderList()}
      </div>
    )
  }

}
