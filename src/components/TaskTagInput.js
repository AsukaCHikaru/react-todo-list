import React, { Component } from 'react'

export default class TaskTagInput extends Component {
  render() {
    return (
      <input 
        className="taskTagInput"
        placeholder='add tags (use "," to separate)'
        value={this.props.value}
        onChange={this.props.updateTagInput}
      />
    )
  }
}
