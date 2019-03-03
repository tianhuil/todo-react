import { Filter, SET_FILTER } from './types'

export const setFilter = (filter: Filter) => ({
  type: SET_FILTER,
  filter
})
