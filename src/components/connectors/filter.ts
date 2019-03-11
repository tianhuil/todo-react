import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { ThunkAction } from 'redux-thunk'

import { State, Status } from '../../store'
import { DispatchType } from '../../store'

const mapState = (state: State) => {
  const pathname = state.router.location.pathname
  const stateStatus = (Object.values(Status).includes(pathname)) ? (pathname as Status) : Status.All
  const maybeQuery = new URLSearchParams(state.router.location.search).get('query')

  return {
    stateStatus,
    stateQuery: maybeQuery ? maybeQuery : '',
    display(completed: boolean, text: string) {
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
    },
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

export const filterConnector = connect(mapState, mapDispatch)
export interface FilterProps extends ReturnType<typeof mapState>,
                                     DispatchType<typeof mapDispatch> {}
