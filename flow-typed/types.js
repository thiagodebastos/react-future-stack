// @flow

declare var todoAppState: {
  todos: Array<{
    id: number,
    text: string,
    completed: boolean
  }>,
  newTodo: string
};

declare var counterAppState: {
  count: number
};

declare type CounterActionType = 'INCREMENT' | 'DECREMENT';

declare type CounterActionT<A: CounterActionType, P> = {|
  type: A,
  payload: P
|};

export type CounterAction =
  | CounterActionT<'INCREMENT', null>
  | ActionT<'DECREMENT', null>;
