import { expect } from 'chai';

import handleSpace from './handleSpace';

it('removes spaces before str', () => {
  const str = "   test";
  expect(handleSpace(str)).to.equal("test");
});

it('remains spaces in str', () => {
  const str1 = "   test test";
  const str2 = "test test"
  expect(handleSpace(str1)).to.equal("test test");
  expect(handleSpace(str2)).to.equal("test test");
});

it('return original string if theres no spaces', () => {
  const str = "test";
  expect(handleSpace(str)).to.equal("test");
});