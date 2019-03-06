export const SET_STATUS = 'SET_STATUS'

export enum Status {
  All = 'All',
  Completed = 'Completed',
  Incompleted = 'Incompleted',
}

interface SetStatusAction {
  type: typeof SET_STATUS,
  status: Status,
}

export const setStatus = (status: Status): SetStatusAction => ({
  type: SET_STATUS,
  status,
})

export type FilterActionTypes = SetStatusAction
