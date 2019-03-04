import React from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CheckBox from '@material-ui/icons/CheckBox';
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox'
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FilterButton from './FilterButton';
import { Filter } from '../store/filters/actions';


const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    color: fade(theme.palette.common.white, 0.9),
    marginRight: theme.spacing.unit * 2,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: '100%',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      width: 300,
    },
    display: 'flex',
  },
  searchInput: {
    marginLeft: 8,
    flexGrow: 1,
    color: 'inherit',
    width: '100%',
  },
  searchIcon: {
    flexGrow: 0,
    padding: theme.spacing.unit,
    color: 'inherit',
  },
  filterButtons: {
    justifyContent: 'flex-end',
    display: 'flex',
    flexGrow: 1,
  },
})


export interface Props extends WithStyles<typeof styles> {}

const HeaderComp: React.SFC<Props> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            Todo List
          </Typography>
          <div className={classes.search}>
            <InputBase className={classes.searchInput} placeholder="Search&hellip;" />
            <IconButton className={classes.searchIcon} aria-label="Search">
              <SearchIcon />
            </IconButton>
          </div>
          <div className={classes.filterButtons}>
          <FilterButton filter={Filter.All}>
              <IndeterminateCheckBox/>
            </FilterButton>
            <FilterButton filter={Filter.Completed}>
              <CheckBox/>
            </FilterButton>
            <FilterButton filter={Filter.Incompleted}>
              <CheckBoxOutlineBlank/>
            </FilterButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(HeaderComp);
