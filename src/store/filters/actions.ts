export const SET_FILTER = 'SET_FILTER'

export enum Filter {
  All,
  Completed,
  Incompleted,
}

interface SetFilterAction {
  type: typeof SET_FILTER,
  filter: Filter,
}

export const setFilter = (filter: Filter): SetFilterAction => ({
  type: SET_FILTER,
  filter
})

export type FilterActionTypes = SetFilterAction
