import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../../components/App/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should have four routes', () => {
  const wrapper = shallow(<App/>)
  expect(wrapper.find('Route').length).toBe(3)
});
