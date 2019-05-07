import React, { Component } from 'react'

import '../style/SearchSumm.css';

export default class SearchSumm extends Component {
  render() {
    return (
      <h3 className="searchSumm" >
        {this.props.numOfResults} results for "{this.props.keyword}"
      </h3>
    )
  }
}
