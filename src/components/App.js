import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTrashAlt, faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import List from './List';

import './App.css';

library.add(faTrashAlt, faCheck, faPencilAlt, faPlusCircle);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {id: 0, name: 'Done', tasks: [], },
        {id: 1, name: 'TO DO', tasks: [], },
      ],      
    };    
    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.delTask = this.delTask.bind(this);
    this.finishTask = this.finishTask.bind(this);
  }
  addTask(newTask){
    let currLists = [...this.state.list];
    currLists[1].tasks.push(newTask);
    this.setState({list: currLists});
  }
  editTask(taskToEdit){
    let currLists = [...this.state.list];
    currLists[1].tasks.forEach((task, i) => {
      if(task.id === taskToEdit.id) currLists[1].tasks[i] = taskToEdit;
    });
    this.setState({list: currLists})
  }
  delTask(taskToDel){
    let currLists = [...this.state.list];
    let list = (taskToDel.status==='todo') ? currLists[1] : currLists[0];
    list.tasks.forEach((task, i) => {
      if(task.id === taskToDel.id) list.tasks.splice(i, 1);        
    });
    this.setState({list: currLists});
  }
  finishTask(taskToFin){
    let currLists = [...this.state.list];
    let todo = currLists[1];
    let done = currLists[0];
    todo.tasks.forEach((task, i) => {
      if(task.id === taskToFin.id) todo.tasks.splice(i, 1);        
    });
    done.tasks.push(taskToFin);
    this.setState({list: currLists});
  }
  renderLists(){
    return (
      <div className="listWraper">
        {this.state.list.map((list) => {
          return (
            <List
              key={list.id}
              name={list.name}
              tasks={list.tasks}
              addTask={this.addTask}
              editTask={this.editTask}
              delTask={this.delTask}
              finishTask={this.finishTask}
            >    
            </List>
          )
        })}
      </div>
    )    
  }
  render(){
    return (
      <div className="app">
        {this.renderLists()}
      </div>
    );
  }
}

export default App;
