import React, { Component } from 'react'
import PropTypes from 'prop-types';

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

TaskTagInput.propTypes = {
  value: PropTypes.string,
  updateTagInput: PropTypes.func,
  submit: PropTypes.func,
};