// @flow

import React from 'react';
import { List as SemanticList } from 'semantic-ui-react';
import styled from 'styled-components';

const ListContent = styled(SemanticList.Content)`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')}
`;

type Props = {
  todoList: TodoList
};

const List = (props: Props) =>
  <SemanticList>
    {props.todoList.map((todo, i) =>
      <SemanticList.Item key={i}>
        <ListContent
          onClick={props.onClick.bind(null, i)}
          completed={todo.completed}
        >
          {todo.text}
        </ListContent>
        <SemanticList.Icon
          name="github"
          size="large"
          onClick={props.deleteListItem.bind(null, i)}
        />
      </SemanticList.Item>
    )}
  </SemanticList>;
export default List;
