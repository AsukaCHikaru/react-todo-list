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
    this.isDoneList = this.props.name === 'Done';
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
                editTask={this.props.editTask}
                delTask={this.props.delTask}                
                finishTask={this.props.finishTask}
              />
            )
        })}
      </div>
    )
  }
  renderAddTaskBtn(){
    return this.isDoneList ? 
      null : 
      <AddTaskBtn 
        handleAddTaskFormDisplay={this.handleAddTaskFormDisplay}
      />
    ;
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
        {this.renderAddTaskBtn()}
      </div>
    );
  }
}

List.defaultProps = {
  name: "list",
  tasks: []
};

export default List;
