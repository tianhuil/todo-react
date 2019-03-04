import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { createStyles, IconButton, Theme, WithStyles, withStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'

import { State } from '../store'
import { Filter, setFilter } from '../store/filters/actions'
import { DispatchType } from '../store/utils'

const styles = (theme: Theme) => {
  const offWhite = fade(theme.palette.common.white, 0.5)

  const buttonSpacing = {
    padding: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 2,
    },
  }

  return createStyles({
    activefilterButton: {
      ...buttonSpacing,
      color: theme.palette.common.white,
    },
    filterButton: {
      ...buttonSpacing,
      color: offWhite,
    },
  })
}

interface IDirectProps {
  filter: Filter,
}

const mapState = (state: State, props: IDirectProps) => ({
  active: state.filter.filter === props.filter,
})

const mapDispatch = {
  setFilter,
}

export interface IProps extends WithStyles<typeof styles>,
                               ReturnType<typeof mapState>,
                               DispatchType<typeof mapDispatch>,
                               IDirectProps {}

const FilterButton: React.SFC<IProps> = ({ active, children, classes, filter, setFilter }) => {
  const className = active ? classes.activefilterButton : classes.filterButton
  return (
    <IconButton className={className} onClick={() => setFilter(filter)}>
      {children}
    </IconButton>
  )
}

export default compose(
  connect(mapState, mapDispatch),
  withStyles(styles),
)(FilterButton)
