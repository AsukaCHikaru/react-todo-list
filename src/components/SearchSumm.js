import React, { Component } from 'react'

import '../style/SearchSumm.css';

export default class SearchSumm extends Component {
  render() {
    let str = '';
    switch (this.props.numOfResults) {
      case 0:
        str = `No result for "${this.props.keyword}"`
        break;
      case 1: 
        str = `1 result for "${this.props.keyword}"`
        break;   
      default:
        str = `${this.props.numOfResults} results for "${this.props.keyword}"`
        break;
    }
    return (
      <h3 className="searchSumm" >
        {str}
      </h3>
    )
  }
}
