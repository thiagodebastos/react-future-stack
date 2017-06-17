// @flow

// action types
const LIST_ITEM_CLICK = 'LIST_ITEM_CLICK';
const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_SUBMIT = 'INPUT_SUBMIT';
const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';

// action creators
export function listItemClick(index: number) {
  return {
    type: LIST_ITEM_CLICK,
    index
  };
}

export function inputChange(value: string) {
  return {
    type: INPUT_CHANGE,
    value
  };
}

export function inputSubmit() {
  return {
    type: INPUT_SUBMIT
  };
}

export function deleteListItem(index: number) {
  return {
    type: DELETE_LIST_ITEM,
    index
  };
}

// reducer
const initialState = {
  todos: [],
  newTodo: ''
};

export default function reducer(
  state: typeof todoAppState = initialState,
  action: Object
) {
  switch (action.type) {
  case LIST_ITEM_CLICK:
    return Object.assign({}, state, {
      todos: [
        ...state.todos.slice(0, action.index),
        Object.assign({}, state.todos[action.index], {
          completed: !state.todos[action.index].completed
        }),
        ...state.todos.slice(action.index + 1)
      ]
    });

  case INPUT_CHANGE:
    return Object.assign({}, state, { newTodo: action.value });

  case INPUT_SUBMIT:
    return Object.assign({}, state, {
      todos: [...state.todos, { text: state.newTodo, completed: false }],
      newTodo: ''
    });

  case DELETE_LIST_ITEM:
    return Object.assign({}, state, {
      todos: [
        ...state.todos.slice(0, action.index),
        ...state.todos.slice(action.index + 1)
      ]
    });

  default:
    return state;
  }
}
