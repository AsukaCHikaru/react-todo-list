import React, { Component } from 'react'

export default class TaskNameInput extends Component {
  render() {
    return (
      <input 
        type="text" 
        placeholder="task name"
        className="taskNameInput"
        value={this.props.value}
        onChange={this.props.updateNameInput}>
      </input>
    )
  }
}
