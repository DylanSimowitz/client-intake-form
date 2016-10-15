import React, {Component} from 'react'
import {connect} from 'react-redux'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import {selectClient, fetchClients} from 'redux/actions/adminActions'
import {loadForm} from 'redux/actions/formActions'

class SelectClient extends Component {

  componentWillMount() {
    this.props.fetchClients()
  }

  handleChange = (event, index, value) => {
    this.props.selectClient(value)
    this.props.loadForm('questionnaire', value)
  }

  render() {
    const {clients, admin} = this.props
    return(
      <SelectField value={admin.selectedClient} onChange={this.handleChange} fullWidth={false}>
        {
          clients.map(client => {return <MenuItem key={client.id} value={client.id} primaryText={`${client.last_name}, ${client.first_name}`}/>})
        }
      </SelectField>
    )
  }
}

function mapStateToProps(state) {
  return {
    clients: state.admin.clients,
    admin: state.admin,
  }
}

export default SelectClient = connect(mapStateToProps, {selectClient, fetchClients, loadForm})(SelectClient)
