import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import { compose } from 'redux'
import { filterConnector, FilterProps } from './Filter'

const styles = (theme: Theme) => createStyles({
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
})

export interface IProps extends WithStyles<typeof styles>,
                                FilterProps {}

const QueryComp: React.SFC<IProps> = ({ classes, push, stateQuery }) => (
  <div className={classes.search}>
    <InputBase className={classes.searchInput}
               placeholder='Search&hellip;'
               value={stateQuery}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => push({query: event.target.value})} />
    <IconButton className={classes.searchIcon} aria-label='Search'>
      <SearchIcon />
    </IconButton>
  </div>
)

export default compose(
  filterConnector,
  withStyles(styles),
)(QueryComp)
