import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    }
  }
})

export interface Props extends WithStyles<typeof styles> {}

function TodoList(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Typography variant="h1">
          Foo
        </Typography>
      </Paper>
    </div>

  );
}

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(TodoList);
