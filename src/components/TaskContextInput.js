import React, { Component } from 'react'

export default class TaskContextInput extends Component {
  render() {
    return (
      <textarea 
        placeholder="task contexts..."
        className="taskContextInput"
      />
    )
  }
}
