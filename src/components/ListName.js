import React, { Component } from 'react';
import './App.css';

class ListName extends Component{
  render(){
    return (
      <div className="listName">
        {this.props.name}
      </div>
    );
  }
}

export default ListName;
