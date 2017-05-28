import React from 'react'

import * as api from '../api'


export default class Code extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    	topic: props.topic,
    	id: props.id,
    	active: false,
    	code: {}
    }
  }

  componentDidMount () {
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
  }

  renderDescrip () {
    return (
      this.state.code.description
    )
  }

  render () {
  	return (
  		<div>
  		<div className='codeSnippet'>
        	<a href="#" onclick="this.setActive();return false;">{this.state.code.text}</a>
    	</div>
    	{this.state.active && this.renderDescrip}
    	</div>
  	)
  }

}