import React, { Component } from 'react'
import List from './List'
import Input from './Input'

class ToDoApp extends Component {
  componentDidMount() {}

  onListItemClick = i => {
    this.props.listItemClick(i)
  }

  onInputChange = event => {
    this.props.inputChange(event.target.value)
  }
  onInputSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    this.props.toDoApp.newToDo.trim() && this.props.inputSubmit()
  }
  deleteListItem = event => {}

  render() {
    const { todos, listItemClick } = this.props.toDoApp
    console.log(this.props)

    return (
      <div>
        <List toDoList={todos} listItemClick={listItemClick} onClick={this.onListItemClick} />
        <Input onChange={this.onInputChange} onSubmit={this.onInputSubmit} value={this.props.toDoApp.newToDo} />
      </div>
    )
  }
}

export default ToDoApp
