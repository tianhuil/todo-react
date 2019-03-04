import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStyles, IconButton, Theme, WithStyles, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { State } from '../store';
import { Filter, setFilter } from '../store/filters/actions';
import { DispatchType } from '../store/utils';

const styles = (theme: Theme) => {
  const offWhite = fade(theme.palette.common.white, 0.5)

  const buttonSpacing = {
    padding: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 2,
    },
  }

  return createStyles({
    filterButton: {
      ...buttonSpacing,
      color: offWhite,
    },
    activefilterButton: {
      ...buttonSpacing,
      color: theme.palette.common.white,
    }
  })
}

interface DirectProps {
  filter: Filter
}

const mapState = (state: State, props: DirectProps) => ({
  active: state.filter.filter === props.filter
})

const mapDispatch = {
  setFilter
}

export interface Props extends WithStyles<typeof styles>,
                               ReturnType<typeof mapState>,
                               DispatchType<typeof mapDispatch>,
                               DirectProps {}

const FilterButton: React.SFC<Props> = ({ classes, children, active, setFilter, filter }) => {
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
