import * as actionTypes from './actionTypes'
import {setForm} from './formActions'
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
  const URL = API_ENDPOINT + id + '/form/questionnaire' 
  return dispatch => {
    dispatch({type: actionTypes.SELECT_CLIENT, id})
    fetch(URL, { 
      method: 'get',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
    })
      .then(response => response.json())
      .then(form => {
        //return dispatch({type: actionTypes.SET_CLIENT_FORM, form})
        return dispatch(setForm(form))
      })
  }
}
