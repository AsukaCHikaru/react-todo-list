import React from 'react';
import { shallow, mount } from './enzymeSetup';
import { expect } from 'chai';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('contains list "TO DO" in state', () => {
  const wrapper = shallow(<App />);  
  expect(wrapper.state().list.length).to.be.above(0);
  expect(wrapper.state().list[1].name).to.equal('TO DO');
});