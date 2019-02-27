import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';

const styles = (theme: Theme) => createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    margin: theme.spacing.unit * 2,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
});

export interface Props extends WithStyles<typeof styles> {}

function NewTodo(props: Props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Input className={classes.input} placeholder="Add New Todo &hellip;" />
      <Icon className={classes.icon} color="primary">
        add_circle
      </Icon>
    </div>
  );
}

NewTodo.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(NewTodo);
