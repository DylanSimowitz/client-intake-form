import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { closeDialog } from 'redux/actions/dialogActions'

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class ReduxDialog extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {dialog, close} = this.props
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={close}
      />
    ]

    return (
        <Dialog
          title={dialog.title}
          actions={actions}
          modal={false}
          open={dialog.open}
        >
        {dialog.message}
        </Dialog>
    )
  }
}

const mapStateToProps = (state) => ({
  dialog: state.dialog
})

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(closeDialog()) 
  }
} 

export default ReduxDialog = connect(mapStateToProps, mapDispatchToProps)(ReduxDialog)
