import React from 'react';
import { shallow, mount } from './enzymeSetup';
import { expect } from 'chai';

import App from '../components/App';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('window width > 768px', () => {  
  const wrapper = mount(<App />);  
  wrapper.setState({width: 769});
  it('contains list "Todo" in state', () => {
    expect(wrapper.state().list[1].name).to.equal('Todo');
  });
  
  it('contains list "Done" in state', () => {
    expect(wrapper.state().list[0].name).to.equal('Done');
  });
  
  it('contains list "Search" in state', () => {
    expect(wrapper.state().list[2].name).to.equal('Search');
  });
  
  it('render 3 lists', () => {
    expect(wrapper.find('.list').length).to.equal(3);
  });
});

describe('window width <= 768px', () => {
  it('render 1 list', () => {
    const wrapper = mount(<App />);
    wrapper.setState({width: 768});
    expect(wrapper.find('.list').length).to.equal(1);
  });  
});
