import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'

import { history, Status, store } from '../store'
import HeaderComp from './Header'
import TodoListComp from './TodoList'

const Body = () => (
  <React.Fragment>
    <HeaderComp/>
    <TodoListComp/>
  </React.Fragment>
)

const AppComp = () => {
  return <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={Status.All} render={Body} />
        <Route exact path={Status.Completed} render={Body} />
        <Route exact path={Status.Incompleted} render={Body} />
        <Redirect to={Status.All} />
      </Switch>
    </ConnectedRouter>
  </Provider>
}

export default AppComp
