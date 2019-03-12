import { push } from 'connected-react-router'
import { ComponentType } from 'react'
import { connect, InferableComponentEnhancerWithProps } from 'react-redux'
import { ThunkAction } from 'redux-thunk'

import { State, Status } from '../store'
import { DispatchType } from '../store'

const mapState = (state: State) => {
  const pathname = state.router.location.pathname
  const stateStatus = (Object.values(Status).includes(pathname)) ? (pathname as Status) : Status.All
  const maybeQuery = new URLSearchParams(state.router.location.search).get('query')
  const stateQuery = maybeQuery ? maybeQuery : ''

  const displayStatus = (completed: boolean) => {
    switch (stateStatus) {
      case Status.All: {
        return true
      }
      case Status.Completed: {
        return completed ? true : false
      }
      case Status.Incompleted: {
        return completed ? false : true
      }
    }
  }

  const displayQuery = (text: string) => (
    text.toLowerCase().includes(stateQuery.toLowerCase())
  )

  return {
    stateStatus,
    stateQuery,
    display: (completed: boolean, text: string) => (
      displayStatus(completed) && displayQuery(text)
    ),
  }
}

type Action = ThunkAction<void, State, {}, ReturnType<typeof push>>
interface PushObj {
  status?: Status
  query?: string
}

const mapDispatch = {
  push: ({status, query}: PushObj): Action => {
    return (dispatch, getState) => {
      const { stateStatus, stateQuery } = mapState(getState())
      const newQuery = query === undefined ? stateQuery : query
      dispatch(push({
        pathname: status ? status : stateStatus as string,
        search: newQuery ? `?query=${newQuery}` : '',
      }))
    }
  },
}

export interface FilterProps extends ReturnType<typeof mapState>,
                                     DispatchType<typeof mapDispatch> {}

export function filterConnector<T extends object>(c: ComponentType<T & FilterProps>): InferableComponentEnhancerWithProps<FilterProps, T> {
  return connect(mapState, mapDispatch)(c)
}
