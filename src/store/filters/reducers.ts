import { FilterActionTypes, Filter, SET_FILTER } from './actions'

export interface FilterState {
  filter: Filter
}

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
