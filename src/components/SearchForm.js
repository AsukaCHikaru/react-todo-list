import React, { Component } from 'react'
import handleSpace from '../logic/handleSpace';

import '../style/SearchForm.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput: '',
    };
    this.updateSearchInput = this.updateSearchInput.bind(this)
  }
  updateSearchInput(e){
    this.setState({searchInput: e.target.value});
  }
  startSearch(){
    if(RegExp(/\w+/).exec(this.state.searchInput)!==null){
      this.setState({searchInput: ''}, 
      this.props.searchTask(handleSpace(this.state.searchInput))
      );
    }
  }
  render() {
    return (
      <div className="searchForm">
        <input 
          type="text" 
          placeholder="Enter name or tag"
          onChange={this.updateSearchInput}
          value={this.state.searchInput}
          onKeyDown={(e) => {
            if(e.keyCode===13) this.startSearch();
          }}
        />
        <FontAwesomeIcon 
          icon="search"
          onClick={() => this.startSearch()}
        />
      </div>
    )
  }
}
