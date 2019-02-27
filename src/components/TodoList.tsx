import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

import NewTodo from './NewTodo';
import TodoComp from './Todo';
import { Todo } from '../types';

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

export interface Props extends WithStyles<typeof styles> {}

const todos: Todo[] = [
  { id: 1, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ", completed: false },
  { id: 2, text: "Praesentium aut ducimus quia id corporis eaque asperiores ut tempore sit in.", completed: true },
]

function TodoList(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <NewTodo/>
        <List dense className={classes.list}>
          {todos.map(todo => <TodoComp todo={todo}></TodoComp>)}
        </List>
      </Paper>
    </div>

  );
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TodoList);
