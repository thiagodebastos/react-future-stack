// @flow

export type Todo = {
  id: number,
  text: string,
  completed: boolean
};

export type TodoList = Array<Todo>;

export type todoAppState = {
  todos?: TodoList,
  newTodo?: string
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
