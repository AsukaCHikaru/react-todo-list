import React, { Component } from 'react'
import TaskNameInput from './TaskNameInput';
import TaskTagInput from './TaskTagInput';
import calcTaskHash from '../logic/calcTaskHash';
import calcTag from '../logic/calcTag';

export default class AddTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      nameInput: '',
      tagInput: '',
    }
    this.clickAddBtn = this.clickAddBtn.bind(this);
    this.updateNameInput = this.updateNameInput.bind(this);
    this.updateTagInput = this.updateTagInput.bind(this);
  }
  clickAddBtn(){
    let newTask = {
      id: calcTaskHash(),
      name: this.state.nameInput,
      status: 'todo',
      time: new Date().toLocaleString(),
      tag: calcTag(this.state.tagInput),      
    }
    if(this.state.nameInput!==''){
      this.props.addTask(newTask);
      this.props.handleAddTaskFormDisplay('hide');
      this.setState({nameInput: '', tagInput: ''});
    }
  }
  updateNameInput(e){
    this.setState({nameInput: e.target.value});
  }
  updateTagInput(e){
    this.setState({tagInput: e.target.value});
  }
  render() {
    let style={
      display: (this.props.show) ? 'flex' : 'none'
    }
    return (
      <div 
        className="addTaskForm"
        style={style}
      >
        <TaskNameInput 
          value={this.state.nameInput}
          updateNameInput={this.updateNameInput} 
        />
        <TaskTagInput 
          value={this.state.tagInput}
          updateTagInput={this.updateTagInput} 
        />
        <div>
          <button
            onClick={this.clickAddBtn}
          >ADD</button>
          <button
            onClick={() => this.props.handleAddTaskFormDisplay('hide')}
          >CANCEL</button>
        </div>
      </div>
    )
  }
}

