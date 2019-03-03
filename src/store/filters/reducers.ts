import { FilterActionTypes, FilterState, Filter, SET_FILTER } from './types'

const initialState: FilterState = {
  filter: Filter.All
}

export function filterReducer(
  state=initialState,
  action: FilterActionTypes
): FilterState {
  switch(action.type) {
    case SET_FILTER: {
      return {
        filter: action.filter
      }
    }
    default: {
      return state
    }
  }
}
