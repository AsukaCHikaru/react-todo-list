import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Task extends Component {
  constructor(props){
    super(props);
    this.taskIsDone = this.props.task.tag.includes('Done');
  }
  renderEditBtn(){
    return this.taskIsDone ? 
      <span></span> : 
      <FontAwesomeIcon 
        icon="pencil-alt" 
        className="editBtn" 
      />
    ;
  }
  render() {
    return (
      <div className="task">
        <FontAwesomeIcon 
          icon="check" 
          className={this.taskIsDone ? 'checkBtn done' : 'checkBtn'}
          onClick={() => {
            this.props.finishTask(this.props.task)
          }}
        />
        <h6
          className={this.taskIsDone ? 'done' : ''}
        >{this.props.task.name}</h6>
        {this.renderEditBtn()}
        <FontAwesomeIcon 
          icon="trash-alt" 
          className="delBtn" 
          onClick={() => {
            this.props.delTask(this.props.task)            
          }}
        />
      </div>
    )
  }
}

Task.defaultProps = {
  task: {name: ""}
};