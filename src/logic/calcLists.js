function calcLists(currLists, tags){
  let listIndex = 0;
  currLists.forEach((list) => {
    if(list.id > listIndex) listIndex = list.id+1;
    if(tags.includes(list.name)) tags.splice(tags.indexOf(list.name), 1);
  });
  tags.forEach((tag) => {
    currLists.push({id: listIndex, name: tag, tasks: [], });
    listIndex++;
  });
  return currLists;
}

export default calcLists;