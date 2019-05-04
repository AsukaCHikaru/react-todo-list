import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListName extends Component{
  render(){
    return (
      <div className="listName">
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

ListName.defaultProps = {
  name: "task name",
};

ListName.propTypes = {
  name: PropTypes.string,
};