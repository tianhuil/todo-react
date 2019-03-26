import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import React, { useRef } from 'react'
import { compose } from 'redux'

import { todoConnector, TodoProps } from '../connectors/todo'

const styles = (theme: Theme) => createStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    padding: '2px 4px',
    justifyContent: 'center',
    margin: theme.spacing.unit * 1,
    width: '100%',
    maxWidth: 400,
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing.unit * 2,
    },
  },
  input: {
    flex: 1,
    marginLeft: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 4,
    },
  },
  icon: {
    margin: theme.spacing.unit * 1,
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing.unit * 2,
    },
  },
})

export interface IProps extends WithStyles<typeof styles>,
                                TodoProps {}

const AddTodoForm: React.SFC<IProps> = ({ classes, addTodo }) => {
  const inputRef = useRef({value: ''})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Input name='text'
             type='text'
             inputRef={inputRef}
             placeholder='Add New Todo &hellip;'
             className={classes.input} />
      <IconButton aria-label='Comments' className={classes.icon} type='submit'>
        <Icon color='primary'>
          add_circle
        </Icon>
      </IconButton>
    </form>
  )
}

export default compose(
  todoConnector,
  withStyles(styles),
)(AddTodoForm)
