import React, { Component } from 'react'

import '../style/Header.css';

export default class Header extends Component {
  renderRwdBtns(){
    return (this.props.width <= 768) ?
      <div className="rwdBtn">
        <button
          className={(this.props.selectedList===0) ? 'pressed' : ''}
          onClick={() => this.props.updateSelectedList(0)}
        >Done</button>
        <button
          className={(this.props.selectedList===1) ? 'pressed' : ''}
          onClick={() => this.props.updateSelectedList(1)}
        >Todo</button>
        <button
          className={(this.props.selectedList===2) ? 'pressed' : ''}
          onClick={() => this.props.updateSelectedList(2)}
        >Search</button>
      </div> :
      null; 
  }
  render() {
    return (
      <header>
        Todo list
        {this.renderRwdBtns()}
      </header>
    )
  }
}
