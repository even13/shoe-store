import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should show the number of items in my cart', () => {
  const wrapper = mount(<App />);
  const text = wrapper.find('p').text();
  expect(text).toEqual('You have selected 0 product(s).');
  const firstElement = wrapper.find('li').first();
  firstElement.simulate('click');
  const textAfter = wrapper.find('p').text();
  expect(textAfter).toEqual('You have selected 1 product(s).');
});
