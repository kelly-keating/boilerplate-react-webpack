import React from 'react'
import { Link } from 'react-router-dom'

import topics from '../../data/topics'

const Nav = () => {
  return (
    <div id='nav'>
      <h1>Nav</h1>
      {getButtons()}
    </div>
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
