export const SET_STATUS = 'SET_STATUS'
export const SET_QUERY = 'SET_QUERY'

export enum Status {
  All = 'All',
  Completed = 'Completed',
  Incompleted = 'Incompleted',
}

interface SetStatusAction {
  type: typeof SET_STATUS,
  status: Status,
}

interface SetQueryAction {
  type: typeof SET_QUERY,
  query: string,
}

export const setStatus = (status: Status): SetStatusAction => ({
  type: SET_STATUS,
  status,
})

export const setQuery = (query: string): SetQueryAction => ({
  type: SET_QUERY,
  query,
})

export type FilterActionTypes = SetStatusAction | SetQueryAction
