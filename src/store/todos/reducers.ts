import { Todo, ADD_TODO, TOGGLE_TODO, TodoActionTypes, TodoState } from "./types"

const initialState: TodoState = {
  allIds: [0, 1],
  getId: {
    0: { id: 0, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", completed: false },
    1: { id: 1, text: "Praesentium placeat aut animi suscipit ipsa nesciunt vitae vero repellat reiciendis", completed: false }
  },
}

export function todoReducer(
  state=initialState,
  action: TodoActionTypes
): TodoState {
  const { allIds, getId } = state
  switch(action.type) {
    case ADD_TODO:
      const newTodoId: number = allIds.length
      const newTodo: Todo = {
        id: newTodoId,
        text: action.text,
        completed: false
      }
      return {
        allIds: [...allIds, newTodoId],
        getId: {
          ...getId,
          [newTodoId]: newTodo
        }
      }

    case TOGGLE_TODO:
      const id = action.id
      const toggledTodo: Todo = {
        ...getId[id],
        completed: !getId[id].completed
      }
      return {
        allIds,
        getId: {
          ...getId,
          [id]: toggledTodo
        }
      }

    default:
      return state
  }
}
