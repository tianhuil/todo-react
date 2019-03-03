import { ActionCreatorsMapObject } from "redux";

export type ArgumentType<F extends Function> = F extends (...args: infer A) => any ? A : never;
type VoidReturn<T> = T extends ((...args: infer A) => any) ? ((...args: A) => void) : any;

export type DispatchType<T extends ActionCreatorsMapObject> = {
  [K in keyof T]: VoidReturn<T[K]>
}
