import * as actionTypes from './actionTypes'

function setForm(data) {
  return {type: actionTypes.LOAD_FORM, data}
}

export function loadForm(name) {
  return dispatch => {
    fetch(`/api/form/${name}`, {
      method: 'get',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
    })
    .then(response => {
      return response.json()
    })
    .then(json => dispatch(setForm(json)))
  }
}
