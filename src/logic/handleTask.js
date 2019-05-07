function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const handleTask = {
  add(state, taskToAdd){
    let currLists = deepClone(state.list);
    currLists[1].tasks.push(taskToAdd);
    return currLists;
  },
  edit(state, taskToEdit){
    let currLists = deepClone(state.list);
    currLists.forEach((list) => {      
      list.tasks.forEach((task, i) => {
        if(task.id === taskToEdit.id) list.tasks[i] = taskToEdit;
      });
    });
    return currLists;
  },
  del(state, taskToDel){
    let currLists = deepClone(state.list);
    currLists.forEach((list) => {      
      list.tasks.forEach((task, i) => {
        if(task.id === taskToDel.id) list.tasks.splice(i, 1);        
      });
    });
    return currLists;
  },
  finish(state, taskToFin){
    let currLists = deepClone(state.list);
    let todo = currLists[1];
    let done = currLists[0];
    todo.tasks.forEach((task, i) => {
      if(task.id === taskToFin.id) todo.tasks.splice(i, 1);        
    });
    done.tasks.push(taskToFin);
    return currLists;
  },
  search(state, keyword){
    let currLists = deepClone(state.list);
    let result = [];
    currLists[1].tasks.forEach((task) => {
      if(task.name.includes(keyword)||task.tag.includes(keyword))
        result.push(task);        
    });
    currLists[2].tasks = result;
    currLists[2].keyword = keyword;
    return currLists;
  },
  clearSearch(state){
    let currLists = deepClone(state.list);
    currLists[2].tasks = [];
    currLists[2].keyword = null;
    return currLists;
  }
};

export default handleTask;