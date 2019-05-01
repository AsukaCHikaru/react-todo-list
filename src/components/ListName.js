import React, { Component } from 'react';
import './App.css';

class ListName extends Component{
  render(){
    return (
      <div className="listName">
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default ListName;
