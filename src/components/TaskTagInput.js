import React, { Component } from 'react'

export default class TaskTagInput extends Component {
  render() {
    return (
      <input 
        className="taskTagInput"
        placeholder='Add tags (use "," to separate)'
        value={this.props.value}
        onChange={this.props.updateTagInput}
        onKeyDown={(e) => {
          if(e.keyCode===13) this.props.submit();
        }}
      />
    )
  }
}
