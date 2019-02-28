import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = (theme: Theme) => createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing.unit * 1,
    width: '100%',
    maxWidth: 400,
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing.unit * 2,
    },
  },
  input: {
    marginLeft: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 4,
    },
    flex: 1,
  },
  icon: {
    margin: theme.spacing.unit * 1,
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing.unit * 2,
    },
  },
});

export interface Props extends WithStyles<typeof styles> {}

function AddTodoComp(props: Props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Input className={classes.input} placeholder="Add New Todo &hellip;" />
      <IconButton aria-label="Comments" className={classes.icon} >
        <Icon color="primary">
          add_circle
        </Icon>
      </IconButton>
    </div>
  );
}

AddTodoComp.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(AddTodoComp);
