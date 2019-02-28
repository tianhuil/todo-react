export interface Todo {
  id: number,
  text: string,
  completed: boolean,
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

interface AddTodoAction {
  type: typeof ADD_TODO
  text: string
}

interface CompleteTodoAction {
  type: typeof TOGGLE_TODO
  id: number
}

export type TodoActionTypes = AddTodoAction | CompleteTodoAction

// slighty odd Todo, but it allows O(1) mutations
export interface TodoState {
  allIds: number[],  // all ids
  getId: { // get Todo for a specific id
    [id: number]: Todo
  },
  nextId: number, // next Id to use
}
