import React from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme: Theme) => {
  const offWhite = fade(theme.palette.common.white, 0.8)

  return createStyles({
    root: {
      flexGrow: 1,
    },
    logo: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
      color: offWhite,
      marginRight: theme.spacing.unit * 2,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      width: '100%',
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up('sm')]: {
        width: 300,
      },
      display: 'flex',
    },
    searchInput: {
      marginLeft: 8,
      flexGrow: 1,
      color: 'inherit',
      width: '100%',
    },
    searchIcon: {
      flexGrow: 0,
      padding: theme.spacing.unit,
      color: 'inherit',
    },
    accountButton: {
      marginLeft: theme.spacing.unit * 2,
      flexGrow: 1,
      textAlign: "right",
      color: offWhite,
    }
  })
};

export interface Props extends WithStyles<typeof styles> {}

function Header(props: Props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            Todo List
          </Typography>
          <div className={classes.search}>
            <InputBase className={classes.searchInput} placeholder="Search&hellip;" />
            <IconButton className={classes.searchIcon} aria-label="Search">
              <SearchIcon />
            </IconButton>
          </div>
          <div className={classes.accountButton}>
            <AccountCircle/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Header);
