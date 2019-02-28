import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import AddTodoComp from './AddTodo';
import TodoComp from './Todo';
import { State } from "../store/";

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing.unit * 4,
      width: 600,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing.unit * 4
  }
})

const mapState = (state: State) => ({
  todoIds: state.todo.allIds,
})

export interface Props extends
  WithStyles<typeof styles>,
  ReturnType<typeof mapState> {
}

function TodoListComp(props: Props) {
  const { classes, todoIds } = props;
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <AddTodoComp/>
        <List dense className={classes.list}>
          { todoIds.map(todoId => <TodoComp key={todoId} id={todoId}/>) }
        </List>
      </Paper>
    </div>

  );
}

TodoListComp.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default connect(mapState)(
  withStyles(styles)(TodoListComp)
)
