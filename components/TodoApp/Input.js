import React from 'react'

const Input = ({ onChange, onSubmit, value }) =>
  <form onSubmit={onSubmit}>
    <input type="text" onChange={onChange} value={value} placeholder="Add new todo" />
    <button>Add item</button>
  </form>

export default Input
