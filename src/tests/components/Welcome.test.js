import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Welcome from '../../components/Welcome/Welcome'
import ReactTestUtils from 'react-dom/test-utils'

it.skip('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Welcome />, div)
})
