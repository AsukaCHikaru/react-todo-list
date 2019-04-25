import React, { Component } from 'react'

export default class AddTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: '',
    }
    this.clickAddBtn = this.clickAddBtn.bind(this)
    this.updateInputVal = this.updateInputVal.bind(this)
  }
  clickAddBtn(){
    if(this.state.inputVal!==''){
      this.props.addTask({
        name: this.state.inputVal,
        time: new Date().toLocaleString(),
        tag: [],
      });
      this.props.handleAddTaskFormDisplay('hide');
      this.setState({inputVal: ''});
    }
  }
  updateInputVal(e){
    this.setState({inputVal: e.target.value})
  }
  render() {
    let style={
      display: (this.props.show) ? 'block' : 'none'
    }
    return (
      <div 
        className="addTaskForm"
        style={style}
      >
        <input 
          type="text"
          value={this.state.inputVal}
          onChange={this.updateInputVal}
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

