import React from 'react'

import * as api from '../api'


export default class Code extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    	topic: props.topic,
    	id: props.id,
    	code: {}
    }
  }

  componentDidMount () {
    api.getCode(this.state.topic, this.state.id, (error, code) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({code})
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
        	<button className='codeButt' onClick={() => this.props.toggle(this.state.id)}>{this.state.code.text}</button>
    	</div>
    	{this.state.active && this.renderDescrip}
    	</div>
  	)
  }

}
