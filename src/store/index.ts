import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { todoReducer } from './todos/reducers'
import { addTodo, toggleTodo, deleteTodo, Todo } from './todos/actions'
import { filterReducer } from './filters/reducers';
import { setFilter } from './filters/actions';

export const reducer = combineReducers({
  todo: todoReducer,
  form: formReducer,
  filter: filterReducer,
})

export type State = ReturnType<typeof reducer>

export { Todo, addTodo, toggleTodo, deleteTodo, setFilter }
