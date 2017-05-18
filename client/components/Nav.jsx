import React from 'react'
import { Link } from 'react-router-dom'

import topics from '../../data/topics'

const Nav = () => {
  return (
    <span>
      <h1>Nav</h1>
      {getButtons()}
    </span>
  )
}

function getButtons() {
  return (
    topics.map((topic) => {
      var url = '/topic/' + topic.name
      return(
        <div className="navButt" key={topic.id}><Link to={url} >{topic.name}</Link></div>
      )
    })
  )
}

export default Nav
