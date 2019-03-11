import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import React from 'react'
import { compose } from 'redux'
import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form'

import { todoConnector, TodoProps } from './connectors/todo'

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

interface IFormData {
  text: string
}

type InputProps = WrappedFieldProps & WithStyles<typeof styles> & {
  placeholder: string,
}

const AddInput: React.StatelessComponent<InputProps> = ({input, placeholder, classes}) => (
  <Input {...input} placeholder={placeholder} className={classes.input} />
)

export interface IProps extends WithStyles<typeof styles>,
                                InjectedFormProps<IFormData>,
                                TodoProps {}

const AddTodoForm: React.SFC<IProps> = ({ handleSubmit, classes, reset, addTodo }) => {
  const submit = (values: IFormData) => {
    addTodo(values.text)
    reset()
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit(submit)}>
      <Field
        name='text'
        // Do not `.bind(this)` on below line: otherwise, will re-render and loose focus upon `onChange`
        component={AddInput}
        placeholder='Add New Todo &hellip;'
        classes={classes}
        />
      <IconButton aria-label='Comments' className={classes.icon} type='submit'>
        <Icon color='primary'>
          add_circle
        </Icon>
      </IconButton>
    </form>
  )
}

export default compose(
  reduxForm({form: 'add'}),
  todoConnector,
  withStyles(styles),
)(AddTodoForm)
