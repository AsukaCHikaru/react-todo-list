import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Task extends Component {
  render() {
    return (
      <div className="task">
        <FontAwesomeIcon 
          icon="check" 
          className="checkBtn" 
        />
        {this.props.task.name}
        <FontAwesomeIcon 
          icon="pencil-alt" 
          className="editBtn" 
        />
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