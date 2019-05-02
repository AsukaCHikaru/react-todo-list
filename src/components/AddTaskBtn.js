import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class AddTaskBtn extends Component{
  render(){
    return (
      <div >
        <FontAwesomeIcon 
          className="addTaskBtn"
          icon="plus-circle"           
          onClick={() => this.props.handleAddTaskFormDisplay('show')}
        />
      </div>
    );
  }
}

export default AddTaskBtn;