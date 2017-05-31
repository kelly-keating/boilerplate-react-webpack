import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import * as api from '../api'

export default class UseList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      topics: [],
      uses: []
    }
  }

  componentDidMount () {
    api.getTopics((error, topics) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({topics})
      }
    })
    api.getUses((error, uses) => {
      if (error) {
        console.log(error)
      } else {
        this.setState({uses})
      }
    })
  }

  renderQuestions (topicId) {
    var onTopic = this.state.uses.filter((use) => {
      return use.topic_id === topicId
    })
    return (
      onTopic.map((question) => {
        return <div><Link  to={`/uses/${question.id}`}>{question.question}</Link></div>
      })
    )
  }

  renderListSections () {
    return (
      this.state.topics.map((topic) => {
        return (
          <div>
            <h3 key={topic.id}>{topic.alias}</h3>
            {this.renderQuestions(topic.id)}
          </div>
        )
      })
    )
  }

  render () {
    return (
      <div>
        <h1>faq</h1>
        {this.renderListSections()}
      </div>
    )
  }

}
