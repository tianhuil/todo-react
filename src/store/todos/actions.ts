export interface Todo {
  id: number,
  text: string,
  completed: boolean,
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

interface AddTodoAction {
  type: typeof ADD_TODO
  text: string
}

interface CompleteTodoAction {
  type: typeof TOGGLE_TODO
  id: number
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO
  id: number
}

export type TodoActionTypes = AddTodoAction | CompleteTodoAction | DeleteTodoAction

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  text,
})

export const toggleTodo = (id: number): CompleteTodoAction => ({
  type: TOGGLE_TODO,
  id,
})

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  id,
})
