// @flow

import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Styled = styled.div`
  text-decoration: ${props =>
    props['data-completed'] ? 'line-through' : 'none'};
  color: ${props => (props['data-completed'] ? 'grey' : 'black')};
`;

const StyledIcon = styled(Icon)`
visibility: ${props => (props['data-completed'] ? 'visible' : 'hidden')};
`;

type Props = {
  todoList: TodoList
};

// NOTE: Use date attributes to prevent `react-unknown-prop` error
// https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
// https://github.com/styled-components/styled-components/issues/439#issuecomment-307335814

// TODO: create each new todo with unique ID

const ListComponent = (props: Props) =>
  <List divided relaxed size="large" selection style={{ maxWidth: 200 }}>
    {props.todoList.map(({ completed, text }, i) =>
      <List.Item key={i}>
        <StyledIcon
          data-completed={completed}
          link
          name="check circle outline"
        />
        <List.Content>
          <Styled
            onClick={props.onClick.bind(null, i)}
            data-completed={completed}
          >
            {text}
          </Styled>
        </List.Content>
        <List.Icon
          link
          name="remove circle"
          color="red"
          onClick={props.deleteListItem.bind(null, i)}
        />
      </List.Item>
    )}
  </List>;
export default ListComponent;
