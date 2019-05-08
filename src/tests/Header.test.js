import React from 'react';
import { shallow } from './enzymeSetup';
import { expect } from 'chai';

import Header from '../components/Header';

describe('window width > 768px', () => { 
  it('does not render RWD buttons', () => {
    const wrapper = shallow(<Header width={769} />);
    expect(wrapper.find('.rwdBtn').length).to.equal(0);
    expect(wrapper.find('.rwdBtn button').length).to.equal(0);
  });  
});

describe('window width <= 768px', () => { 
  it('renders RWD buttons', () => {
    const wrapper = shallow(<Header width={768} />);
    expect(wrapper.find('.rwdBtn').length).to.equal(1);
    expect(wrapper.find('.rwdBtn button').length).to.equal(3);
  });  
});
