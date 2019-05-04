import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class TaskNameInput extends Component {
  render() {
    return (
      <input 
        type="text" 
        placeholder="Task name"
        className="taskNameInput"
        value={this.props.value}
        onChange={this.props.updateNameInput}
        onKeyDown={(e) => {
          if(e.keyCode===13) this.props.submit();
        }}
      />
    )
  }
}

TaskNameInput.propTypes = {
  value: PropTypes.string,
  updateNameInput: PropTypes.func,
  submit: PropTypes.func,
};