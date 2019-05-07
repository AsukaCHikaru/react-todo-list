import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/List.css';

import ListName from './ListName';
import Task from './Task';
import MajorBtn from './MajorBtn';
import AddTaskForm from './AddTaskForm';
import SearchSumm from './SearchSumm';
import SearchForm from './SearchForm';

export default class List extends Component{
  constructor(props){
    super(props);
    this.state = {
      showAddTaskForm: false,      
    };
    this.handleAddTaskFormDisplay = this.handleAddTaskFormDisplay.bind(this);
  }
  handleAddTaskFormDisplay(param){
    this.setState({showAddTaskForm: (param==='show' ? true : false)})
  }  
  renderSearchSumm(){
    return (this.props.keyword) ? 
      <SearchSumm
        keyword={this.props.keyword}
        numOfResults={this.props.tasks.length}
      /> :
      null
    ;
  }
  renderTasks(){
    return (
      <div className="tasks">
        {this.props.tasks.map((task, i) => {
            return (
              <Task              
                key={i}
                task={task}
                editTask={this.props.editTask}
                delTask={this.props.delTask}                
                finishTask={this.props.finishTask}
              />
            )
        })}
      </div>
    )
  }
  renderAddTaskForm(){
    return (this.props.name==='Todo') ? 
      <AddTaskForm 
        show={this.state.showAddTaskForm}
        handleAddTaskFormDisplay={this.handleAddTaskFormDisplay}          
        addTask={this.props.addTask}
      /> :
      null
    ;        
  }
  renderSearchForm(){
    return (this.props.name==='Search') ?
      <SearchForm 
        searchTask={this.props.searchTask}
      /> :
      null
    ;      
  }
  renderMajorBtn(){
    const majorBtn = {
      Done: null,
      Todo: <MajorBtn   
        type='todo'
        func={() => this.handleAddTaskFormDisplay('show')}
      />,
      Search: <MajorBtn 
        type='search'
        func={this.props.clearSearch}
      />
    }
    return majorBtn[this.props.name];
  }
  render(){
    return (
      <div className={`list ${this.props.name.toLowerCase()}`}>
        <ListName name={this.props.name} />
        {this.renderSearchSumm()}
        {this.renderTasks()}
        {this.renderAddTaskForm()}
        {this.renderSearchForm()}
        {this.renderMajorBtn()}
      </div>
    );
  }
}

List.defaultProps = {
  name: "list",
  tasks: []
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  tasks: PropTypes.array,
  addTask: PropTypes.func,
  editTask: PropTypes.func,
  delTask: PropTypes.func,
  finishTask: PropTypes.func,
};