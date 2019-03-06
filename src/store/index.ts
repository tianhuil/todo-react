import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { setStatus, Status } from './filters/actions'
import { filterReducer } from './filters/reducers'
import { addTodo, deleteTodo, Todo, toggleTodo } from './todos/actions'
import { todoReducer } from './todos/reducers'
import { DispatchType } from './utils'

export const reducer = combineReducers({
  todo: todoReducer,
  form: formReducer,
  filter: filterReducer,
})

export type State = ReturnType<typeof reducer>

export { DispatchType, addTodo, toggleTodo, deleteTodo, setStatus, Status, Todo }
