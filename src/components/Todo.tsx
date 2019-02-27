import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { Todo } from '../types';

const styles = (theme: Theme) => createStyles({
})

export interface Props extends WithStyles<typeof styles> {
  todo: Todo
}

function TodoComp(props: Props) {
  const { classes, todo } = props;
  return (
    <ListItem key={todo.id} role={undefined} dense button>
      <Checkbox
        checked={todo.completed}
        tabIndex={-1}
        disableRipple
      />
      <ListItemText primary={todo.text} />
    </ListItem>
  )
}

TodoComp.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TodoComp)
