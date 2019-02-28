import { combineReducers } from 'redux';

import { todoReducer } from './todos/reducers'
import { Todo } from './todos/types'

export const reducer = combineReducers({
  todo: todoReducer
})

export type State = ReturnType<typeof reducer>

export { Todo }
