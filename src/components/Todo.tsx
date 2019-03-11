import Checkbox from '@material-ui/core/Checkbox'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import React from 'react'

import { filterConnector, FilterProps } from '../connectors/filter'
import { todoConnector, TodoProps } from '../connectors/todo'

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

export interface Props extends WithStyles<typeof styles>,
                               TodoProps,
                               FilterProps,
                               IDirectProps {}

const TodoComp: React.SFC<Props> = ({ classes, deleteTodo, display, id, todoById, toggleTodo }) => {
  const todo = todoById(id)

  if (!display(todo.completed, todo.text)) {
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

// Using redux compose messes up the type signature for some reason
export default todoConnector(filterConnector(withStyles(styles)(TodoComp)))
