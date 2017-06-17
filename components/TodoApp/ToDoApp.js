// @flow

import React, { Component } from 'react';
import List from './List';
import Input from './Input';

type Props = {
  todoApp: Object,
  listItemClick: Function,
  inputChange: Function,
  inputSubmit: Function,
  deleteListItem: Function
};

class TodoApp extends Component<void, Props, void> {
  componentDidMount() {}

  onListItemClick = i => {
    this.props.listItemClick(i);
  };

  onInputChange = (event: SyntheticEvent) => {
    this.props.inputChange(event.currentTarget.value);
  };
  onInputSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.todoApp.newTodo.trim()) this.props.inputSubmit();
  };

  onListItemClick = (i: number) => this.props.listItemClick(i);

  deleteListItem = (i: number) => {
    this.props.deleteListItem(i);
  };

  render() {
    const { todos } = this.props.todoApp;

    return (
      <div>
        <List
          todoList={todos}
          onClick={this.onListItemClick}
          deleteListItem={this.deleteListItem}
        />
        <Input
          value={this.props.todoApp.newTodo}
          onChange={this.onInputChange}
          onSubmit={this.onInputSubmit}
        />
      </div>
    );
  }
}

export default TodoApp;
