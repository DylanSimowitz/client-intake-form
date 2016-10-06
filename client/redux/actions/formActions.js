import * as actionTypes from './actionTypes'

export function loadForm(name) {
  return dispatch => {
    fetch(`/form/${name}`, {
      method: 'get',
      headers: {Authorization: `Bearer ${localStorage.getItem('jwtToken')}`},
    })
    .then(response => {
      dispatch(() => {return {type: actionTypes.LOAD_FORM, data: response.json()}})
    })
  }
}
