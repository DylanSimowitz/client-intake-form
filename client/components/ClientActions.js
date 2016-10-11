import React, {Component} from 'react'
import {connect} from 'react-redux'
import IconButton from 'material-ui/IconButton'
import TrashCan from 'material-ui/svg-icons/action/delete'
import {deleteClient} from 'redux/actions/adminActions'
import {openDialog} from 'redux/actions/dialogActions'

class ClientActions extends Component {
  render() {
    const {admin, openDialog, deleteClient} = this.props
    return(
      <IconButton 
        disabled={admin.selectedClient === ''} 
        tooltip="Delete" 
        onTouchTap={() => openDialog('Delete Client', 'Are you sure you want to delete this client?', () => deleteClient(admin.selectedClient))}
      >
        <TrashCan/>
      </IconButton>
    )
  }
}

function mapStateToProps(state) {
  return {
    admin: state.admin,
  }
}

export default ClientActions = connect(mapStateToProps, {deleteClient, openDialog})(ClientActions)
