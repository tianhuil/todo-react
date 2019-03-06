import { DeepReadonly } from 'utility-types'

import { FilterActionTypes, SET_QUERY, SET_STATUS, Status } from './actions'

export type FilterState = DeepReadonly<{
  status: Status,
  query: string,
}>

const initialState: FilterState = {
  status: Status.All,
  query: '',
}

export function filterReducer(
  state = initialState,
  action: FilterActionTypes,
): FilterState {
  switch (action.type) {
    case SET_STATUS: {
      return {
        ...state,
        status: action.payload.status,
      }
    }

    case SET_QUERY: {
      return {
        ...state,
        query: action.payload.query,
      }
    }

    default: {
      return state
    }
  }
}
