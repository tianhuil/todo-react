import { connect } from 'react-redux'

import { addTodo, deleteTodo, State, toggleTodo } from '../../store/'
import { DispatchType } from '../../store/utils'

const mapState = (state: State) => {
  return {
    todoById: (id: number) => state.todo.getId[id],
    todoIds: state.todo.allIds,
  }
}

const mapDispatch = {
  addTodo,
  deleteTodo,
  toggleTodo,
}

export const todoConnector = connect(mapState, mapDispatch)
export interface TodoProps extends ReturnType<typeof mapState>,
                                   DispatchType<typeof mapDispatch> {}
