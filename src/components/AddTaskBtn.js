import React, { Component } from 'react';
import './App.css';

class AddTaskBtn extends Component{
  render(){
    return (
      <div className="addTaskBtn">
        <button
          onClick={() => this.props.handleAddTaskFormDisplay('show')}
        ></button>
      </div>
    );
  }
}

export default AddTaskBtn;