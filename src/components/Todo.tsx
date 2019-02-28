import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { State, toggleTodo } from "../store/";

const styles = (theme: Theme) => createStyles({
})

interface DirectProps {
  id: number
}

const mapState = (state: State, prop: DirectProps) => ({
  todo: state.todo.getId[prop.id],
})

const mapDispatch = {
  toggleTodo,
}

export interface Props extends
    WithStyles<typeof styles>,
    ReturnType<typeof mapState>,
    DirectProps {
  toggleTodo: (id: number) => void
}

class TodoComp extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    const { classes, todo, id, toggleTodo } = this.props;
    return (
      <ListItem key={id} role={undefined} dense button onClick={this.handleClick}>
        <Checkbox
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText primary={todo.text} />
      </ListItem>
    )
  }
}


TodoComp.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default connect(
  mapState,
  mapDispatch,
)(
  withStyles(styles)(TodoComp)
)
