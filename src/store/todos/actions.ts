import { ADD_TODO, TOGGLE_TODO } from "./types"

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  text
})

export const ToggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id
})
