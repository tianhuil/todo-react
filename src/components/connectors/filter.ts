import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import { ThunkAction } from 'redux-thunk'

import { State, Status } from '../../store'
import { DispatchType } from '../../store'

const mapState = (state: State) => {
  const pathname = state.router.location.pathname
  const maybeQuery = new URLSearchParams(state.router.location.search).get('query')

  return {
    stateStatus: (pathname in Status) ? (pathname as Status) : Status.All,
    stateQuery: maybeQuery ? maybeQuery : '',
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
