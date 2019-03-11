import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

import { Status } from './filter'
import { addTodo, deleteTodo, Todo, toggleTodo } from './todos/actions'
import { todoReducer } from './todos/reducers'
import { DispatchType } from './utils'

const history = createBrowserHistory()

const reducer = combineReducers({
  todo: todoReducer,
  form: formReducer,
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
