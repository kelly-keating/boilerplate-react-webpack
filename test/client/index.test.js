import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'
import Header from '../../client/components/Header'

App.prototype.componentDidMount = () => {}

test.cb('<App />', (t) => {
  const wrapper = shallow(<Header />)
  t.is(wrapper.contains('eda cheatsheet'), true, 'displays title')
  t.end()
})
