import React from 'react'

import * as api from '../api'


export default class Code extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    	topic: props.topic,
    	id: props.id,
    	code: {},
      isActive: props.isActive(props.id)
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
    this.props.toggle(this.state.id)
  	this.setState({isActive: this.props.isActive(this.state.id)})
    console.log(this.state.isActive);
    console.log(this.props.isActive(this.state.id));
  }

  renderDescrip () {
    console.log('render');
    return (
      <p>{this.state.code.description}</p>
    )
  }

  render () {
  	return (
  		<div>
  		<div className='codeSnippet'>
        	<button className='codeButt' onClick={() => this.setActive()}>{this.state.code.text}</button>
    	</div>
    	{this.state.isActive && this.renderDescrip()}
    	</div>
  	)
  }

}
