export default function checkBreakpoints(state, newWidth) {
  const breakptsRef = [0, 420, 768, 1200, 9999];
  let currBreakpts = null;
  let newBreakpts = null;
  breakptsRef.forEach((ele, i) => {
    if(ele > state.width && currBreakpts===null) currBreakpts = i;
    if(ele > newWidth && newBreakpts===null) newBreakpts = i;
  });
  return currBreakpts!==newBreakpts;
}