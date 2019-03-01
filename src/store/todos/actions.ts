import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./types"

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  text
})

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id
})

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  id
})
