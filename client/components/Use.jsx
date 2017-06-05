import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import * as api from '../api'

import Code from './Code'


export default class Use extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      question: {},
      code: [],
      active: []
    }
  }

  componentDidMount () {
    api.getUse(this.state.id, (error, question) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({question})
      }
    })
    api.getCodeFromQuestion(this.state.id, (error, code) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({code})
      }
    })
  }

  componentWillReceiveProps () {
    window.location.reload()
  }

  toggleActive (id) {
    var index = this.state.active.indexOf(id)
    if (index === -1) {
      this.state.active.push(id)
    } else {
      this.state.active.pop(index)
    }
  }

  isActive (id) {
    return this.state.active.indexOf(id) > -1
  }

  listCode () {
    return (
      this.state.code.map((code) => {
         return <Code key={code.code_id} id={code.code_id} toggle={this.toggleActive.bind(this)} isActive={this.isActive.bind(this)} />
      })
    )
  }

  renderList () {
    return (
      <div>
        {this.listCode()}
      </div>
    )
  }

  render () {
    return (
      <div>
        <h1>{this.state.question.question}</h1>
        <h3>{this.state.question.description}</h3>
        {this.renderList()}
      </div>
    )
  }

}
