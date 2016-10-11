import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { closeDialog } from 'redux/actions/dialogActions'

class ReduxDialog extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {dialog, closeDialog} = this.props
    const actions = [
      <RaisedButton
        label="Yes"
        primary={true}
        keyboardFocused={true}
        onTouchTap={dialog.action}
      />,
      <FlatButton
        label="No"
        primary={false}
        onTouchTap={() => closeDialog()}
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
  dialog: state.ui.dialog
})


export default ReduxDialog = connect(mapStateToProps, {closeDialog})(ReduxDialog)
