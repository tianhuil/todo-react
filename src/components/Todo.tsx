import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { State } from "../store/";

const styles = (theme: Theme) => createStyles({
})

interface DirectProps {
  id: number
}

const mapState = (state: State, prop: DirectProps) => ({
  todo: state.todo.getId[prop.id],
})

export interface Props extends
    WithStyles<typeof styles>,
    ReturnType<typeof mapState>,
    DirectProps {
}

function TodoComp(props: Props) {
  const { classes, todo, id } = props;
  return (
    <ListItem key={id} role={undefined} dense button>
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

export default connect(mapState)(
  withStyles(styles)(TodoComp)
)
