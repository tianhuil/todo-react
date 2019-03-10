import { push, RouterState } from 'connected-react-router'

export enum Status {
  // string values are route urls
  All = '/All',
  Completed = '/Completed',
  Incompleted = '/Incompleted',
}

export function display(completed: boolean, routerState: RouterState) {
  switch (routerState.location.pathname) {
    case Status.All: {
      return true
    }
    case Status.Completed: {
      return completed ? true : false
    }
    case Status.Incompleted: {
      return completed ? false : true
    }
    default: {
      // if we can't tell, pretend its Status.All
      return true
    }
  }
}
