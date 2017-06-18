// @flow

import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')}
`;

type Props = {
  todoList: TodoList
};

const List = (props: Props) =>
  <ul className="collection">
    {props.todoList.map((todo, i) =>
      <ListItem className="collection-item" key={i} completed={todo.completed}>
        {' '}
        <span role="menuitem" onClick={props.onClick.bind(null, i)}>
          {todo.text}
        </span>
        <button
          className="btn-floating btn-small waves-effect waves-light red"
          onClick={props.deleteListItem.bind(null, i)}
        >
          X
        </button>
      </ListItem>
    )}
  </ul>;
export default List;
