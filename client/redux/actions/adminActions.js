import * as actionTypes from './actionTypes'

export function fetchClients() {
  return dispatch => {
    fetch('/api/users/clients', {
      method: 'get',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
    })
      .then(response => response.json())
      .then(clients => {
        dispatch(setClients(clients))
      })
  }
} 

function setClients(clients) {
  return {type: actionTypes.FETCH_CLIENTS, clients}
}

export function selectClient(id) {
  return {
    type: actionTypes.SELECT_CLIENT,
    id
  }
}
