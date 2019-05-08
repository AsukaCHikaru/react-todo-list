import React, { Component } from 'react';

import Header from './Header';
import List from './List';

import getUserData from '../logic/getUserData';
import updateUserData from '../logic/updateUserData';
import checkBreakpoints from '../logic/checkBreakpoints';

import '../style/App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTrashAlt, faPencilAlt, faPlusCircle, faMinusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import handleTask from '../logic/handleTask';
library.add(faTrashAlt, faCheck, faPencilAlt, faPlusCircle, faMinusCircle, faSearch);

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {      
      userId: null,
      list: [
        {id: 0, name: 'Done', tasks: [], },
        {id: 1, name: 'Todo', tasks: [], },
        {id: 2, name: 'Search', tasks: [], keyword: null, },
      ],     
      width: window.innerWidth,
      selectedList: 1,
    };    
    this.isFirstRender = this.state.userId===null;
  }    
  componentWillMount(){
    if(this.isFirstRender) this.setState(getUserData(), () => updateUserData(this.state));
  } 
  componentDidUpdate(){        
    updateUserData(this.state);
  }
  componentDidMount(){
    window.addEventListener('resize', this.updateAppWidth);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateAppWidth);
  }
  updateAppWidth = () => {
    if(checkBreakpoints(this.state, window.innerWidth)) this.setState({width: window.innerWidth})
  }
  updateSelectedList = (newList) => {
    this.setState({selectedList: newList});
  }
  addTask = (taskToAdd) => {    
    this.setState({list: handleTask.add(this.state, taskToAdd)});
  }
  editTask = (taskToEdit) => {
    this.setState({list: handleTask.edit(this.state, taskToEdit)});
  }
  delTask = (taskToDel) => {
    this.setState({list: handleTask.del(this.state, taskToDel)});
  }
  finishTask = (taskToFin) => {
    this.setState({list: handleTask.finish(this.state, taskToFin)});
  }
  searchTask = (keyword) => {
   this.setState({list: handleTask.search(this.state, keyword)});
  }
  clearSearch = () => {
    this.setState({list: handleTask.clearSearch(this.state)});
  }
  renderLists(){
    let node;
    if(this.state.width > 768){
      node = 
        this.state.list.map((list) => {
          return (
            <List
              key={list.id}
              name={list.name}
              keyword={(list.keyword===null || list.keyword===undefined) ? null : list.keyword}
              tasks={list.tasks}
              addTask={this.addTask}
              editTask={this.editTask}
              delTask={this.delTask}
              finishTask={this.finishTask}
              searchTask={this.searchTask}
              clearSearch={this.clearSearch}
            >    
            </List>
          )
        })
      ;  
    }else{
      const list = this.state.list[this.state.selectedList];
      node = <List
        key={this.state.selectedList}
        name={list.name}
        keyword={(this.state.list.keyword===null || list.keyword===undefined) ? null : list.keyword}
        tasks={list.tasks}
        addTask={this.addTask}
        editTask={this.editTask}
        delTask={this.delTask}
        finishTask={this.finishTask}
        searchTask={this.searchTask}
        clearSearch={this.clearSearch}
      >    
      </List>
    }
    return (
      <div className="listWraper" >
      {node}
      </div>
    );
  }
  render(){
    return (
      <div className="app">
        <Header 
          width={this.state.width} 
          selectedList={this.state.selectedList}
          updateSelectedList={this.updateSelectedList}
        />
        {this.renderLists()}
      </div>
    );
  }
}