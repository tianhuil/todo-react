import { DeepReadonly } from 'utility-types'

import { FilterActionTypes, SET_STATUS, Status } from './actions'

export type FilterState = DeepReadonly<{
  status: Status,
}>

const initialState: FilterState = {
  status: Status.All,
}

export function filterReducer(
  state = initialState,
  action: FilterActionTypes,
): FilterState {
  switch (action.type) {
    case SET_STATUS: {
      return {
        status: action.status,
      }
    }
    default: {
      return state
    }
  }
}
