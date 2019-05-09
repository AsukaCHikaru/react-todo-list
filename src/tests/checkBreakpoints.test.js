import { expect } from 'chai';

import checkBreakpoints from '../logic/checkBreakpoints';

it('returns false if current width and new width are in same range', () => {
  let state = {width: 419};
  let newWidth = 418;
  expect(checkBreakpoints(state, newWidth)).to.equal(false);
  state.width = 600;
  newWidth = 500;
  expect(checkBreakpoints(state, newWidth)).to.equal(false);
  state.width = 800;
  newWidth = 900;
  expect(checkBreakpoints(state, newWidth)).to.equal(false);
  state.width = 1300;
  newWidth = 1400;
  expect(checkBreakpoints(state, newWidth)).to.equal(false);
});

it('returns true if current width and new width are not in same range', () => {
  let state = {width: 320};
  let newWidth = 500;
  expect(checkBreakpoints(state, newWidth)).to.equal(true);
  state.width = 800;
  expect(checkBreakpoints(state, newWidth)).to.equal(true);
  newWidth = 400;
  expect(checkBreakpoints(state, newWidth)).to.equal(true);
  state.width = 500;
  newWidth = 1400;
  expect(checkBreakpoints(state, newWidth)).to.equal(true);
});
