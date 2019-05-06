import { expect } from 'chai';

import handleTask from './handleTask';

const state = {
  list: [
    {id: 0, name: 'Done', tasks: [], },
    {id: 1, name: 'Todo', tasks: [{name: 'task1', tag: ['uno'], id: 190000000001},], },
    {id: 2, name: 'Search', tasks: [], keyword: null, },
  ], 
}

describe('Add', () => {
  it('adds task to list "Todo"', () => {
    const taskToAdd = {name: 'task2', tag: ['uno', 'dos'], id: 190000000002};
    const numOfTasks = state.list[1].tasks.length;
    const newLists = handleTask.add(state, taskToAdd);
    expect(newLists[1].tasks.length).to.equal(numOfTasks+1);    
    expect(newLists[1].tasks[1].id).to.equal(190000000002);
    expect(newLists[0].tasks.length).to.equal(state.list[0].tasks.length);
    expect(newLists[2].tasks.length).to.equal(state.list[2].tasks.length);
  });
});

describe('Edit', () => {
  it('edits task with same id to param version', () => {        
    const taskToEdit = {name: 'task2.edited', tag: [], id: 190000000002};
    const newLists = handleTask.edit(state, taskToEdit);
    expect(newLists[1].tasks[1].name).to.equal('task2.edited');
  });
  it('edits tag aswell', () => {
    const taskToEdit = {name: 'task2.edited', tag: ['new tag', 'new tag2'], id: 190000000002};
    const newLists = handleTask.edit(state, taskToEdit);
    expect(newLists[1].tasks[1].tag.length).to.equal(2);
    expect(newLists[1].tasks[1].tag[0]).to.equal('new tag');
    expect(newLists[1].tasks[1].tag[1]).to.equal('new tag2');
  });
});

describe('Search', () => {
  it('add task including keyword to Search list', () => {
    const keyword = 'edited';
    const newLists = handleTask.search(state, keyword);
    expect(newLists[2].tasks.length).to.equal(1);
    expect(newLists[2].tasks[0].id).to.equal(190000000002);
  });  
  it('can search from tag aswell', () => {
    const keyword = 'uno';
    const newLists = handleTask.search(state, keyword);
    expect(newLists[2].tasks.length).to.equal(1);
    expect(newLists[2].tasks[0].id).to.equal(190000000001);
  });  
});

describe('Clear Search', () => {
  it('clear all results from Search list', () => {
    const newLists = handleTask.clearSearch(state);
    expect(newLists[2].tasks.length).to.equal(0);
  });  
});

describe('Delete', () => {
  it('should delete task with same id from list', () => {
    const numOfTasks = state.list[1].tasks.length;
    const taskToDel = {name: 'task2.edited', tag: ['new tag', 'new tag2'], id: 190000000002};
    const newLists = handleTask.del(state, taskToDel);
    const matchOfDelTask = 0;
    newLists.forEach((list) => {
      list.tasks.forEach((task) => {
        if(task.id===190000000002) matchOfDelTask++;
      });
    });
    expect(newLists[1].tasks.length).to.equal(numOfTasks-1);    
    expect(matchOfDelTask).to.equal(0);
  });  
});

describe('Finish', () => {
  it('move task to Done list', () => {
    const taskToFin = {name: 'task1', tag: [], id: 190000000001};
    const newLists = handleTask.finish(state, taskToFin);
    expect(newLists[0].tasks.length).to.equal(1);
    expect(newLists[1].tasks.length).to.equal(0);
    expect(newLists[0].tasks[0].id).to.equal(190000000001);
  });  
});