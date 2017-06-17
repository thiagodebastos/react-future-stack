// action types
const LIST_ITEM_CLICK = 'LIST_ITEM_CLICK'
const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_SUBMIT = 'INPUT_SUBMIT'

// action creators
export function listItemClick(index) {
  return {
    type: LIST_ITEM_CLICK,
    index
  }
}

export function inputChange(value) {
  return {
    type: INPUT_CHANGE,
    value
  }
}

export function inputSubmit() {
  return {
    type: INPUT_SUBMIT
  }
}

// reducer
const initialState = {
  todos: [
    {
      id: 1,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 2,
      text: 'Go shopping',
      completed: true
    }
  ],
  newToDo: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case LIST_ITEM_CLICK:
    return Object.assign({}, state, {
      todos: [
        ...state.todos.slice(0, action.index),
        Object.assign({}, state.todos[action.index], { completed: !state.todos[action.index].completed }),
        ...state.todos.slice(action.index + 1)
      ]
    })

  case INPUT_CHANGE:
    return Object.assign({}, state, { newToDo: action.value })

  case INPUT_SUBMIT:
    return Object.assign({}, state, {
      todos: [...state.todos, { text: state.newToDo, completed: false }],
      newToDo: ''
    })
  default:
    return state
  }
}
