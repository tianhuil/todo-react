import React from 'react';
import { connect } from 'react-redux'
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { State, toggleTodo } from "../store/";

const styles = (theme: Theme) => createStyles({
})

interface DirectProps {
  id: number
}

const mapState = (state: State, prop: DirectProps) => ({
  todo: state.todo.getId[prop.id],
})

const mapDispatch = {
  toggleTodo,
}

export interface Props extends
    WithStyles<typeof styles>,
    ReturnType<typeof mapState>,
    DirectProps {
  toggleTodo: (id: number) => void
}

const TodoComp = (props: Props) => {
  const { todo, id, toggleTodo } = props;
  return (
    <ListItem role={undefined} dense button onClick={() => toggleTodo(id)}>
      <Checkbox
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText primary={todo.text} />
    </ListItem>
  )
}

export default connect(
  mapState,
  mapDispatch,
)(
  withStyles(styles)(TodoComp)
)
