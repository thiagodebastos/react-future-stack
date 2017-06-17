/*
  Use Ducks pattern
  https://github.com/erikras/ducks-modular-redux
  https://github.com/goopscoop/ga-react-tutorial/blob/6-reduxActionsAndReducers/Notes/6-reduxActionsAndReducers.md

  @flow

*/

// action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// action creators
export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}

// reducer
const initialState = {
  count: 0
};

export default function reducer(
  state: typeof counterAppState = initialState,
  action: CounterAction
) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
