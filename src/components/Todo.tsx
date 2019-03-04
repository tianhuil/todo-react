import React from 'react'
import { connect } from 'react-redux'
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { State, toggleTodo, deleteTodo } from '../store/';
import { ListItemSecondaryAction, IconButton, Icon } from '@material-ui/core';

import { compose } from 'redux';

import { DispatchType } from '../store/utils'
import { Filter } from '../store/filters/actions';

const styles = (theme: Theme) => createStyles({
  checkbox: {
    '&:checked': {
      color: theme.palette.secondary.main
    }
  },
  delete: {
    color: theme.palette.grey[500],
  }
})

interface DirectProps {
  id: number
}

function display(completed: boolean, filter: Filter) {
  switch(filter) {
    case Filter.All: {
      return true
    }
    case Filter.Completed: {
      return completed ? true : false
    }
    case Filter.Incompleted: {
      return completed ? false : true
    }
  }
}

const mapState = (state: State, prop: DirectProps) => {
  const todo = state.todo.getId[prop.id]

  return {
    todo: todo,
    display: display(todo.completed, state.filter.filter)
  }
}

const mapDispatch = {
  toggleTodo,
  deleteTodo,
}

export interface Props extends WithStyles<typeof styles>,
                               ReturnType<typeof mapState>,
                               DispatchType<typeof mapDispatch>,
                               DirectProps {}

const TodoComp: React.SFC<Props> = ({ todo, id, toggleTodo, deleteTodo, classes, display }) => {
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
  withStyles(styles)
)(TodoComp)
