import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import HeaderComp from './Header'
import TodoListComp from './TodoList'

import { reducer } from '../store'

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

const AppComp = () => <Provider store={store}>
  <HeaderComp/>
  <TodoListComp/>
</Provider>

export default AppComp;
