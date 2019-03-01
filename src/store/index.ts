import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { todoReducer } from './todos/reducers'
import { Todo } from './todos/types'
import { addTodo, toggleTodo, deleteTodo } from './todos/actions'

export const reducer = combineReducers({
  todo: todoReducer,
  form: formReducer,
})

export type State = ReturnType<typeof reducer>

export { Todo, addTodo, toggleTodo, deleteTodo }
