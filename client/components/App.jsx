
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'


const App = () => {
  return (
    <Router>
      <span>
        <Route path='/' component={Header} />
        <Route path='/' component={Nav} />
      </span>
    </Router>
  )
}

export default App
