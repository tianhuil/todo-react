import IconButton from '@material-ui/core/IconButton'
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import Tooltip from '@material-ui/core/Tooltip'

import React from 'react'

import { Status } from '../store'
import { filterConnector, FilterProps } from './connectors/filter'

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

export interface DirectProps {
  status: Status,
  tooltip: string,
}

export interface IProps extends WithStyles<typeof styles>,
                                FilterProps,
                                DirectProps {}

const StatusButton_: React.SFC<IProps> = ({ children, classes, status, stateStatus, push, tooltip }) => {
  const className = (stateStatus === status) ? classes.active : classes.root
  return (
    <Tooltip title={tooltip} aria-label={tooltip} enterDelay={500} leaveDelay={200}>
      <IconButton className={className} onClick={() => push({status})}>
        {children}
      </IconButton>
    </Tooltip>
  )
}

// Using redux compose messes up the type signature for some reason
export default filterConnector(withStyles(styles)(StatusButton_))
