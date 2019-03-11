import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'

import { history, Status, store } from '../store'
import HeaderComp from './Header'
import TodoListComp from './TodoList'

const body = () => (
  <React.Fragment>
    <HeaderComp/>
    <TodoListComp/>
  </React.Fragment>
)

const AppComp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={Status.All} render={body} />
        <Route exact path={Status.Completed} render={body} />
        <Route exact path={Status.Incompleted} render={body} />
        <Redirect to={Status.All} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default AppComp
