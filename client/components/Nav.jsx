import React from 'react'

import topics from '../../data/topics'

const Nav = () => {
  return (
    <span>
      <h1>navnavnavnavnav</h1>
      {getButtons()}
    </span>
  )
}

function getButtons() {
  return (
    topics.map((topic) => {
      var url = '/topic/' + {topic.name}
      return(
        <div className="navButt" key={topic.id} href={url}>{topic.name}</div>
      )
    })
  )
}

export default Nav
