import IconButton from '@material-ui/core/IconButton'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Tooltip from '@material-ui/core/Tooltip'

import React from 'react'
import { compose } from 'redux'
import { Status } from '../store'
import { filterConnector, FilterProps } from './Filter'

const styles = (theme: Theme) => {
  const offWhite = fade(theme.palette.common.white, 0.5)

  const buttonSpacing = {
    padding: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 2,
    },
  }

  return createStyles({
    active: {
      ...buttonSpacing,
      color: theme.palette.common.white,
    },
    root: {
      ...buttonSpacing,
      color: offWhite,
    },
  })
}

export interface IProps extends WithStyles<typeof styles>,
                                FilterProps {
                                  status: Status,
                                  tooltip: string,
                                }

const StatusButton: React.SFC<IProps> = ({ children, classes, status, stateStatus, push, tooltip }) => {
  const className = (stateStatus === status) ? classes.active : classes.root
  return (
    <Tooltip title={tooltip} aria-label={tooltip} enterDelay={500} leaveDelay={200}>
      <IconButton className={className} onClick={() => push({status})}>
        {children}
      </IconButton>
    </Tooltip>
  )
}

export default compose(
  filterConnector,
  withStyles(styles),
)(StatusButton)
