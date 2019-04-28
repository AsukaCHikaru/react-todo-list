function calcTag(tagStr) {
  let tagArr = tagStr.split(/,\s*/);  
  return tagArr.filter(tag => tag!=='');
}

export default calcTag;
