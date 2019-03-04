import React from 'react'
import { createStyles, Theme, IconButton, WithStyles, withStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

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

export interface Props extends WithStyles<typeof styles>{
  active?: boolean
}

const FilterButton: React.SFC<Props> = ({ classes, children, active }) => {
  const className = active ? classes.activefilterButton : classes.filterButton
  return (
    <IconButton className={className}>
      {children}
    </IconButton>
  )
}

export default withStyles(styles)(FilterButton)
