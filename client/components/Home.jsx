import React from 'react'

import * as api from '../api'

export default class Topic extends React.Component {
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

  renderTiles () {
    return this.state.topics.map(this.renderTile)
  }

  renderTile (topic) {
    return <div className='homeTile' key={topic.id}>{topic.name}</div>
  }

  render () {
    return (
      <div>
        {this.renderTiles()}
      </div>
    )
  }
}
