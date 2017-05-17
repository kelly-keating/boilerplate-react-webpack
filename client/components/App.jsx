
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Header} />
    </Router>
  )
}

export default App
