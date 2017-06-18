//  @flow

import React from 'react';

type Props = {
  onChange: Function,
  onSubmit: Function,
  value: string
};

const Input = ({ onChange, onSubmit, value }: Props) =>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      onChange={onChange}
      value={value}
      placeholder="Add new todo"
    />
    <button>Add item</button>
  </form>;

export default Input;
