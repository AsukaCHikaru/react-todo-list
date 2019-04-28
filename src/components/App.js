import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt, faPencilAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import List from './List';
import AddTaskBtn from './AddTaskBtn';

import calcLists from '../logic/calcLists';

import './App.css';

library.add(faTrashAlt, faCheck, faPencilAlt, faPlusCircle);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {id: 1, name: 'ALL', tasks: [], }
      ],      
    };    
    this.addTask = this.addTask.bind(this)
    this.delTask = this.delTask.bind(this)
  }
  addTask(newTask){
    let tags = [...newTask.tag, 'ALL'];
    let currLists = [...this.state.list];
    // If tags contains unexisted list, create it
    currLists = calcLists(currLists, [...tags]);
    currLists.forEach((list) => {
      if(tags.includes(list.name)) list.tasks.push(newTask);  
    });
    this.setState({list: currLists})
  }
  delTask(taskToDel){
    let tags = [...taskToDel.tag, 'ALL'];
    let currLists = [...this.state.list];
    currLists.forEach((list) => {
      if(tags.includes(list.name)){
        list.tasks.forEach((task, i) => {
          if(task.id === taskToDel.id) list.tasks.splice(i, 1);        
        });
      }
    });
    this.setState({list: currLists})
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
              delTask={this.delTask}
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
