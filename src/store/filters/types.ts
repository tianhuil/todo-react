import { Todo } from '../todos/types'

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

export type FilterActionTypes = SetFilterAction

export interface FilterState {
  filter: Filter
}
