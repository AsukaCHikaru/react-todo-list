import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListName from './ListName';
import Task from './Task';
import AddTaskBtn from './AddTaskBtn';
import AddTaskForm from './AddTaskForm';

export default class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      showAddTaskForm: false,      
    };
    this.isTodoList = this.props.name === 'Todo';
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
    return this.isTodoList ?       
      <AddTaskBtn         
        handleAddTaskFormDisplay={this.handleAddTaskFormDisplay}
      /> :
      null
    ;
  }
  render(){
    return (
      <div className={`list ${this.props.name.toLowerCase()}`}>
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

List.propTypes = {
  name: PropTypes.string.isRequired,
  tasks: PropTypes.array,
  addTask: PropTypes.func,
  editTask: PropTypes.func,
  delTask: PropTypes.func,
  finishTask: PropTypes.func,
};