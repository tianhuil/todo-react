import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { State } from '../store/'
import AddTodoComp from './AddTodo'
import TodoComp from './Todo'

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  list: {
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing.unit * 4,
    maxWidth: 500,
    width: '100%',
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing.unit * 4,
      width: 600,
    },
  },
})

const mapState = (state: State) => ({
  todoIds: state.todo.allIds,
})

export interface IProps extends WithStyles<typeof styles>,
                                ReturnType<typeof mapState> {}

const TodoListComp: React.SFC<IProps> = ({ classes, todoIds }) => {
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <AddTodoComp/>
        <List dense className={classes.list}>
          { todoIds.map((todoId) => <TodoComp key={todoId} id={todoId}/>) }
        </List>
      </Paper>
    </div>
  )
}

export default compose(
  connect(mapState),
  withStyles(styles),
)(TodoListComp)
