import { Icon, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { deleteTodo, DispatchType, State, Status, toggleTodo } from '../store/'

const styles = (theme: Theme) => createStyles({
  checkbox: {
    '&:checked': {
      color: theme.palette.secondary.main,
    },
  },
  delete: {
    color: theme.palette.grey[500],
  },
})

interface IDirectProps {
  id: number
}

function display(completed: boolean, status: Status) {
  switch (status) {
    case Status.All: {
      return true
    }
    case Status.Completed: {
      return completed ? true : false
    }
    case Status.Incompleted: {
      return completed ? false : true
    }
  }
}

const mapState = (state: State, prop: IDirectProps) => {
  const todo = state.todo.getId[prop.id]

  return {
    display: display(todo.completed, state.filter.status) &&
      todo.text.toLowerCase().includes(state.filter.query.toLowerCase()),
    todo,
  }
}

const mapDispatch = {
  deleteTodo,
  toggleTodo,
}

export interface Props extends WithStyles<typeof styles>,
                               ReturnType<typeof mapState>,
                               DispatchType<typeof mapDispatch>,
                               IDirectProps {}

const TodoComp: React.SFC<Props> = ({ classes, deleteTodo, display, id, todo, toggleTodo }) => {
  if (!display) {
    return null
  }

  return (
    <ListItem role={undefined} dense button onClick={() => toggleTodo(id)}>
      <Checkbox
        className={classes.checkbox}
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText primary={todo.text} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => deleteTodo(id)}>
          <Icon className={classes.delete}>
            delete_forever
          </Icon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default compose(
  connect(mapState, mapDispatch),
  withStyles(styles),
)(TodoComp)
