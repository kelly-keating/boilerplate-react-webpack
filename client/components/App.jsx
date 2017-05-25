
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import Topic from './Topic'
import Description from './Description'

const App = () => {
  return (
    <div>
      <Home />
      <Router>
        <span>
          <Route path='/' component={Header} />
          <Route path='/' component={Nav} />
          <Route path='/topic/:topic' component={Topic} />
          <Route path='/topic/:topic/:id' component={Description} />
        </span>
      </Router>
    </div>
  )
}

export default App
