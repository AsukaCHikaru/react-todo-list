import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../style/MajorBtn.css';

export default class MajorBtn extends Component{
  render(){
    return (
      <div >
        <FontAwesomeIcon 
          className={`majorBtn ${this.props.type}`}
          icon={(this.props.type==='todo') ? 'plus-circle' : 'minus-circle'}
          onClick={() => this.props.func()}
        />
      </div>
    );
  }
}