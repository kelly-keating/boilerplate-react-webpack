
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import Topic from './Topic'

const App = () => {
  return (
    <div>
      <Router>
        <span>
          <Header />
          <Nav />
          <span id='content'>
            <Route exact path='/' component={Home} />
            <Route path='/topic/:topic' component={Topic} />
          </span>
        </span>
      </Router>
    </div>
  )
}

export default App
