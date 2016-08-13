import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import { closeDialog } from 'redux/actions'

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class SubmitDialog extends React.Component {
  constructor() {
    super()
  }

  render() {
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.props.closeDialog}
      />
    ];

    return (
        <Dialog
          title="Submission"
          actions={actions}
          modal={false}
          open={this.props.dialog.open}
        >
        {this.props.dialog.message}
        </Dialog>
    );
  }
}
export default SubmitDialog = connect(null, {closeDialog})(SubmitDialog)
