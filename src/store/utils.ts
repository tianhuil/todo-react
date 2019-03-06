import { ActionCreatorsMapObject } from 'redux'

type VoidReturn<T> = T extends ((...args: infer A) => any) ? ((...args: A) => void) : any

export type DispatchType<T extends ActionCreatorsMapObject> = {
  [K in keyof T]: VoidReturn<T[K]>
}

export function action<T extends string, P>(type: T, payload: P): {type: T, payload: P} {
  return {type, payload}
}
