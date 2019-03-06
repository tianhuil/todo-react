import { action } from '../utils'

export interface Todo {
  id: number,
  text: string,
  completed: boolean,
}

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (text: string) => action(ADD_TODO, { text })

export const toggleTodo = (id: number) => action(TOGGLE_TODO, { id })

export const deleteTodo = (id: number) => action(DELETE_TODO, { id })

export type TodoActionTypes = ReturnType<typeof addTodo>
                            | ReturnType<typeof toggleTodo>
                            | ReturnType<typeof deleteTodo>
