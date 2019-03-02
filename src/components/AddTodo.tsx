import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, InjectedFormProps, WrappedFieldProps } from 'redux-form'
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

interface FormData {
  text: string
}

export interface Props extends WithStyles<typeof styles>,
                               InjectedFormProps<FormData> {
  addTodo: (text: string) => void
}

function AddTodoForm(props: Props) {
  const { handleSubmit, classes, addTodo } = props
  const submit = (values: FormData) => addTodo(values.text)

  type InputProps = {
    placeholder: string
  } & WrappedFieldProps
  const renderInput: React.StatelessComponent<InputProps> = ({
    input,
    placeholder
  }) => (
    <Input {...input} className={classes.input} placeholder={placeholder} />
  )

  return (
    <form className={classes.root} onSubmit={handleSubmit(submit)}>
      <Field
        name="text"
        component={renderInput}
        placeholder="Add New Todo &hellip;"
        classes={classes} 
        />
      <IconButton aria-label="Comments" className={classes.icon} type="submit">
        <Icon color="primary">
          add_circle
        </Icon>
      </IconButton>
    </form>
  );
}

export default connect(null, mapDispatch)(
  reduxForm(
    {
      form: 'add'
    }
  )(
    withStyles(styles)(AddTodoForm)
  )  
)
