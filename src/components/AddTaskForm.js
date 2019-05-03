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
      showWarning: false,
    }
    this.clickAddBtn = this.clickAddBtn.bind(this);
    this.updateNameInput = this.updateNameInput.bind(this);
    this.updateTagInput = this.updateTagInput.bind(this);
  }
  clickAddBtn(){
    if(RegExp(/\w+/).exec(this.state.nameInput)!==null){
      let newTask = {
        id: calcTaskHash(),
        name: this.state.nameInput,
        status: 'todo',
        time: new Date().toLocaleString(),
        tag: calcTag(this.state.tagInput),      
      }
      this.props.addTask(newTask);
      this.props.handleAddTaskFormDisplay('hide');
      this.setState({nameInput: '', tagInput: '', showWarning: false});
    }else{
      this.setState({showWarning: true})
    }
  }
  updateNameInput(e){
    this.setState({nameInput: e.target.value});
  }
  updateTagInput(e){
    this.setState({tagInput: e.target.value});
  }
  render() {
    return (
      <div 
        className="addTaskForm"
        style={{display: (this.props.show) ? 'flex' : 'none'}}
      >
        <h2>Add task</h2>
        <TaskNameInput 
          value={this.state.nameInput}
          updateNameInput={this.updateNameInput}
          submit={this.clickAddBtn}
        />
        <TaskTagInput 
          value={this.state.tagInput}
          updateTagInput={this.updateTagInput} 
          submit={this.clickAddBtn}
        />
        <p 
          className="warning"
          style={{display: (this.state.showWarning) ? 'inline' : 'none'}}
        >Task name is needed!</p>
        <div>
          <button
            onClick={this.clickAddBtn}
          >ADD</button>
          <button
            onClick={() => {
              this.setState(
                {showWarning: false},
                this.props.handleAddTaskFormDisplay('hide')
              )}}
          >CANCEL</button>
        </div>
      </div>
    )
  }
}

