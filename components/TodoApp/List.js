import React from 'react'
import styled from 'styled-components'

const ListItem = styled.div`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')}
`
const List = ({ listItemClick, toDoList, completed, onClick }) =>
  <div>
    {toDoList.map((todo, i) =>
      <ListItem key={i} completed={todo.completed} onClick={onClick.bind(null, i)}>
        {' '}
        <span>{todo.text}</span>
        {'  '}
        <button onClick={listItemClick}>toggle</button>
      </ListItem>
    )}
  </div>
export default List
