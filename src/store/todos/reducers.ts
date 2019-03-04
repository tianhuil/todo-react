import { DeepReadonly } from 'utility-types'

import { ADD_TODO, DELETE_TODO, Todo, TodoActionTypes, TOGGLE_TODO } from './actions'

// slighty odd Todo, but it allows O(1) mutations
export type TodoState = DeepReadonly<{
  allIds: number[],  // all ids
  getId: { // get Todo for a specific id
    [id: number]: Todo,
  },
  nextId: number, // next Id to use
}>

const initialState: TodoState = {
  allIds: [0, 1],
  getId: {
    0: { id: 0, text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', completed: false },
    1: { id: 1, text: 'Praesentium placeat aut animi suscipit ipsa nesciunt vitae vero', completed: true },
  },
  nextId: 2,
}

export function todoReducer(
  state = initialState,
  action: TodoActionTypes,
): TodoState {
  const { allIds, getId, nextId } = state
  switch (action.type) {
    case ADD_TODO: {
      const newTodo: Todo = {
        id: nextId,
        text: action.text,
        completed: false,
      }
      return {
        allIds: [...allIds, nextId],
        getId: {
          ...getId,
          [nextId]: newTodo,
        },
        nextId: nextId + 1,
      }
    }

    case TOGGLE_TODO: {
      const id = action.id
      const toggledTodo: Todo = {
        ...getId[id],
        completed: !getId[id].completed,
      }
      return {
        ...state,
        getId: {
          ...getId,
          [id]: toggledTodo,
        },
      }
    }

    case DELETE_TODO: {
      const id = action.id
      const newGetId = {...getId}
      delete newGetId[id]
      return {
        ...state,
        allIds: allIds.filter((i) => i !== id),
        getId: newGetId,
      }
    }

    default: {
      return state
    }
  }
}
