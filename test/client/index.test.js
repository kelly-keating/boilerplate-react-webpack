import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from '../../client/components/App'
import Header from '../../client/components/Header'
import Nav from '../../client/components/Nav'

App.prototype.componentDidMount = () => {}

test.cb('<Header />', (t) => {
  const wrapper = shallow(<Header />)
  t.is(wrapper.contains('eda cheatsheet'), true, 'displays title')
  t.end()
})

test.cb('<Nav />', (t) => {
  const wrapper = render(<Nav />)
  t.is(wrapper.find('navButt.a').text(), 'Command Line', 'displays nav button')
  t.end()
})
