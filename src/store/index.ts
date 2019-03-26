import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { addTodo, deleteTodo, Todo, toggleTodo } from './todos/actions'
import { todoReducer } from './todos/reducers'
import { DispatchType, Status } from './utils'

const history = createBrowserHistory()

const reducer = combineReducers({
  todo: todoReducer,
  router: connectRouter(history),
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
    ),
  ),
)

export type State = ReturnType<typeof reducer>

export { DispatchType, addTodo, deleteTodo, toggleTodo, Status, Todo, store, history }
