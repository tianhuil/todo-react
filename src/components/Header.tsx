import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CheckBox from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import { Status } from '../store/'
import StatusButton from './StatusButton'

const styles = (theme: Theme) => createStyles({
  logo: {
    color: fade(theme.palette.common.white, 0.9),
    display: 'none',
    flexGrow: 1,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  root: {
    flexGrow: 1,
  },
  search: {
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    backgroundColor: fade(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 300,
    },
  },
  searchInput: {
    color: 'inherit',
    flexGrow: 1,
    marginLeft: 8,
    width: '100%',
  },
  searchIcon: {
    color: 'inherit',
    flexGrow: 0,
    padding: theme.spacing.unit,
  },
  statusButtons: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
})

export interface IProps extends WithStyles<typeof styles> {}

const HeaderComp: React.SFC<IProps> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.logo}>
            Todo List
          </Typography>
          <div className={classes.search}>
            <InputBase className={classes.searchInput} placeholder='Search&hellip' />
            <IconButton className={classes.searchIcon} aria-label='Search'>
              <SearchIcon />
            </IconButton>
          </div>
          <div className={classes.statusButtons}>
          <StatusButton status={Status.All}>
              <IndeterminateCheckBox/>
            </StatusButton>
            <StatusButton status={Status.Completed}>
              <CheckBox/>
            </StatusButton>
            <StatusButton status={Status.Incompleted}>
              <CheckBoxOutlineBlank/>
            </StatusButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(HeaderComp)
