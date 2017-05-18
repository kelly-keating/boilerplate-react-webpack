import React from 'react'
import { Link } from 'react-router-dom'

import codeData from '../../data/code'

const Topic = ({match}) => {
  var topic = match.params.topic

  return (
    <span>
      <h1>{topic}</h1>
      {getCode(topic)}
    </span>
  )
}

function getCode(topic) {
  return (
    codeData[topic].map((code) => {
      return(
        <div className="codeSnippet" key={code.id} >{code.text}</div>
      )
    })
  )
}

export default Topic