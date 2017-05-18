import React from 'react'

const Description = ({match}) => {
  var topic = match.params.topic
  var id = match.params.id
  return (
    <h4>{id} {topic}</h4>
  )
}

export default Description
