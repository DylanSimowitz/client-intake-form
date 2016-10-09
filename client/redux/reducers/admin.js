import * as actionTypes from 'redux/actions/actionTypes'

export default function(state = {}, action) {
  switch(action.type) {
  case actionTypes.SELECT_CLIENT:
    return {...state, selectedClient: action.id}
  case actionTypes.FETCH_CLIENTS:
    return {...state, clients: action.clients}
  default:
    return state
  }
}
