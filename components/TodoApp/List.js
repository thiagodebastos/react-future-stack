// @flow

import React from 'react';
import { List as SemanticList } from 'semantic-ui-react';
import styled from 'styled-components';

const ListContent = styled(SemanticList.Content)`
  text-decoration: ${props =>
    props['data-completed'] ? 'line-through' : 'none'}
`;

ListContent.passProps = false;

type Props = {
  todoList: TodoList
};

// NOTE: Use date attributes to prevent `react-unknown-prop` error
// https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
// https://github.com/styled-components/styled-components/issues/439#issuecomment-307335814

const List = (props: Props) =>
  <SemanticList>
    {props.todoList.map(({ completed, text }, i) =>
      <SemanticList.Item key={i}>
        <ListContent
          onClick={props.onClick.bind(null, i)}
          data-completed={completed}
        >
          {text}
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
