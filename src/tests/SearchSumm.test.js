import React from 'react';
import { shallow } from './enzymeSetup';
import { expect } from 'chai';

import SearchSumm from '../components/SearchSumm';

it('renders "No result for {keyword}" when number of result is 0', () => {
  const keyword = "test";
  const numOfResults = 0;
  const wrapper = shallow(<SearchSumm numOfResults={numOfResults} keyword={keyword} />);
  expect(wrapper.find('h3').text()).to.equal(`No result for "${keyword}"`);
});

it('renders "{numOfResults} result for {keyword}" when number of result is 1', () => {
  const keyword = "test";
  const numOfResults = 1;
  const wrapper = shallow(<SearchSumm numOfResults={numOfResults} keyword={keyword} />);
  expect(wrapper.find('h3').text()).to.equal(`${numOfResults} result for "${keyword}"`);
});

it('renders "{numOfResults} results for {keyword}" when number of results above 1', () => {
  const keyword = "test";
  const numOfResults = 2;
  const wrapper = shallow(<SearchSumm numOfResults={numOfResults} keyword={keyword} />);
  expect(wrapper.find('h3').text()).to.equal(`${numOfResults} results for "${keyword}"`);
});
