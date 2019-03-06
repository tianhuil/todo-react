import { createStyles, IconButton, Theme, WithStyles, withStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { DispatchType, setStatus, State, Status } from '../store'

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

interface IDirectProps {
  status: Status,
}

const mapState = (state: State, props: IDirectProps) => ({
  active: state.filter.status === props.status,
})

const mapDispatch = {
  setStatus,
}

export interface IProps extends WithStyles<typeof styles>,
                               ReturnType<typeof mapState>,
                               DispatchType<typeof mapDispatch>,
                               IDirectProps {}

const StatusButton: React.SFC<IProps> = ({ active, children, classes, status, setStatus }) => {
  const className = active ? classes.active : classes.root
  return (
    <IconButton className={className} onClick={() => setStatus(status)}>
      {children}
    </IconButton>
  )
}

export default compose(
  connect(mapState, mapDispatch),
  withStyles(styles),
)(StatusButton)
