import React from 'react'

import * as api from '../api'


export default class Code extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    	topic: props.match.params.topic,
    	id: props.match.params.id,
    	active: false,
    	code: {}
    }
  }

  componentDidMount () {
    console.log(this.state.topic + " id: " + this.state.id)
    api.getCode(this.state.topic, this.state.id, (error, code) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({code})
        console.log(this.state)
      }
    })
  }

  setActive () {
  	this.setState({active: !this.state.active})
    return false
  }

  renderDescrip () {
    return (
      <p>{this.state.code.description}</p>
    )
  }

  render () {
  	return (
  		<div>
  		<div className='codeSnippet'>
        	<a href="#">{this.state.code.text}</a>
    	</div>
    	{this.state.active && this.renderDescrip}
    	</div>
  	)
  }

}