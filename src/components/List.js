import React, { Component } from 'react';
import ListName from './ListName';
import Task from './Task';
import AddTaskBtn from './AddTaskBtn';
import AddTaskForm from './AddTaskForm';
import './App.css';

class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      showAddTaskForm: false,      
    };
    this.handleAddTaskFormDisplay = this.handleAddTaskFormDisplay.bind(this);
  }
  handleAddTaskFormDisplay(param){
    this.setState({showAddTaskForm: (param==='show' ? true : false)})
  }
  
  renderTasks(){
    return (
      <div className="tasks">
        {this.props.tasks.map((task, i) => {
            return (
              <Task
                key={i}
                task={task}
              />
            )
        })}
      </div>
    )
  }
  render(){
    return (
      <div className="list">
        <ListName name={this.props.name} />
        {this.renderTasks()}
        <AddTaskForm 
          show={this.state.showAddTaskForm}
          handleAddTaskFormDisplay={this.handleAddTaskFormDisplay}          
          addTask={this.props.addTask}
        />
        <AddTaskBtn 
          handleAddTaskFormDisplay={this.handleAddTaskFormDisplay}
        />
      </div>
    );
  }
}

export default List;
