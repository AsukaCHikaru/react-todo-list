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
    // Iterate tasks in lists and edit task with same id to param version
    currLists.forEach((list) => {      
      list.tasks.forEach((task, i) => {
        if(task.id === taskToEdit.id) list.tasks[i] = taskToEdit;
      });
    });
    return currLists;
  },
  del(state, taskToDel){
    let currLists = deepClone(state.list);
    // Iterate tasks in lists and delete task with same id
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
    // Iterate tasks in Todo list and delete task with same id    
    todo.tasks.forEach((task, i) => {
      if(task.id === taskToFin.id) todo.tasks.splice(i, 1);        
    });
    // Add it to Done list
    done.tasks.push(taskToFin);
    return currLists;
  },
  search(state, keyword){
    let currLists = deepClone(state.list);
    let result = [];
    // Iterate tasks in Todo list 
    currLists[1].tasks.forEach((task) => {
      // If name matches, return it
      let match = task.name.includes(keyword);
      // If name dosent match, iterate tags 
      if(!match && task.tag.length!==0){
        task.tag.forEach((ele) => {
          if(ele.includes(keyword)) match = true;
        })
      }
      if(match) result.push(task);        
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