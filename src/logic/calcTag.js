function calcTag(tagStr) {
  let tagArr = tagStr.split(/,\s*/).filter(tag => tag!=='');
  let map = {};
  let result = [];
  // filter same tag
  tagArr.forEach((tag) => {
    if(!map.hasOwnProperty(tag)){
      map[tag] = true;
      result.push(tag);
    }
  });  
  return result;
}

export default calcTag;
