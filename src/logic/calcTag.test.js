import { expect } from 'chai';

import calcTag from './calcTag';

it('turns string into array splited by ","', () => {
  const rawTags = "tag1, tag2, tag3";
  const calcedTags = calcTag(rawTags);
  expect(calcedTags.length).to.equal(3);
  expect(calcedTags[0]).to.equal("tag1");
  expect(calcedTags[1]).to.equal("tag2");
  expect(calcedTags[2]).to.equal("tag3");
});

it('ignores blank between comas', () => {
  const rawTags = "tag1, , tag2,,tag3,";
  const calcedTags = calcTag(rawTags);
  expect(calcedTags.length).to.equal(3);
  expect(calcedTags[0]).to.equal("tag1");
  expect(calcedTags[1]).to.equal("tag2");
  expect(calcedTags[2]).to.equal("tag3");  
});

it('ignores space before tag', () => {
  const rawTags = "  tag1,  tag2, tag3";
  const calcedTags = calcTag(rawTags);
  expect(calcedTags.length).to.equal(3);
  expect(calcedTags[0]).to.equal("tag1");
  expect(calcedTags[1]).to.equal("tag2");
  expect(calcedTags[2]).to.equal("tag3");
});