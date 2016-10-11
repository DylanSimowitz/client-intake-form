import * as actionTypes from './actionTypes'

export function setForm(data) {
  return {type: actionTypes.LOAD_FORM, data}
}

export function loadForm(name, id) {
  return dispatch => {
    fetch(`/api/users/${id}/form/${name}`, {
      method: 'get',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
    })
    .then(response => {
      return response.json()
    })
    .then(json => dispatch(setForm(json)))
  }
}