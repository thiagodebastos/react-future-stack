//  @flow

import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import 'semantic-ui-css/components/icon.css';

type Props = {
  onChange: Function,
  onSubmit: Function,
  value: string
};

const InputComponent = ({ onChange, onSubmit, value }: Props) =>
  <form onSubmit={onSubmit}>
    <Input
      type="text"
      onChange={onChange}
      value={value}
      placeholder="Add new todo"
      label={<Button>+</Button>}
      labelPosition="right"
    />

  </form>;

export default InputComponent;
