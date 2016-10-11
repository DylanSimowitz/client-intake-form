import * as actionTypes from 'redux/actions/actionTypes'

export default function(state = {}, action) {
  switch(action.type) {
  case actionTypes.SELECT_CLIENT:
    return {...state, selectedClient: action.id}
  case actionTypes.FETCH_CLIENTS:
    return {...state, clients: action.clients}
  case actionTypes.SET_CLIENT_FORM:
    return {...state, form: action.form}
  case actionTypes.DELETE_CLIENT:
    return Object.assign({}, state, {
      clients: state.clients.filter(client => {return client.id !== action.id}),
      selectedClient: ''
    })
  default:
    return state
  }
}
