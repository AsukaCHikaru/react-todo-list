import { expect } from 'chai';

import handleTask from './handleTask';

const tasks = [
  {name: 'task 1', tag: ['uno'], id: 190000000001},
  {name: 'task 2', tag: ['uno', 'dos'], id: 190000000002},
  {name: 'task 3', tag: ['uno', 'tres'], id: 190000000003},
];

const state = {
  list: [
    {id: 0, name: 'Done', tasks: [], },
    {id: 1, name: 'Todo', tasks: [tasks[0], tasks[1]], },
    {id: 2, name: 'Search', tasks: [], keyword: null, },
  ], 
}

describe('Add', () => {
  const taskToAdd = tasks[2];
  const newLists = handleTask.add(state, taskToAdd);
  it('adds task to list "Todo"', () => {    
    expect(newLists[1].tasks.length).to.equal(state.list[1].tasks.length+1);    
    expect(newLists[1].tasks[2].id).to.equal(190000000003);
  });
  it('dose not affect Done and Search lists', () => {
    expect(newLists[0].tasks.length).to.equal(state.list[0].tasks.length);
    expect(newLists[2].tasks.length).to.equal(state.list[2].tasks.length);    
  });
  
});

describe('Edit', () => {
  const taskToEdit = {name: 'task 1.edited', tag: ['new tag1', 'new tag2'], id: 190000000001};
  const newLists = handleTask.edit(state, taskToEdit);
  it('edits task with same id to param version', () => {            
    expect(newLists[1].tasks[0].name).to.equal('task 1.edited');
  });
  it('edits tag aswell', () => {
    expect(newLists[1].tasks[0].tag.length).to.equal(2);
    expect(newLists[1].tasks[0].tag[0]).to.equal('new tag1');
    expect(newLists[1].tasks[0].tag[1]).to.equal('new tag2');
  });
  it('does not affect tasks with diff id', () => {
    expect(newLists[1].tasks[1].name).to.equal('task 2');
    expect(newLists[1].tasks[1].tag[0]).to.equal('uno');
    expect(newLists[1].tasks[1].tag[1]).to.equal('dos');
  });
  
});

describe('Search', () => {
  const keyword = 'task 2';
  const newLists = handleTask.search(state, keyword);
  it('add task including keyword to Search list', () => {
    expect(newLists[2].tasks.length).to.equal(1);
    expect(newLists[2].tasks[0].id).to.equal(190000000002);
  });  
  it('can search from tag aswell', () => {
    const keyword = 'dos';
    const newLists = handleTask.search(state, keyword);
    expect(newLists[2].tasks.length).to.equal(1);
    expect(newLists[2].tasks[0].id).to.equal(190000000002);
  });  
});

describe('Clear Search', () => {
  const keyword = 'task 2';
  const newState = {list: handleTask.search(state, keyword)};
  it('clear all results from Search list', () => {
    expect(newState.list[2].tasks.length).to.equal(1);
    const newLists = handleTask.clearSearch(newState);
    expect(newLists[2].tasks.length).to.equal(0);
  });
  it('dose not affect Done and Todo lists', () => {
    const newLists = handleTask.clearSearch(newState);
    expect(newState.list[0].tasks.length).to.equal(newLists[0].tasks.length);
    expect(newState.list[1].tasks.length).to.equal(newLists[1].tasks.length);
  });
  
});

describe('Delete', () => {
  const taskToDel = {name: 'task 2', tag: ['uno', 'dos'], id: 190000000002};
  const newLists = handleTask.del(state, taskToDel);
  const matchOfDelTask = 0;
  newLists.forEach((list) => {
    list.tasks.forEach((task) => {
      if(task.id===190000000002) matchOfDelTask++;
    });
  });
  it('should delete task with same id from any list', () => {
    expect(newLists[1].tasks.length).to.equal(state.list[1].tasks.length-1);    
    expect(matchOfDelTask).to.equal(0);
  });  
});

describe('Finish', () => {
  const taskToFin = {name: 'task 1', tag: ['uno'], id: 190000000001};
  const newLists = handleTask.finish(state, taskToFin);
  it('move task to Done list', () => {
    expect(newLists[0].tasks.length).to.equal(1);
    expect(newLists[1].tasks.length).to.equal(state.list[1].tasks.length-1);
    expect(newLists[0].tasks[0].id).to.equal(190000000001);
  });  
});