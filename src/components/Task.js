import React, { Component } from 'react'
import TaskNameInput from './TaskNameInput';
import TaskTagInput from './TaskTagInput';
import calcTag from '../logic/calcTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Task extends Component {
  constructor(props){
    super(props);
    this.state={
      showEdit: false,
      showDetail: false,
      nameInput: this.props.task.name,
      tagInput: this.props.task.tag.join(", "),
    };
    this.taskIsDone = this.props.task.status==='done';
    this.updateNameInput = this.updateNameInput.bind(this);
    this.updateTagInput = this.updateTagInput.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }
  updateNameInput(e){
    this.setState({nameInput: e.target.value});
  }
  updateTagInput(e){
    this.setState({tagInput: e.target.value});
  }
  renderName(){
    return this.state.showEdit ?
      <TaskNameInput 
        value={this.state.nameInput}
        updateNameInput={this.updateNameInput} 
        defName={this.props.task.name}
        submit={this.submitEdit}
      /> :
      <h5
        className={this.taskIsDone ? 'done' : ''}
        onClick={() => this.setState((prevState) => ({
          showDetail: !prevState.showDetail
        }))}
      >{this.props.task.name}</h5>
    ;
  }
  renderEditBtn(){
    return this.taskIsDone ? 
      <span></span> : 
      <FontAwesomeIcon 
        icon="pencil-alt" 
        className="editBtn" 
        onClick={() => this.setState((prevState) => ({
          showEdit: !prevState.showEdit
        }))}
      />
    ;
  }
  renderTag(){
    return this.state.showEdit ?
      <h6>Tags: 
        <TaskTagInput           
          updateTagInput={this.updateTagInput}
          value={this.state.tagInput}
          defTag={this.props.task.tag.join(", ")}
          submit={this.submitEdit}
        />
      </h6> :
      <h6 
        className="tag"
        style={{display: (this.props.task.tag.length!==0) ? 'block' : 'none'}}
      >Tags: {this.props.task.tag.join(", ")}</h6>
    ;
  }
  renderSubmitEdit(){
    return this.state.showEdit ? 
      <div className="submitEdit">
        <button
          onClick={() => this.submitEdit()}
        >OK</button>
        <button
          onClick={() => {
            this.setState({
              showEdit: false,
              nameInput: this.props.task.name,
              tagInput: this.props.task.tag.join(", "),
            })
          }}
        >CANCEL</button>
      </div> : 
      null
    ;
  }
  submitEdit(){
    this.setState({
      showEdit: false,
      showDetail: true,
    }, 
      this.props.editTask({
        ...this.props.task, 
        name: this.state.nameInput,
        tag: calcTag(this.state.tagInput)})
    )
  }
  render() {
    return (
      <div className="task" >
        <FontAwesomeIcon 
          icon="check" 
          className={this.taskIsDone ? 'checkBtn done' : 'checkBtn'}
          onClick={() => this.props.finishTask({...this.props.task, status: 'done'})}
        />
        {this.renderName()}
        {this.renderEditBtn()}
        <FontAwesomeIcon 
          icon="trash-alt" 
          className="delBtn" 
          onClick={() => {
            this.props.delTask(this.props.task)            
          }}
        />
        <div 
          className="details"
          style={{display: (this.state.showEdit || this.state.showDetail) ? 'grid' : 'none'}}
        >
          <h6 className="time">Time: {this.props.task.time}</h6>
          {this.renderTag()}          
        </div>
        {this.renderSubmitEdit()}
      </div>
    )
  }
}

Task.defaultProps = {
  task: {name: ""},
};