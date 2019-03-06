import { action } from '../utils'

export const SET_STATUS = 'SET_STATUS'
export const SET_QUERY = 'SET_QUERY'

export enum Status {
  All = 'All',
  Completed = 'Completed',
  Incompleted = 'Incompleted',
}

export const setStatus = (status: Status) => action(SET_STATUS, { status })

export const setQuery = (query: string) => action(SET_QUERY, { query })

export type FilterActionTypes = ReturnType<typeof setStatus>
                              | ReturnType<typeof setQuery>
