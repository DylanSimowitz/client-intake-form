import * as actionTypes from './actionTypes'
import {loadForm} from './formActions'
import {openSnackbar} from './snackbarActions' 
import {closeDialog} from './dialogActions'

const API_ENDPOINT = '/api/users/'

export function deleteClient(id) {
  const URL = API_ENDPOINT + id
  return dispatch => {
    fetch(URL, {
      method: 'delete',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
    })
      .then(response => response.json())
      .then(json => {
        dispatch(openSnackbar(json.success))
        dispatch({type: actionTypes.DELETE_CLIENT, id})
        dispatch(closeDialog())
      })
  }
}

export function fetchClients() {
  const URL = API_ENDPOINT + 'clients' 
  return dispatch => {
    fetch(URL, {
      method: 'get',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
    })
      .then(response => response.json())
      .then(clients => {
        return dispatch({type: actionTypes.FETCH_CLIENTS, clients})
      })
  }
} 

export function selectClient(id) {
  return {type: actionTypes.SELECT_CLIENT, id}
}
