import React, { Component } from 'react';
import List from './List';
import AddTaskBtn from './AddTaskBtn';
import './App.css';
import { longStackSupport } from 'q';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [
        {id: 1, name: 'ALL', tasks: [], }
      ],      
    };    
    this.addTask = this.addTask.bind(this)
  }
  addTask(newTask){
    let currLists = [...this.state.list];
    currLists.forEach((list) => {
      if(list.name==='ALL' || newTask.tag.includes(list.name)){
        list.tasks.push(newTask);
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
