import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from '../../components/App/App'


describe('App', () => {

it('should have four routes', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find('Route').length).toBe(3)
})

})
