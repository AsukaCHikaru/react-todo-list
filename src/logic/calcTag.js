function calcTag(tagStr) {
  let tagArr = tagStr.split(/,\s*/).filter(tag => tag!=='');
  let map = {};
  let result = [];

  // delete spaces before first tag if there are
  tagArr[0] = RegExp(/\w+/).exec(tagArr[0])[0];
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
