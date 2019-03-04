import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from '../store';
import HeaderComp from './Header';
import TodoListComp from './TodoList';

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
