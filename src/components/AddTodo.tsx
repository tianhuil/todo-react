import React, { FormEvent } from 'react';
import { connect } from 'react-redux'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import { addTodo } from "../store/";

const styles = (theme: Theme) => createStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing.unit * 1,
    width: '100%',
    maxWidth: 400,
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing.unit * 2,
    },
  },
  input: {
    marginLeft: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 4,
    },
    flex: 1,
  },
  icon: {
    margin: theme.spacing.unit * 1,
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing.unit * 2,
    },
  },
});

const mapDispatch = {
  addTodo,
}

export interface Props extends WithStyles<typeof styles> {
  addTodo: (text: string) => void
}

class AddTodoComp extends React.Component<Props> {
  input: React.RefObject<{}>

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event: FormEvent) {
    this.props.addTodo(this.input.value)
    this.input.value = ''
    event.preventDefault()
  }

  render() {
    const { classes, addTodo } = this.props;

    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <Input className={classes.input} placeholder="Add New Todo &hellip;" inputRef={el => this.input=el}/>
        <IconButton aria-label="Comments" className={classes.icon} onClick={this.handleSubmit} type="submit">
          <Icon color="primary">
            add_circle
          </Icon>
        </IconButton>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatch,
)(
  withStyles(styles)(AddTodoComp)
)
