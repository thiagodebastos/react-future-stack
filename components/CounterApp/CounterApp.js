// @flow
import React from 'react';
import Button from '../Button';

type Props = {
  counterApp: {
    count: number
  },
  increment: CounterAction,
  decrement: CounterAction
};

const Counter = (props: Props) =>
  <div>
    Counter: {props.counterApp.count} <br />
    <Button onClick={props.increment} primary> + </Button>
    <Button onClick={props.decrement}> - </Button>
  </div>;

export default Counter;
