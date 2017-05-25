import React from 'react'

import * as api from  '../api'

export default class Topic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: []
    }
  }

  componentDidMount() {
    api.getTopics((error, topics) => {
      if(error){
        console.log(error)
      } else {
        this.setState({topics})
        console.log(this.state);
      }
    })
  }
  renderTile(topic) {
    return <div className='homeTile'>{topic.name}</div>
  }
  renderTiles() {
    return this.state.topics.map(renderTile)
  }

   render() {
     return (<div>
       {this.renderTiles()}
     </div> )
   }
}
