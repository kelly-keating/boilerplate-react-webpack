import React from 'react'

import data from '../../data/code'

const Description = ({match}) => {
  var topic = match.params.topic
  var id = match.params.id
  var thisOne = data[topic].find((elem) => {
      return elem.id == id
    })
    
  return (
    <h4>{thisOne.description}</h4>
  )
}

export default Description
