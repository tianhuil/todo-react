import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

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

export interface IProps extends WithStyles<typeof styles> {}

const QueryComp: React.SFC<IProps> = ({ classes }) => (
  <div className={classes.search}>
    <InputBase className={classes.searchInput} placeholder='Search&hellip;' />
    <IconButton className={classes.searchIcon} aria-label='Search'>
      <SearchIcon />
    </IconButton>
  </div>
)

export default withStyles(styles)(QueryComp)
