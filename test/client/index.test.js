import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import * as sinon from 'sinon'

import App from '../../client/components/App'
import Header from '../../client/components/Header'
import Nav from '../../client/components/Nav'

App.prototype.componentDidMount = () => {}

test('<Header />', (t) => {
  const wrapper = shallow(<Header />)
  t.is(wrapper.contains('eda cheatsheet'), true, 'displays title')
})

test('<Nav />', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('#nav').exists(), true)
})

test('Examples link goes to page', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.examples').exists(), false)
  wrapper.find('#examples-link').simulate('click')
  //test if exists now
})

/* In later tests on nav, examples
{ Error: connect ECONNREFUSED 127.0.0.1:80
    at Object.exports._errnoException (util.js:1026:11)
    at exports._exceptionWithHostPort (util.js:1049:20)
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1085:14)
  code: 'ECONNREFUSED',
  errno: 'ECONNREFUSED',
  syscall: 'connect',
  address: '127.0.0.1',
  port: 80,
  response: undefined }

  http://localhost:3000 in api call perhaps?
*/
