import React from 'react';
import {Field} from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import Checkbox from 'material-ui/Checkbox'
import LockIcon from 'material-ui/svg-icons/action/lock'
import UnlockIcon from 'material-ui/svg-icons/action/lock-open'

const styles = {
  checkbox: {
    position: 'relative',
    left: '-4px',
    marginTop: '10px'
  }
}

class Component extends React.Component {
  constructor() {
    super();
    this.state = {
      masked: 'password',
      label: 'Show password'
    }
  }
  handleCheck = (event, isInputChecked) => {
    if (isInputChecked) {
      this.setState({
        masked: 'password',
        label: 'Show password'
      })
    }
    else {
      this.setState({
        masked: 'text',
        label: 'Hide password'
      })
    }
  }
  render() {
    return(
      <div>
        <Field name="password" type={this.state.masked} component={TextField} floatingLabelText="Password" fullWidth={true}/>
        <Checkbox style={styles.checkbox} label={this.state.label} onCheck={this.handleCheck} checkedIcon={<LockIcon/>} uncheckedIcon={<UnlockIcon/>} defaultChecked={true}/>
      </div>
    )
  }
}

module.exports = Component;
