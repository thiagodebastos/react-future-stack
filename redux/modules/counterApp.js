/*
  Use Ducks pattern
  https://github.com/erikras/ducks-modular-redux
  https://github.com/goopscoop/ga-react-tutorial/blob/6-reduxActionsAndReducers/Notes/6-reduxActionsAndReducers.md
*/

// action types
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// action creators
function increment() {
  return {
    type: INCREMENT
  }
}

function decrement() {
  return {
    type: DECREMENT
  }
}

// reducer
const initialState = {
  count: 0
}

export default function reducer(state = initialState, action = '') {
  switch (action.type) {
  case INCREMENT:
    return { count: state.count + 1 }
  case DECREMENT:
    return { count: state.count - 1 }
  default:
    return state
  }
}
