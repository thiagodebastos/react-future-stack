import React from 'react'
import styled from 'styled-components'

const ListItem = styled.div`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')}
`
const List = props =>
  <div>
    {props.todoList.map((todo, i) =>
      <ListItem key={i} completed={todo.completed}>
        {' '}
        <span onClick={props.onClick.bind(null, i)}>{todo.text}</span>
        <button onClick={props.deleteListItem.bind(null, i)}>X</button>
      </ListItem>
    )}
  </div>
export default List
