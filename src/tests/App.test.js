import React from 'react';
import { shallow, mount } from './enzymeSetup';
import { expect } from 'chai';

import App from '../components/App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains list "Todo" in state', () => {
  const wrapper = shallow(<App />);  
  expect(wrapper.state().list[1].name).to.equal('Todo');
});

it('contains list "Done" in state', () => {
  const wrapper = shallow(<App />);  
  expect(wrapper.state().list[0].name).to.equal('Done');
});

it('contains list "Search" in state', () => {
  const wrapper = shallow(<App />);  
  expect(wrapper.state().list[2].name).to.equal('Search');
});

it('render 3 lists', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('.list').length).to.equal(3);
});