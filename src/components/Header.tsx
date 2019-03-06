import AppBar from '@material-ui/core/AppBar'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CheckBox from '@material-ui/icons/CheckBox'
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank'
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox'
import React from 'react'

import { Status } from '../store/'
import QueryComp from './Query'
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
          <QueryComp />
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
