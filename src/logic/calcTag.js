// this function turns string into tag array splited by ","
// ex: "tag1, tag2, tag3" => ["tag1", "tag2", "tag3"]

import handleSpace from './handleSpace';

export default function calcTag(tagStr) {
  let tagArr = tagStr.split(/,\s*/).filter(tag => tag!=='');
  let map = {};
  let result = [];

  // delete spaces before first tag if there are
  if(tagArr.length!==0) 
    tagArr[0] = handleSpace(tagArr[0]);
  // filter same tag
  tagArr.forEach((tag) => {
    if(!map.hasOwnProperty(tag)){
      map[tag] = true;
      result.push(tag);
    }
  });  
  return result;
}