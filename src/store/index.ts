import { combineReducers } from 'redux';

import { todoReducer } from './todos/reducers'
import { Todo } from './todos/types'
import { addTodo, toggleTodo } from './todos/actions'

export const reducer = combineReducers({
  todo: todoReducer
})

export type State = ReturnType<typeof reducer>

export { Todo, addTodo, toggleTodo }
