import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { todoReducer } from './todos/reducers'
import { addTodo, toggleTodo, deleteTodo, Todo } from './todos/actions'

export const reducer = combineReducers({
  todo: todoReducer,
  form: formReducer,
})

export type State = ReturnType<typeof reducer>

export { Todo, addTodo, toggleTodo, deleteTodo }
